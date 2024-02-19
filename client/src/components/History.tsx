import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useQuery } from '@apollo/client';
import { GET_ALL_ENTRIES } from '../utils/queries';
import { IChartData } from '../types';
import { Entry } from '../__generated__/graphql';

const EntriesContainer = styled.div`
	width: 80%;
	height: 75%;
	padding: 2rem;
	border: 1px solid white;
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
	width: 100%;
	height: 10%;
	border: 1px solid white;
	border-radius: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1rem 0;
`;

const History = () => {
	const [entries, setEntries] = useState<Entry[] | null>(null);

	const { data, loading, error } = useQuery(GET_ALL_ENTRIES);

	useEffect(() => {
		if (!loading && data?.allEntries) {
			console.log(data.allEntries);
			setEntries(data.allEntries.filter((entry): entry is Entry => entry !== null));
		} else if (error) {
			console.log(error);
			throw new Error('Error fetching entries');
		}
	}, []);
	return (
		<div>
			<h1>Securities Log</h1>
			{entries ? (
				<EntriesContainer>
					{/* {entries.map((entry, index) => (
						<EntryCard key={index}>
							<p >{entry.date}</p>
              <p>{entry.dietary}</p>
              <p>{entry.financial}</p> 
              <p>{entry.fitness}</p>
              <p>{entry.professional}</p>
              <p>{entry.social}</p>
						</EntryCard>
					))} */}
				</EntriesContainer>
			) : (
				<></>
			)}
		</div>
	);
};

export default History;
