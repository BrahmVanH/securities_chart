import { useCallback, useEffect, useState } from 'react';
import { FiBarChart2 } from 'react-icons/fi';
import Chart from './Chart';
import { FormattedEntry, IEntryCardFCProps, ISecuritiesRating } from '../types';
import { getObjValuesAverage } from '../utils/helpers';
import StarRating from './StarRating';
import { CardWrapper, Preview } from '../utils/styled';

const EntryCard: React.FC<IEntryCardFCProps> = (props: IEntryCardFCProps) => {
	const entry: FormattedEntry | undefined = props?.entry;

	const [openDetails, setOpenDetails] = useState<boolean>(false);
	const [averageRating, setAverageRating] = useState<number>(1);

	const handleShowDetails = useCallback(() => {
		setOpenDetails(!openDetails);
	}, []);

	useEffect(() => {
		if (entry) {
			const ratings: ISecuritiesRating = {
				dietary: entry.securitiesRating?.dietary ?? 1,
				financial: entry.securitiesRating?.financial ?? 1,
				mental: entry.securitiesRating?.mental ?? 1,
				fitness: entry.securitiesRating?.fitness ?? 1,
				professional: entry.securitiesRating?.professional ?? 1,
				social: entry.securitiesRating?.social ?? 1,
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
