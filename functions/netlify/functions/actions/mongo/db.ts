import { connect, set } from 'mongoose';
import dotenv from 'dotenv';

const connectToDb = async () => {
	dotenv.config();
	try {
		const MONGO_URI = process.env.MONGO_URI ?? '';
		if (!MONGO_URI) {
			throw new Error('MONGO_URI not found');
		}
		set('strictQuery', true);
		await connect(MONGO_URI).then(() => console.log('Connected to MongoDB'));
	} catch (error) {
		console.error('Error connecting to MongoDB', error);
		throw new Error('Error connecting to MongoDB');
	}
};

export default connectToDb;
