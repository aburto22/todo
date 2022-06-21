import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    name: String
    createdAt: String
    id: String
  }

  type Todo {
    _id: ID
    title: String
    description: String
    done: Boolean
    createdAt: String
    updatedAt: String
  }

  type List {
    _id: ID
    name: String
    ownerId: String
    id: String
    todos: [Todo]
    isFreezed: Boolean
  }

  type Query {
    getUserByEmail(email: String!): User
    getUserLists(ownerId: String!): [List]!
    getListById(listId: String): List
  }

  type Mutation {
    createUser(email: String!, name: String!): User!
    createList(name: String, ownerId: String): List
    createTodo(title: String, description: String, listId: String): List
  }
`;

export default typeDefs;
