import { gql } from '../__generated__/gql';

export const ADD_ENTRY = gql(/* GraphQL */ `
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
