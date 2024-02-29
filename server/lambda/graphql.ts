import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { createLambdaServer } from './bundle/server';

const handler = async () => {
	try {
		const server = createLambdaServer();

		// const result = new Promise((resolve, reject) => {
		// 	const cb = (err: Error, args: any) => (err ? reject(err) : resolve(args));
		// 	server.createHandler()(event, context, cb);
		// });
		// console.log('result: ', result);
		// const resolvedResult = await result;
		// console.log('resolvedResult: ', resolvedResult);
		// return result;

		return (await server).createHandler();
	} catch (error) {
		console.error('error in handler: ', error);
		throw error;
	}
};

export const graphqlHandler = (event: APIGatewayProxyEvent, context: Context, cb: any) => {
	handler().then((handler) => handler(event, context, cb));
};
