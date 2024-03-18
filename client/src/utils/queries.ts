import { gql } from '../__generated__/gql';

export const GET_ENTRIES = gql(/* GraphQL */ `
	query GetEntries {
		allEntries {
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
