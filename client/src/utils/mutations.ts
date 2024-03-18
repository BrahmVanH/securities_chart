// import { gql } from '../__generated__/gql';
import {gql } from '@apollo/client';

export const CREATE_ENTRY = gql(/* GraphQL */ `
	mutation AddEntry($date: String!, $text: String!, $securitiesRating: SecuritiesRatingInput!) {
		addEntry(date: $date, text: $text, securitiesRating: $securitiesRating) {
			id
			date
			text
			securitiesRating {
				dietary
				financial
				fitness
				mental
				professional
				social
			}
		}
	}
`);
