import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { createLambdaServer } from './bundle/server';

export const handler = async (event: APIGatewayProxyEvent, context: Context) => {
	try {

		const server = createLambdaServer();
		return new Promise((resolve, reject) => {
		const cb = (error: string | Error | null | undefined, args: any) => {
			if (error) {
				console.error('error in handler: ', error);
				reject(error);
			} else {
				resolve(args);
			}
		};
		
		server.createHandler()(event, context, cb);
	});
} catch (error) {
	console.error('error in handler: ', error);
	throw error;
};
