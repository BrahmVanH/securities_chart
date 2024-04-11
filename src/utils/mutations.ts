import {gql } from "../__generated__";

export const CREATE_ENTRY = gql(/* GraphQL */ `
	mutation CreateEntry($entry: EntryInput) {
		createEntry(entry: $entry) {
			_id
			date
			text
			securitiesRating {
				financial
				fitness
				dietary
				mental
				social
				professional
			}
		}
	}
`);
