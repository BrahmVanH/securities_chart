import { APIGatewayProxyEvent, Context, APIGatewayEvent } from 'aws-lambda';
import { createLambdaServer } from './bundle/server';

export const handler = async (event: APIGatewayEvent, context: Context) => {
	try {
		console.log('event: ', event);
		console.log('context: ', context);
		const server = createLambdaServer();
		const result = new Promise((resolve, reject) => {
			const cb = (err: Error, args: any) => (err ? reject(err) : resolve(args));
			server.createHandler()(event, context, cb);
		});
		console.log('result: ', result);
		const resolvedResult = await result;
		console.log('resolvedResult: ', resolvedResult);
		return result;

		// const cb = (error: string | Error | null | undefined, args: any) =>
		//  {
		// 	if (error) {
		// 		console.error('error in handler: ', error);
		// 		reject(error);
		// 	} else {
		// 		resolve(args);
		// 		server.createHandler()(event, context, cb);
		// 	}

		// };
	} catch (error) {
		console.error('error in handler: ', error);
		throw error;
	}
};
