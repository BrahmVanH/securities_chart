import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useQuery } from '@apollo/client';

import { GET_ALL_ENTRIES } from '../utils/queries';
import { IChartData } from '../types';
import { FormattedEntry } from '../types';
import { formatAllDates } from '../utils/helpers';

import EntryCard from './EntryCard';
import Chart from './Chart';

const HistoryWrapper = styled.div(({ theme }) => ({
	marginTop: '10%',
	width: '80%',
	height: 'min-content',
	maxHeight: '75%',
	backgroundColor: 'transparent',
	border: `1px solid ${theme.stroke}`,
	borderRadius: '40px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
}));

const EntriesContainer = styled.div`
	height: 100%;
	width: 90%;
	margin: 1rem;
	border-radius: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0.5rem;
	overflow-Y: scroll;

	@media (min-width: 768px) {
		width: 30%;
		height: 50%;
	}
`;

// const EntryCard = styled.div`
// 	padding: 0.5rem;
// 	border-bottom: 1px solid white;
// 	border-right: 1px solid white;
// 	border-radius: 10px;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	margin: 1rem 0;
// `;

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
