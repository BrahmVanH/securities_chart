import { IEntry } from '../types';

const formatDate = (date: string) => {
	const d = new Date(date);
	const year = d.getFullYear();
	const month = d.getMonth() + 1;
	const day = d.getDate();
	return `${month}/${day}/${year}`;
};

export const formatAllDates = (entries: IEntry[]) => {
	return entries.map((entry) => {
		const formattedDate = formatDate(entry.date);
		return { ...entry, formattedDate: formattedDate };
	});
};

export const getObjValuesAverage = (ratings: IEntry) => {
	const total = Object.values(ratings).reduce((acc, curr) => {
		return acc + curr;
	}, 0);
	return Math.floor(total / Object.values(ratings).length);
};
