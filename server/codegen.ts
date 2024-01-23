import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: './schema/typeDefs.graphql',

	generates: {
		'__generated__/graphql.ts': {
			plugins: ['typescript', 'typescript-resolvers'],
		},
		'./graphql.schema.json': {
			plugins: ['introspection'],
		},
	},
};

export default config;
