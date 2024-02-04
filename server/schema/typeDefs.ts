import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Entry {
    date: Date
    financial: Int
    fitness: Int
    dietary: Int
    social: Int
    professional: Int

    type Query {
      getAllEntries: [Entry]
    }

    type Mutation {
      createEntry(date: Date, financial: Int, fitness: Int, dietary: Int, social: Int, professional: Int): Entry
    }
  }
`;

export default typeDefs;

export {};