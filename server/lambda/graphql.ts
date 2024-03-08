import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { createLambdaServer } from './bundle/server';
// import { connect } from 'mongoose';

export const graphqlHandler = async (event: APIGatewayProxyEvent, context: Context) => {
	try {
		console.log('event: ', event);
		console.log('context: ', context);
		const server = createLambdaServer();

		const result = new Promise((resolve, reject) => {
			const cb = (err: Error, args: any) => (err ? reject(err) : resolve(args));
			server.createHandler()(event, context, (err: Error, args: any) => console.log('err: ', err));
		});
		console.log('result: ', result);
		const resolvedResult = await result;
		console.log('resolvedResult: ', resolvedResult);
		return result;
	} catch (error) {
		console.error('error in handler: ', error);
		throw error;
	}
};

// const graphqlServer = createLambdaServer();

// export const graphqlHandler = async (event: APIGatewayProxyEvent, context: Context, cb: any) => {
// 	context.callbackWaitsForEmptyEventLoop = false;
// 	const server = createLambdaServer();
// 	connectToDb()
// 		.then((connection) => {
// 			console.log('creating hanlder');
// 			console.log('connection:', connection);
// 			server.createHandler()(event, context, cb);
// 		})
// 		.catch((error) => {
// 			console.error('error connecting to db: ', error);
// 			cb(error);
// 		});
// };
