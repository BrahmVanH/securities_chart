/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tmutation CreateEntry($financial: Int, $fitness: Int, $dietary: Int, $social: Int, $professional: Int) {\n\t\tcreateEntry(financial: $financial, fitness: $fitness, dietary: $dietary, social: $social, professional: $professional) {\n\t\t\tdate\n\t\t\tfinancial\n\t\t\tfitness\n\t\t\tdietary\n\t\t\tsocial\n\t\t\tprofessional\n\t\t}\n\t}\n": types.CreateEntryDocument,
    "\n\tquery AllEntries {\n\t\tallEntries {\n\t\t\tdate\n\t\t\tfinancial\n\t\t\tfitness\n\t\t\tdietary\n\t\t\tsocial\n\t\t\tprofessional\n\t\t}\n\t}\n": types.AllEntriesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tmutation CreateEntry($financial: Int, $fitness: Int, $dietary: Int, $social: Int, $professional: Int) {\n\t\tcreateEntry(financial: $financial, fitness: $fitness, dietary: $dietary, social: $social, professional: $professional) {\n\t\t\tdate\n\t\t\tfinancial\n\t\t\tfitness\n\t\t\tdietary\n\t\t\tsocial\n\t\t\tprofessional\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateEntry($financial: Int, $fitness: Int, $dietary: Int, $social: Int, $professional: Int) {\n\t\tcreateEntry(financial: $financial, fitness: $fitness, dietary: $dietary, social: $social, professional: $professional) {\n\t\t\tdate\n\t\t\tfinancial\n\t\t\tfitness\n\t\t\tdietary\n\t\t\tsocial\n\t\t\tprofessional\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery AllEntries {\n\t\tallEntries {\n\t\t\tdate\n\t\t\tfinancial\n\t\t\tfitness\n\t\t\tdietary\n\t\t\tsocial\n\t\t\tprofessional\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery AllEntries {\n\t\tallEntries {\n\t\t\tdate\n\t\t\tfinancial\n\t\t\tfitness\n\t\t\tdietary\n\t\t\tsocial\n\t\t\tprofessional\n\t\t}\n\t}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;