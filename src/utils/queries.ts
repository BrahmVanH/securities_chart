import { gql } from '@apollo/client';

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

export const GET_ENTRY = gql(/* GraphQL */ `
	query getEntry($id: ID!) {
		getEntry(id: $id) {
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
