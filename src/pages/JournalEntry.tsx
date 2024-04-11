import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { marked } from 'marked';
import { IEntry } from '../types';
import { GET_ENTRY } from '../utils/queries';

export default function JournalEntry() {
	const location = useLocation();
	const { entryId } = location.state;
	const [entry, setEntry] = useState<IEntry>({});
	const [journalText, setJournalText] = useState<string>('');

	const { data, loading, error } = useQuery(GET_ENTRY, {
		variables: { id: entryId },
	});

	const parseMarkdown = async (text: string) => {
		if (!text) {
			return;
		}
		const parseMd = await marked.parse(text);
		if (!parseMd) {
			console.error('error parsing markdown');
			throw new Error('error parsing markdown');
		}

		setJournalText(parseMd);
	};

	useEffect(() => {
		if (data && !loading && !error) {
			setEntry(data.getEntry);
		} else if (error) {
			console.error('error', error);
			throw new Error('error in fetching entry');
		}
	}, [data]);

	useEffect(() => {
		if (entry.text) {
			parseMarkdown(entry.text);
		}
	}, [entry.text]);

	return (
		<div>
			{entry.securitiesRating && journalText ? (
				<>
					<h1>{entry.date}</h1>
					<p>{journalText}</p>
					<p>Financial: {entry?.securitiesRating.financial}</p>
					<p>Fitness: {entry.securitiesRating.fitness}</p>
					<p>Mental: {entry.securitiesRating.mental}</p>
					<p>Dietary: {entry.securitiesRating.dietary}</p>
					<p>Social: {entry.securitiesRating.social}</p>
					<p>Professional: {entry.securitiesRating.professional}</p>
				</>
			) : (
				<></>
			)}
		</div>
	);
}
