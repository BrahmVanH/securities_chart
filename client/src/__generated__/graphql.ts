/* eslint-disable */
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
  date?: Maybe<Scalars['Date']['output']>;
  dietary?: Maybe<Scalars['Int']['output']>;
  financial?: Maybe<Scalars['Int']['output']>;
  fitness?: Maybe<Scalars['Int']['output']>;
  professional?: Maybe<Scalars['Int']['output']>;
  social?: Maybe<Scalars['Int']['output']>;
};

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
