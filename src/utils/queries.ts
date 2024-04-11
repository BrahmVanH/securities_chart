import { gql } from "../__generated__";

export const GET_ENTRIES = gql(/* GraphQL */ `
	query GetEntries {
		allEntries {
			_id
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
	query getEntry($_id: ID!) {
		getEntry(_id: $_id) {
			_id
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
