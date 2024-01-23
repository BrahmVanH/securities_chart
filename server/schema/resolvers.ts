// import { AuthenticationError } from 'apollo-server-express';
// import Entry from '../models/Entry';
// import { IEntry } from '../types';
// import { Resolvers, MutationResolvers, QueryResolvers } from '../generated/graphql';

// const query: QueryResolvers = {
// 	getAllEntries: async () => {
// 		try {
// 			const entries = await Entry.find({});

// 			if (!entries) {
// 				throw new Error('Cannot find any entries');
// 			}

// 			return entries;
// 		} catch (err: any) {
// 			console.error('error in getting all entries from database: ' + err.message);
// 		}
// 	},
// };

// const mutation: MutationResolvers = {
// 	createEntry: async (_: any, { date, financial, fitness, dietary, social, professional }: IEntry) => {
// 		try {
// 			const newEntry = await Entry.create({ date, financial, fitness, dietary, social, professional });

// 			if (!newEntry) {
// 				throw new Error('There was an error in creating a new entry');
// 			}

// 			return newEntry;
// 		} catch (err: any) {
// 			throw new Error('Error in creating new entry: ' + err.message);
// 		}
// 	},
// };

// const resolvers: Resolvers = { query, mutation };

// export default resolvers;

export {};