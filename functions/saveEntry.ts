// functions/saveData.ts
import { Handler } from '@netlify/functions';
import { MongoClient } from 'mongodb';

const handler: Handler = async function (event, context) {
	const { data } = JSON.parse(event.body);
	const connectionString: string = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pizzaTracker';

	try {
		const client = new MongoClient(connectionString);
		await client.connect();

		const database = client.db('yourDatabaseName');
		const collection = database.collection('yourCollectionName');

		await collection.insertOne({ data });

		return {
			statusCode: 200,
			body: JSON.stringify({ message: 'Data saved successfully' }),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: 'Error saving data' }),
		};
	} finally {
		await client.close();
	}
};

export { handler };
