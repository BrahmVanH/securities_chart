import { MutationResolvers, MutationCreateEntryArgs, Entry } from '../__generated__/graphql';
import EntryModel from '../models/Entry';

const mutations: MutationResolvers = {
	createEntry: async (_: {}, { date, financial, fitness, dietary, social, professional }: MutationCreateEntryArgs): Promise<Entry> => {
		try {
			const newEntry = await EntryModel.create({ date, financial, fitness, dietary, social, professional });

			if (!newEntry) {
				throw new Error('There was an error in creating a new entry');
			}

			return newEntry;
		} catch (err: any) {
			throw new Error('Error in creating new entry: ' + err.message);
		}
	},
};

export default mutations;
