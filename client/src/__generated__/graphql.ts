/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
// export type Scalars = {
//   ID: { input: string; output: string; }
//   String: { input: string; output: string; }
//   Boolean: { input: boolean; output: boolean; }
//   Int: { input: number; output: number; }
//   Float: { input: number; output: number; }
//   Date: { input: any; output: any; }
// };

export type Entry = {
  __typename?: 'Entry';
  date?: Maybe<Scalars['Date']['output']>;
  dietary?: Maybe<Scalars['Int']['output']>;
  financial?: Maybe<Scalars['Int']['output']>;
  fitness?: Maybe<Scalars['Int']['output']>;
  professional?: Maybe<Scalars['Int']['output']>;
  social?: Maybe<Scalars['Int']['output']>;
};

// export type Mutation = {
//   __typename?: 'Mutation';
//   createEntry?: Maybe<Entry>;
// };


// export type MutationCreateEntryArgs = {
//   dietary?: InputMaybe<Scalars['Int']['input']>;
//   financial?: InputMaybe<Scalars['Int']['input']>;
//   fitness?: InputMaybe<Scalars['Int']['input']>;
//   professional?: InputMaybe<Scalars['Int']['input']>;
//   social?: InputMaybe<Scalars['Int']['input']>;
// };

// export type Query = {
//   __typename?: 'Query';
//   allEntries?: Maybe<Array<Maybe<Entry>>>;
// };

// export type CreateEntryMutationVariables = Exact<{
//   financial?: InputMaybe<Scalars['Int']['input']>;
//   fitness?: InputMaybe<Scalars['Int']['input']>;
//   dietary?: InputMaybe<Scalars['Int']['input']>;
//   social?: InputMaybe<Scalars['Int']['input']>;
//   professional?: InputMaybe<Scalars['Int']['input']>;
// }>;


// export type CreateEntryMutation = { __typename?: 'Mutation', createEntry?: { __typename?: 'Entry', date?: any | null, financial?: number | null, fitness?: number | null, dietary?: number | null, social?: number | null, professional?: number | null } | null };

// export type AllEntriesQueryVariables = Exact<{ [key: string]: never; }>;


// export type AllEntriesQuery = { __typename?: 'Query', allEntries?: Array<{ __typename?: 'Entry', date?: any | null, financial?: number | null, fitness?: number | null, dietary?: number | null, social?: number | null, professional?: number | null } | null> | null };


export const CreateEntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEntry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"financial"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fitness"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dietary"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"social"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"professional"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEntry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"financial"},"value":{"kind":"Variable","name":{"kind":"Name","value":"financial"}}},{"kind":"Argument","name":{"kind":"Name","value":"fitness"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fitness"}}},{"kind":"Argument","name":{"kind":"Name","value":"dietary"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dietary"}}},{"kind":"Argument","name":{"kind":"Name","value":"social"},"value":{"kind":"Variable","name":{"kind":"Name","value":"social"}}},{"kind":"Argument","name":{"kind":"Name","value":"professional"},"value":{"kind":"Variable","name":{"kind":"Name","value":"professional"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"financial"}},{"kind":"Field","name":{"kind":"Name","value":"fitness"}},{"kind":"Field","name":{"kind":"Name","value":"dietary"}},{"kind":"Field","name":{"kind":"Name","value":"social"}},{"kind":"Field","name":{"kind":"Name","value":"professional"}}]}}]}}]} as unknown as DocumentNode<CreateEntryMutation, CreateEntryMutationVariables>;
export const AllEntriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllEntries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allEntries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"financial"}},{"kind":"Field","name":{"kind":"Name","value":"fitness"}},{"kind":"Field","name":{"kind":"Name","value":"dietary"}},{"kind":"Field","name":{"kind":"Name","value":"social"}},{"kind":"Field","name":{"kind":"Name","value":"professional"}}]}}]}}]} as unknown as DocumentNode<AllEntriesQuery, AllEntriesQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

// export type Entry = {
//   __typename?: 'Entry';
//   date?: Maybe<Scalars['Date']['output']>;
//   dietary?: Maybe<Scalars['Int']['output']>;
//   financial?: Maybe<Scalars['Int']['output']>;
//   fitness?: Maybe<Scalars['Int']['output']>;
//   professional?: Maybe<Scalars['Int']['output']>;
//   social?: Maybe<Scalars['Int']['output']>;
// };

export type Mutation = {
  __typename?: 'Mutation';
  createEntry?: Maybe<Entry>;
};


export type MutationCreateEntryArgs = {
  dietary?: InputMaybe<Scalars['Int']['input']>;
  financial?: InputMaybe<Scalars['Int']['input']>;
  fitness?: InputMaybe<Scalars['Int']['input']>;
  professional?: InputMaybe<Scalars['Int']['input']>;
  social?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  allEntries?: Maybe<Array<Maybe<Entry>>>;
};

export type CreateEntryMutationVariables = Exact<{
  financial?: InputMaybe<Scalars['Int']['input']>;
  fitness?: InputMaybe<Scalars['Int']['input']>;
  dietary?: InputMaybe<Scalars['Int']['input']>;
  social?: InputMaybe<Scalars['Int']['input']>;
  professional?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CreateEntryMutation = { __typename?: 'Mutation', createEntry?: { __typename?: 'Entry', date?: any | null, financial?: number | null, fitness?: number | null, dietary?: number | null, social?: number | null, professional?: number | null } | null };

export type AllEntriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllEntriesQuery = { __typename?: 'Query', allEntries?: Array<{ __typename?: 'Entry', date?: any | null, financial?: number | null, fitness?: number | null, dietary?: number | null, social?: number | null, professional?: number | null } | null> | null };
