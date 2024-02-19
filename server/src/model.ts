import { model, Schema, Connection, Model } from 'mongoose';
import { IEntry } from './types';

const entrySchema: Schema = new Schema<IEntry>({
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

const EntryModel = model<IEntry>('Entry', entrySchema);

export default EntryModel;
