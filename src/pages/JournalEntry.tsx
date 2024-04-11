import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { marked } from 'marked';
import styled from 'styled-components';
import { IEntry } from '../types';
import { GET_ENTRY } from '../utils/queries';
import { Entry } from '../__generated__/graphql';
import { formatDate } from '../utils/helpers';
import Chart from '../components/Chart';

const JournalEntryWrapper = styled.div(({ theme }) => ({
	background: `linear-gradient(${theme.putty},${theme.sanMarino})`,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	width: '100%',
}));

const JournalEntryContainer = styled.div`
	background-color: transparent;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;
	border: 1px solid white;
	border-radius: 65px;
`;

const JournalText = styled.div(({ theme }) => ({
	color: theme.black,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
}));

const ChartWrapper = styled.div({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
});

export default function JournalEntry() {
	const location = useLocation();
	const { entryId } = location.state;
	const [entry, setEntry] = useState<Entry>({});
	const [journalText, setJournalText] = useState<string>('');
	const [formattedDate, setFormattedDate] = useState<string>('');

	const { data, loading, error } = useQuery(GET_ENTRY, {
		variables: { _id: entryId },
	});

	useEffect(() => {
		if (data) {
			console.log('data', data);
		}
	}, [data]);

	const parseMarkdown = async (text: string) => {
		if (!text) {
			return;
		}
		const parseMd = await marked.parse(text);
		console.log('parseMd', parseMd);
		if (!parseMd) {
			console.error('error parsing markdown');
			throw new Error('error parsing markdown');
		}

		setJournalText(parseMd);
	};

	useEffect(() => {
		if (data?.getEntry && !loading && !error) {
			setEntry(data.getEntry);
		} else if (error) {
			console.error('error', error);
			throw new Error('error in fetching entry');
		}
	}, [data]);

	useEffect(() => {
		if (entry?.date) {
			setFormattedDate(formatDate(entry.date));
		}
	}, [entry.date]);

	useEffect(() => {
		if (entry.text) {
			parseMarkdown(entry.text);
		}
	}, [entry.text]);

	return (
		<JournalEntryWrapper>
			{entry.securitiesRating && journalText && formattedDate ? (
				<JournalEntryContainer>
					<h1>{formattedDate}</h1>
					<JournalText style={{ width: '100vw', height: 'min-content' }} dangerouslySetInnerHTML={{ __html: journalText }}></JournalText>
					<ChartWrapper>
						<Chart data={entry} />
					</ChartWrapper>
				</JournalEntryContainer>
			) : (
				<></>
			)}
		</JournalEntryWrapper>
	);
}
