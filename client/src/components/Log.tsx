import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useQuery } from '@apollo/client';
import { GET_ALL_ENTRIES } from '../utils/queries';

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

const Log = () => {
	const [entries, setEntries] = useState<IEntry[] | null>(null);

	const { data, loading, error } = useQuery(GET_ALL_ENTRIES);

	useEffect(() => {
		if (!loading && data) {
			console.log(data);
		} else if (error) {
			console.log(error);
			throw new Error('Error fetching entries');
		}
	});
	return (
		<div>
			<h1>Securities Log</h1>
			{/* <EntriesContainer>
				{entries.map((entry, index) => (
					<Entry key={index}>
						<p>{entry}</p>
					</Entry>
				))}
			</EntriesContainer> */}
		</div>
	);
};

export default Log;
