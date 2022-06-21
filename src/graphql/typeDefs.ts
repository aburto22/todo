import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    name: String
    createdAt: String
    id: String
  }

  type Query {
    getUserByEmail(email: String): User
  }

  type Mutation {
    createUser(email: String!, name: String!): User!
  }
`;

export default typeDefs;
