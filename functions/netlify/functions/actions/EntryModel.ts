import { Model, Schema, model, models } from 'mongoose';

interface ISecuritiesRating {
	financial: number;
	fitness: number;
	mental: number;
	dietary: number;
	social: number;
	professional: number;
}

export interface IEntry {
	text?: string;
	securitiesRating?: ISecuritiesRating;
}

const securitiesRatingSchema: Schema = new Schema<ISecuritiesRating>({
	financial: {
		type: Number,
		required: true,
	},
	fitness: {
		type: Number,
		required: true,
	},
	mental: {
		type: Number,
		required: true,
	},
	dietary: {
		type: Number,
		required: true,
	},
	social: {
		type: Number,
		required: true,
	},
	professional: {
		type: Number,
		required: true,
	},
});

const entriesSchema: Schema = new Schema<IEntry>({
	text: {
		type: String,
		required: true,
	},
	securitiesRating: {
		type: securitiesRatingSchema,
		required: true,
	},
});

const getEntriesModel = async () => {
	let entryModel: Model<IEntry>;
	try {
		if (!models.Entry) {
			entryModel = model<IEntry>('Entry', entriesSchema);
		} else {
			entryModel = model<IEntry>('Entry');
		}
		return entryModel;
	} catch (error) {
		console.error('Error getting Entry model', error);
	}
};

export default getEntriesModel;
