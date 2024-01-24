import { QueryResolvers, Query } from '../__generated__/graphql';
import EntryModel from '../models/Entry';

const queries: QueryResolvers = {
	getAllEntries: async (_: {}) => {
		try {
			const entries = await EntryModel.find({});

			if (!entries) {
				throw new Error('Cannot find any entries');
			}

			return entries;
		} catch (err: any) {
			console.error('error in getting all entries from database: ' + err.message);
			return null;
		}
	},
};

export default queries;
