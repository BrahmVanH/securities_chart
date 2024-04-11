import React, { useState, useEffect } from 'react';

import { FormattedEntry } from '../types';
import { formatAllDates } from '../utils/helpers';
import { HistoryWrapper, EntriesContainer } from '../utils/styled';
import EntryCard from './EntryCard';
import { useQuery } from '@apollo/client';
import { GET_ENTRIES } from '../utils/queries';

const History: React.FC = () => {
	const [entries, setEntries] = useState<FormattedEntry[] | null>(null);

	const { data, loading, error } = useQuery(GET_ENTRIES);

	useEffect(() => {
		if (error) {
			console.error(error);
		}
		if (!loading && data?.allEntries) {
			const formattedEntries = formatAllDates(data.allEntries.filter((entry: any): entry is FormattedEntry => entry !== null));
			setEntries(formattedEntries);
		}
	}, [data, error, loading]);

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
