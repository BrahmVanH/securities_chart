import { Schema, Document, Model, model } from 'mongoose';
import { IEntry } from '../types';

const entrySchema = new Schema<IEntry>({
	date: {
		type: Date,
	},
	financial: {
		type: Number,
	},
	fitness: {
		type: Number,
	},
	dietary: {
		type: Number,
	},
	social: {
		type: Number,
	},
	professional: { type: Number },
});

const EntryModel: Model<IEntry> = model('EntryModel', entrySchema);
export default EntryModel;
