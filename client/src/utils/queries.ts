import { gql } from '../__generated__/gql';

export const GET_ALL_ENTRIES = gql(/* GraphQL */ `
	query AllEntries {
		allEntries {
			date
			financial
			fitness
			dietary
			social
			professional
		}
	}
`);
