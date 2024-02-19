import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { createLambdaServer } from './bundle/server';

export const handler = async (event: APIGatewayProxyEvent, context: Context) => {
	const server = createLambdaServer();
	return new Promise((resolve, reject) => {
		const cb = (error: string | Error | null | undefined, args: any) => (error ? reject(error) : resolve(args));

		server.createHandler()(event, context, cb);
	});
};
