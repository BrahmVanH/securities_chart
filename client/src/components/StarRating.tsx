import { FiZap } from 'react-icons/fi';
import styled from 'styled-components';
import { IStarRatubgRatingProps } from '../types';

const StarRatingContainer = styled.div(
	({ theme }) => `
		width: 80%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		align-self: center;
		color: ${theme.stroke};
 `
);

export default function StarRating(props: IStarRatubgRatingProps) {
	// This component renders a number of filled x unfilled starts
	// based on the value of the overallRating var passed in

	const { rating } = props;

	return (
		<>
			{rating === 1 ? (
				<StarRatingContainer>
					<FiZap size={'12px'} />
				</StarRatingContainer>
			) : rating === 2 ? (
				<StarRatingContainer>
					<FiZap size={'12px'} />
					<FiZap size={'12px'} />
				</StarRatingContainer>
			) : rating === 3 ? (
				<StarRatingContainer>
					<FiZap size={'12px'} />
					<FiZap size={'12px'} />
					<FiZap size={'12px'} />
				</StarRatingContainer>
			) : rating === 4 ? (
				<StarRatingContainer>
					<FiZap size={'12px'} />
					<FiZap size={'12px'} />
					<FiZap size={'12px'} />
					<FiZap size={'12px'} />
				</StarRatingContainer>
			) : rating === 5 ? (
				<StarRatingContainer>
					<FiZap size={'12px'} />
					<FiZap size={'12px'} />
					<FiZap size={'12px'} />
					<FiZap size={'12px'} />
					<FiZap size={'12px'} />
				</StarRatingContainer>
			) : (
				<></>
			)}
		</>
	);
}
