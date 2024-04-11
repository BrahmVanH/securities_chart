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
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Entry = {
  __typename?: 'Entry';
  _id?: Maybe<Scalars['ID']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  securitiesRating?: Maybe<SecuritiesRating>;
  text?: Maybe<Scalars['String']['output']>;
};

export type EntryInput = {
  securitiesRating?: InputMaybe<SecuritiesRatingInput>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEntry?: Maybe<Entry>;
};


export type MutationCreateEntryArgs = {
  entry?: InputMaybe<EntryInput>;
};

export type Query = {
  __typename?: 'Query';
  allEntries?: Maybe<Array<Maybe<Entry>>>;
  getEntry?: Maybe<Entry>;
};


export type QueryGetEntryArgs = {
  _id: Scalars['ID']['input'];
};

export type SecuritiesRating = {
  __typename?: 'SecuritiesRating';
  dietary?: Maybe<Scalars['Int']['output']>;
  financial?: Maybe<Scalars['Int']['output']>;
  fitness?: Maybe<Scalars['Int']['output']>;
  mental?: Maybe<Scalars['Int']['output']>;
  professional?: Maybe<Scalars['Int']['output']>;
  social?: Maybe<Scalars['Int']['output']>;
};

export type SecuritiesRatingInput = {
  dietary?: InputMaybe<Scalars['Int']['input']>;
  financial?: InputMaybe<Scalars['Int']['input']>;
  fitness?: InputMaybe<Scalars['Int']['input']>;
  mental?: InputMaybe<Scalars['Int']['input']>;
  professional?: InputMaybe<Scalars['Int']['input']>;
  social?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateEntryMutationVariables = Exact<{
  entry?: InputMaybe<EntryInput>;
}>;


export type CreateEntryMutation = { __typename?: 'Mutation', createEntry?: { __typename?: 'Entry', _id?: string | null, date?: any | null, text?: string | null, securitiesRating?: { __typename?: 'SecuritiesRating', financial?: number | null, fitness?: number | null, dietary?: number | null, mental?: number | null, social?: number | null, professional?: number | null } | null } | null };

export type GetEntriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEntriesQuery = { __typename?: 'Query', allEntries?: Array<{ __typename?: 'Entry', _id?: string | null, date?: any | null, text?: string | null, securitiesRating?: { __typename?: 'SecuritiesRating', dietary?: number | null, financial?: number | null, fitness?: number | null, mental?: number | null, professional?: number | null, social?: number | null } | null } | null> | null };

export type GetEntryQueryVariables = Exact<{
  _id: Scalars['ID']['input'];
}>;


export type GetEntryQuery = { __typename?: 'Query', getEntry?: { __typename?: 'Entry', _id?: string | null, date?: any | null, text?: string | null, securitiesRating?: { __typename?: 'SecuritiesRating', dietary?: number | null, financial?: number | null, fitness?: number | null, mental?: number | null, professional?: number | null, social?: number | null } | null } | null };


export const CreateEntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEntry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"entry"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EntryInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEntry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entry"},"value":{"kind":"Variable","name":{"kind":"Name","value":"entry"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"securitiesRating"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"financial"}},{"kind":"Field","name":{"kind":"Name","value":"fitness"}},{"kind":"Field","name":{"kind":"Name","value":"dietary"}},{"kind":"Field","name":{"kind":"Name","value":"mental"}},{"kind":"Field","name":{"kind":"Name","value":"social"}},{"kind":"Field","name":{"kind":"Name","value":"professional"}}]}}]}}]}}]} as unknown as DocumentNode<CreateEntryMutation, CreateEntryMutationVariables>;
export const GetEntriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEntries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allEntries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"securitiesRating"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dietary"}},{"kind":"Field","name":{"kind":"Name","value":"financial"}},{"kind":"Field","name":{"kind":"Name","value":"fitness"}},{"kind":"Field","name":{"kind":"Name","value":"mental"}},{"kind":"Field","name":{"kind":"Name","value":"professional"}},{"kind":"Field","name":{"kind":"Name","value":"social"}}]}}]}}]}}]} as unknown as DocumentNode<GetEntriesQuery, GetEntriesQueryVariables>;
export const GetEntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEntry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEntry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"securitiesRating"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dietary"}},{"kind":"Field","name":{"kind":"Name","value":"financial"}},{"kind":"Field","name":{"kind":"Name","value":"fitness"}},{"kind":"Field","name":{"kind":"Name","value":"mental"}},{"kind":"Field","name":{"kind":"Name","value":"professional"}},{"kind":"Field","name":{"kind":"Name","value":"social"}}]}}]}}]}}]} as unknown as DocumentNode<GetEntryQuery, GetEntryQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Entry = {
  __typename?: 'Entry';
  _id?: Maybe<Scalars['ID']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  securitiesRating?: Maybe<SecuritiesRating>;
  text?: Maybe<Scalars['String']['output']>;
};

export type EntryInput = {
  securitiesRating?: InputMaybe<SecuritiesRatingInput>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEntry?: Maybe<Entry>;
};


export type MutationCreateEntryArgs = {
  entry?: InputMaybe<EntryInput>;
};

export type Query = {
  __typename?: 'Query';
  allEntries?: Maybe<Array<Maybe<Entry>>>;
  getEntry?: Maybe<Entry>;
};


export type QueryGetEntryArgs = {
  _id: Scalars['ID']['input'];
};

export type SecuritiesRating = {
  __typename?: 'SecuritiesRating';
  dietary?: Maybe<Scalars['Int']['output']>;
  financial?: Maybe<Scalars['Int']['output']>;
  fitness?: Maybe<Scalars['Int']['output']>;
  mental?: Maybe<Scalars['Int']['output']>;
  professional?: Maybe<Scalars['Int']['output']>;
  social?: Maybe<Scalars['Int']['output']>;
};

export type SecuritiesRatingInput = {
  dietary?: InputMaybe<Scalars['Int']['input']>;
  financial?: InputMaybe<Scalars['Int']['input']>;
  fitness?: InputMaybe<Scalars['Int']['input']>;
  mental?: InputMaybe<Scalars['Int']['input']>;
  professional?: InputMaybe<Scalars['Int']['input']>;
  social?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateEntryMutationVariables = Exact<{
  entry?: InputMaybe<EntryInput>;
}>;


export type CreateEntryMutation = { __typename?: 'Mutation', createEntry?: { __typename?: 'Entry', _id?: string | null, date?: any | null, text?: string | null, securitiesRating?: { __typename?: 'SecuritiesRating', financial?: number | null, fitness?: number | null, dietary?: number | null, mental?: number | null, social?: number | null, professional?: number | null } | null } | null };

export type GetEntriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEntriesQuery = { __typename?: 'Query', allEntries?: Array<{ __typename?: 'Entry', _id?: string | null, date?: any | null, text?: string | null, securitiesRating?: { __typename?: 'SecuritiesRating', dietary?: number | null, financial?: number | null, fitness?: number | null, mental?: number | null, professional?: number | null, social?: number | null } | null } | null> | null };

export type GetEntryQueryVariables = Exact<{
  _id: Scalars['ID']['input'];
}>;


export type GetEntryQuery = { __typename?: 'Query', getEntry?: { __typename?: 'Entry', _id?: string | null, date?: any | null, text?: string | null, securitiesRating?: { __typename?: 'SecuritiesRating', dietary?: number | null, financial?: number | null, fitness?: number | null, mental?: number | null, professional?: number | null, social?: number | null } | null } | null };
