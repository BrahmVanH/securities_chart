import { gql } from '../__generated__/gql';

export const CREATE_ENTRY = gql(/* GraphQL */ `
	mutation CreateEntry($financial: Int, $fitness: Int, $dietary: Int, $social: Int, $professional: Int) {
		createEntry(financial: $financial, fitness: $fitness, dietary: $dietary, social: $social, professional: $professional) {
			date
			financial
			fitness
			dietary
			social
			professional
		}
	}
`);
