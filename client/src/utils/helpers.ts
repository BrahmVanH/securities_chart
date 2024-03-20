import { ISecuritiesRating } from '../types';
import { Entry } from '../__generated__/graphql';

const formatDate = (date: string) => {
	const d = new Date(date);
	const year = d.getFullYear();
	const month = d.getMonth() + 1;
	const day = d.getDate();
	return `${month}/${day}/${year}`;
};

export const formatAllDates = (entries: Entry[]) => {
	return entries.map((entry) => {
		if (!entry.date) {
			return entry;
		}
		const formattedDate = formatDate(entry.date);
		return { ...entry, formattedDate: formattedDate };
	});
};

export const getObjValuesAverage = (ratings: ISecuritiesRating) => {
	const total = Object.values(ratings).reduce((acc, curr) => {
		return acc + curr;
	}, 0);
	return Math.floor(total / Object.values(ratings).length);
};

// converts markdown file to useable blob
export const convertFileToArrBuffer = (file: File) => {
	return new Promise<ArrayBuffer>((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			const arrayBuffer = reader.result as ArrayBuffer;
			resolve(arrayBuffer);
		};
		reader.onerror = reject;
		reader.readAsArrayBuffer(file);
	});
};

// TO-DO: Update type validation for file uploads
const validateType = (fileName: string) => {
	const ext = fileName.split('.').pop();
	if (!ext) {
		return false;
	}
	console.log('ext', ext);
	if (ext !== 'md') {
		return false;
	}
	return true;
};

// TO-DO: Add function to convert file buffer to string
export const convertMdFileToString = async (file: File) => {
	try {
		if (!file) {
			throw new Error('no file');
		} else if (!validateType(file.name)) {
			throw new Error('file type not supported');
		}
		const decoder = new TextDecoder('utf-8');

		const arrayBuffer = await convertFileToArrBuffer(file);

		const markdownString = decoder.decode(arrayBuffer);
		// console.log('mdBlob', mdBlob);
		console.log('markdownString', markdownString);
		console.log('file', file);

		if (!markdownString) {
			throw new Error('error converting markdown file to string');
		}

		return markdownString;
	} catch (error) {
		console.error('error', error);
	}
};
