import { ApolloError } from 'apollo-server-lambda';
import { Connection, Model } from 'mongoose';
import { IEntry } from './types';
import EntryModel from './model';
import { Resolvers } from './generated/graphql';

const resolvers: Resolvers = {
	Query: {
		allEntries: async () => {
			try {
				const entries = await EntryModel.find().exec();

				if (!entries) {
					throw new Error('No entries found in db');
				}

				return entries;
			} catch (err) {
				console.error('>allEntries error', err);
				throw new Error('There was an error in retrieving entries from db');
			}
		},
	},
	Mutation: {
		createEntry: async (_: {}, __: {}, { financial, fitness, dietary, social, professional }: IEntry) => {
			try {
				const newEntry = await EntryModel.create({
					date: new Date(),
					financial,
					fitness,
					dietary,
					social,
					professional,
				});

				return newEntry;
			} catch (err) {
				console.error('> createEntry error: ', err);

				throw new ApolloError('Error in creating new entry');
			}
		},
	},
};

export default resolvers;