import { ApolloServer as ApolloServerLambda, Config as LambdaConfig } from 'apollo-server-lambda';
import { ApolloServer, Config as ApolloConfig } from 'apollo-server';

import { Connection, connection, connect } from 'mongoose';

import EntryModel from './model';

import typeDefs from './schema';
import resolvers from './resolvers';

const uri: string = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/securitiesTracker';

let cachedDb: Connection;

const connectToDb = async () => {
	console.log('connectToDb starting');
	try {
		if (cachedDb) return;

		await connect(uri);

		cachedDb = connection;
	} catch (error) {
		console.error('Error connecting to database', error);
	}
};

const createLambdaServer = async () => {
	try {
		console.log('createLambdaServer starting');

		new ApolloServerLambda({
			typeDefs,
			resolvers,
			introspection: true,
			context: async () => {
				await connectToDb();

				return {
					models: {
						EntryModel,
					},
				};
			},
		});
	} catch (error) {
		console.error('Error creating Lambda server', error);
	}
};

const createLocalServer = () =>
	new ApolloServer({
		typeDefs,
		resolvers,
		introspection: true,
		cors: {
			origin: '*',
			credentials: true,
		},
		context: async () => {
			await connectToDb();

			return {
				models: {
					EntryModel,
				},
			};
		},
	});

export { createLambdaServer, createLocalServer };
