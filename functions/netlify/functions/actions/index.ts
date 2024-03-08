import express, { Request, Response, NextFunction } from 'express';
import serverless from 'serverless-http';
import dotenv from 'dotenv';
import router from './router';

dotenv.config();

const app = express();

interface IRequest extends Request {
	headers: {
		host?: string;
	};
}

const getAllowedOrigins = (req: IRequest, res: Response, next: NextFunction) => {
	const allowedOrigins = [
		'localhost:8888',
		'https://weekly-journal.netlify.app',
		'weekly-journal.netlify.app',
		'main--weekly-journal.netlify.app',
		'https://main--weekly-journal.netlify.app/',
		'https://weekly-journal.netlify.app',
	];
	const host = req.headers.host ?? '';
	console.log('host', host);

	if (allowedOrigins.includes(host)) {
		next();
	} else {
		res.status(405).send('Host not allowed');
	}
};
app.use(getAllowedOrigins);

app.use('/.netlify/functions/actions', router);

const handler = serverless(app);

export { handler };
