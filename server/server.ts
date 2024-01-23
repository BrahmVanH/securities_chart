import express from 'express';
import { db } from './config/connection';
import dotenv from 'dotenv';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './schema';
import { readFileSync } from 'fs';
import { Resolvers } from './__generated__/graphql';
import { DocumentNode } from 'graphql';

// Import typedefs from schema
const typeDefs: DocumentNode = readFileSync('./schema/typeDefs.graphql', { encoding: 'utf-8' }) as unknown as DocumentNode

// Save localhost port as a var
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

// Create express instance
const app = express();

// Configure dotenv
dotenv.config();

// Ensure only encoded url bodies are recognized by server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// If in production, server up built client from server
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
}

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs: DocumentNode, resolvers: Resolvers) => {
	await server.start();
	server.applyMiddleware({ app: app as any });

	db.once('open', () => {
		app.listen(PORT, () => {
			console.log(`API server running on port ${PORT}!`);
			console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
		});
	});
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
