import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: 'http://localhost:3001',
	// this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
	documents: ['/**/*.{ts,tsx}'],
	generates: {
		'./src/__generated__/': {
			preset: 'client',
			plugins: [],
			presetConfig: {
				gqlTagName: 'gql',
			},
		},
	},
	ignoreNoDocuments: true,
};

export default config;
