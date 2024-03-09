import express, { Request, Response } from 'express';
import connectToDb from './mongo/db';
import getEntriesModel, { IEntry } from './EntryModel';
import multer, { Multer } from 'multer';

const storage = multer.memoryStorage();
const upload: Multer = multer({ storage: storage });
// const uploadFile = upload.single('file');

const router = express.Router();

// Upload file content  as string to MongoDB collection object

const uploadFile = async (req: Request, res: Response, data: IEntry) => {
	try {
		await connectToDb();

		const MongooseModelActions = await getEntriesModel();

		if (!MongooseModelActions) {
			console.error('Error getting MongooseModelActions');
			res.status(500).json({ error: 'Internal Server Error' });
			return;
		}
		if (!data.securitiesRating) {
			console.error('Error getting MongooseModelActions');
			res.status(400).json({ error: 'Bad Request' });
			return;
		}
		const actionResult = await MongooseModelActions.create({ securitiesRating: data.securitiesRating, text: data.text ?? 'no text' });
		if (actionResult) {
			console.log('actionResult', actionResult);
			return actionResult;
		}
	} catch (error) {
		console.error('Error uploading file', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

const getEntries = async (req: Request, res: Response) => {
	try {
		await connectToDb();

		const MongooseModelActions = await getEntriesModel();

		if (!MongooseModelActions) {
			console.error('Error getting MongooseModelActions');
			res.status(500).json({ error: 'Internal Server Error' });
			return;
		}

		const actionResult = await MongooseModelActions.find({});
		if (actionResult) {
			return actionResult;
		}
	} catch (error) {
		console.error('Error getting entries', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

// Upload route to handle file uploads, restrict to text/markdown files and pass to uploadFile function

export const convertFileToBlob = (file: File) => {
	return new Promise<Blob>((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			const arrayBuffer = reader.result as ArrayBuffer;
			const blob = new Blob([arrayBuffer], { type: 'text/markdown' });
			resolve(blob);
		};
		reader.onerror = reject;
		reader.readAsArrayBuffer(file);
	});
};

const validateType = (type: string) => {
	if (type !== 'text/markdown' && type !== 'application/octet-stream') {
		return false;
	}
	return true;
};

// router.post('/entryText', upload.single('file'), async (req, res) => {
// 	try {
// 		if (!req.file) {
// 			console.log('no req.file');
// 			res.status(400).json({ error: 'Bad Request' });
// 			return;
// 		}
// 		console.log('req.file', req.file);
// 		// const fileData = convertFileToBlob(req.file);

// 		const fileData = req.file.buffer.toString('utf8');
// 		const type = req.file.mimetype;
// 		console.log('fileData', fileData);

// 		if (!fileData || !type || type !== 'application/octet-stream') {
// 			console.log('no fileData or type');
// 			res.status(400).json({ error: 'Bad Request' });
// 		} else {
// 			const response = await uploadFile(req, res, {fileData});
// 			res.status(200).json(response);
// 		}
// 	} catch (error) {
// 		console.error('Error uploading file', error);
// 		res.status(500).json({ error: 'Internal Server Error' });
// 	}
// });

router.post('/entry', upload.single('file'), async (req, res) => {
	try {
		if (!req.file) {
			console.log('no req.file');
			res.status(400).json({ error: 'Bad Request' });
			return;
		} else if (!req.body) {
			console.log('no req.body');
			res.status(400).json({ error: 'Bad Request' });
			return;
		}

		const securitiesRating = req.body;
		console.log('securitiesRating', securitiesRating);

		console.log('req.file', req.file);
		// const fileData = convertFileToBlob(req.file);

		const fileData = req.file.buffer.toString('utf8');
		const type = req.file.mimetype;
		console.log('fileData', fileData);
		const typeValid: boolean = validateType(type);

		if (!fileData || !type || !typeValid) {
			console.log('no fileData or type');
			res.status(400).json({ error: 'Bad Request' });
		}
		const data = { text: fileData, securitiesRating };
		const response = await uploadFile(req, res, data);
		if (response) {
			res.status(200).json(response);
		}
	} catch (error) {
		console.error('Error uploading file', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});
router.get('/entries', async (req, res) => {
	try {
		const response = await getEntries(req, res);
		if (response) {
			res.status(200).json(response);
		}
	} catch (error) {
		console.error('Error getting entries', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

// router.post('/', async (req, res) => {
// 	try {
// 		if (!req.body) {
// 			console.log('req.body', req.body);
// 			console.log('req.file', req.file);
// 			console.log('no req.body');
// 			res.status(400).json({ error: 'Bad Request no body' });
// 			return;
// 		}

// 		uploadFile(req, res, async (err: any) => {
// 			if (err) {
// 				console.error('Error uploading file', err);
// 				res.status(500).json({ error: 'Internal Server Error' });
// 				return;
// 			}

// 			if (!req.body) {
// 				res.status(400).json({ error: 'Bad Request no body' });
// 				return;
// 			}

// 			const file = req.body;
// 			const fileData = file.buffer.toString('utf8');
// 			const type = file.mimetype;

// 			if (!fileData || !type || type !== 'text/markdown') {
// 				res.status(400).json({ error: 'Bad Request not markdown' });
// 			} else {
// 				await connectToDb();

// 				const MongooseModelActions = await getActionsModel();

// 				if (!MongooseModelActions) {
// 					console.error('Error getting MongooseModelActions');
// 					res.status(500).json({ error: 'Internal Server Error' });
// 					return;
// 				}

// 				const actionResult = await MongooseModelActions.create({ text: fileData });

// 				res.status(200).json(actionResult);
// 			}
// 		});
// 	} catch (error) {
// 		console.error('Error uploading file', error);
// 		res.status(500).json({ error: 'Internal Server Error' });
// 	}
// });

// router.post('/', (req: Request, res: Response) => {
// 	console.log('req.body', req.body);
// 	console.log('it at least got into the test route');
// 	res.writeHead(200, { 'Content-Type': 'text/html' });
// 	res.write('Hello, actions');
// 	res.end();
// 	console.log('testing post route');
// });

router.get('/', (req, res) => {
	console.log('it at least got into the test route');
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write('Hello, actions');
	res.end();
});

export default router;
