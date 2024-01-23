// import { AuthenticationError } from 'apollo-server-express';
// import Entry from '../models/Entry';
// import { IEntry } from '../types';

// const typeDefs = 
//   type Entry {
//     date: Date
//     financial: number
//     fitness: number
//     dietary: number
//     social: number
//     professional: number

//     type Query {
//       getAllEntries: [Entry]
//     }

//     type Mutation {
//       createEntry(date: Date, financial: number, fitness: number, dietary: number, social: number, professional: number): Entry
//     }
//   }



// const resolvers = {
// 	Query: {
// 		getAllEntries: async () => {
// 			try {
// 				const entries = await Entry.find({});

// 				if (!entries) {
// 					throw new Error('Cannot find any entries');
// 				}

// 				return entries;
// 			} catch (err: any) {
// 				console.error('error in getting all entries from database: ' + err.message);
// 			}
// 		},
// 	},
// 	Mutations: {
// 		createEntry: async (_, { date, financial, fitness, dietary, social, professional }: IEntry) => {
// 			try {
// 				const newEntry = await Entry.create({ date, financial, fitness, dietary, social, professional });

// 				if (!newEntry) {
// 					throw new Error('There was an error in creating a new entry');
// 				}

// 				return newEntry;
// 			} catch (err) {
// 				throw new Error('Error in creating new entry: ' + err.message);
// 			}
// 		},
// 	},
// };

// export default resolvers;

// export default typeDefs;

export {};