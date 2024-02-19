import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useQuery } from '@apollo/client';
import { GET_ALL_ENTRIES } from '../utils/queries';
import { IChartData } from '../types';
import { FormattedEntry } from '../types';
import { formatAllDates } from '../utils/helpers';

const HistoryWrapper = styled.div(({ theme }) => ({
	width: '80%',
	height: 'min-content',
	backgroundColor: 'transparent',
	border: `1px solid ${theme.white}`,
	borderRadius: '40px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
}));

const EntriesContainer = styled.div`
	height: 75%;
	border-radius: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
		width: 30%;
		height: 50%;
	}
`;

const EntryCard = styled.div`
	padding: 0.5rem;
	border-bottom: 1px solid white;
	border-right: 1px solid white;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1rem 0;
`;

const History = () => {
	const [entries, setEntries] = useState<FormattedEntry[] | null>(null);

	const { data, loading, error } = useQuery(GET_ALL_ENTRIES);

	useEffect(() => {
		if (!loading && data?.allEntries) {
			console.log(data.allEntries);
      const formattedEntries = formatAllDates(data.allEntries.filter((entry): entry is FormattedEntry => entry !== null));
			setEntries(formattedEntries);
		} else if (error) {
			console.log(error);
			throw new Error('Error fetching entries');
		}
	}, [data, loading, error]);

	useEffect(() => {
		console.log(entries);
	}, [entries]);

	return (
		<HistoryWrapper>
			<h1>History</h1>
			{entries ? (
				<EntriesContainer>
					{entries.map((entry, index) => (
						<EntryCard key={index}>
							<p>{entry.formattedDate}</p>
						</EntryCard>
					))}
				</EntriesContainer>
			) : (
				<></>
			)}
		</HistoryWrapper>
	);
};

export default History;
