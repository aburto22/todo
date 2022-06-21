import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    name: String
  }

  type Query {
    getOrCreateUser(email: String!, name: String!): User
  }
`;

export default typeDefs;
