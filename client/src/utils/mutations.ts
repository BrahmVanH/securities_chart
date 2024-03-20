// import { gql } from '../__generated__/gql';
import {gql } from '@apollo/client';

export const CREATE_ENTRY = gql(/* GraphQL */ `
	mutation CreateEntry($entry: EntryInput) {
		createEntry(entry: $entry) {
			id
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
