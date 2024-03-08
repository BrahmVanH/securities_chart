import { useState, useEffect, useCallback } from 'react';

import { getEntries } from '../utils/API';
import { FormattedEntry } from '../types';
import { formatAllDates } from '../utils/helpers';
import { HistoryWrapper, EntriesContainer } from '../utils/styled';
import EntryCard from './EntryCard';


const History = () => {
	const [entries, setEntries] = useState<FormattedEntry[] | null>(null);

	const handleGetEntries = useCallback(async () => {
		try {
			const entries = await getEntries();
			if (entries) {
				setEntries(entries);
			}
		} catch (error) {
			console.error(error);
			throw new Error('Error fetching entries');
		}
	}, []);

	useEffect(() => {
		handleGetEntries();
	}, [handleGetEntries]);

	useEffect(() => {
		if (entries) {
			const formattedEntries = formatAllDates(entries.filter((entry): entry is FormattedEntry => entry !== null));
			setEntries(formattedEntries);
		}
	}, [entries]);

	return (
		<HistoryWrapper>
			<h1>History</h1>
			{entries ? (
				<EntriesContainer>
					{entries.map((entry, index) => (
						<EntryCard key={index} entry={entry} />
					))}
				</EntriesContainer>
			) : (
				<></>
			)}
		</HistoryWrapper>
	);
};

export default History;
