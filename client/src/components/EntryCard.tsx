import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FiAlignJustify } from 'react-icons/fi';
import { formatDistanceToNow } from 'date-fns';
import Chart from './Chart';
import { FormattedEntry, IEntryCardProps } from '../types';

const CardWrapper = styled.div(({ theme }) => ({
	width: '90%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-betweenz',
	alignItems: 'center',
	backgroundColor: 'transparent',
	padding: '0.5rem',
	borderBottom: `1px solid ${theme.stroke}`,
	borderRight: `1px solid ${theme.stroke}`,
	borderRadius: '10px',
}));

const Preview = styled.div`
	width: 90%;
	display: flex;
	flex-direction: row !important;
	justify-content: space-between;
	align-items: center;
`;
const EntryCard = (props: IEntryCardProps) => {
	const entry: FormattedEntry | undefined = props?.entry;
	const [formatDate, setFormatDate] = useState<string | null>(null);
	const [openDetails, setOpenDetails] = useState<boolean>(false);

	const handleShowDetails = () => {
		setOpenDetails(!openDetails);
	};

	useEffect(() => {
		if (entry) {
			const formattedDate = formatDistanceToNow(new Date(entry.date));
			setFormatDate(formattedDate);
		}
	}, [entry]);

	return (
		<CardWrapper onClick={() => handleShowDetails()}>
			<Preview>
				<FiAlignJustify size={'36px'} />
				{entry && entry.formattedDate ? (
					<>
						<p>{entry.formattedDate}</p>
						<p>{formatDate}</p>
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
