import { connect, set } from 'mongoose';

const connectToDb = async () => {
	try {
		const MONGO_URI = process.env.NODE_ENV === 'production' ? process.env.MONGO_URI : process.env.MONGO_URI_DEV;
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
