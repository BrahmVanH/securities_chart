// functions/saveData.ts
import { Handler } from '@netlify/functions';
import { MongoClient } from 'mongodb';

const handler: Handler = async function (event, context) {
	const { data } = JSON.parse(event.body);

	try {
		const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
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
