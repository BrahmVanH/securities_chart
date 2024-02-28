import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FiBarChart2 } from 'react-icons/fi';
import { formatDistanceToNow } from 'date-fns';
import Chart from './Chart';
import { FormattedEntry, IEntryCardProps } from '../types';
import { getObjValuesAverage } from '../utils/helpers';
import { Entry } from '../__generated__/graphql';
import StarRating from './StarRating';

const CardWrapper = styled.div(({ theme }) => ({
	width: '90%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	alignItems: 'center',
	backgroundColor: 'transparent',
	padding: '0.5rem',
	borderBottom: `1px solid ${theme.stroke}`,
	borderRight: `1px solid ${theme.stroke}`,
	borderRadius: '10px',
}));

const Preview = styled.div`
	width: 95%;
	display: flex;
	flex-direction: row !important;
	justify-content: space-between;
	align-items: center;
`;
const EntryCard = (props: IEntryCardProps) => {
	const entry: FormattedEntry | undefined = props?.entry;

	const [formatDate, setFormatDate] = useState<string | null>(null);
	const [openDetails, setOpenDetails] = useState<boolean>(false);
	const [averageRating, setAverageRating] = useState<number>(1);

	const handleShowDetails = () => {
		setOpenDetails(!openDetails);
	};

	// useEffect(() => {
	// 	if (entry) {
	// 		const formattedDate = formatDistanceToNow(new Date(entry.date));
	// 		setFormatDate(formattedDate);
	// 	}
	// }, [entry]);

	useEffect(() => {
		if (entry) {
			const ratings: Entry = {
				dietary: entry.dietary ?? 1,
				financial: entry.financial ?? 1,
				fitness: entry.fitness ?? 1,
				professional: entry.professional ?? 1,
				social: entry.social ?? 1,
			};
			const averageRating = getObjValuesAverage(ratings);
			setAverageRating(averageRating);
		}
	}, [entry]);

	return (
		<CardWrapper onClick={() => handleShowDetails()}>
			<Preview>
				<FiBarChart2 style={{ margin: '0.5rem' }} size={'36px'} />
				{entry && entry.formattedDate && averageRating ? (
					<>
						<p style={{ margin: '0.5rem' }}>{entry.formattedDate}</p>
						<StarRating rating={averageRating} />
					</>
				) : (
					<></>
				)}
			</Preview>
			{openDetails && entry ? <Chart data={entry} /> : <></>}
		</CardWrapper>
	);
};

export default EntryCard;
