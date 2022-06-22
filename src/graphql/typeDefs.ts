import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type User {
    email: String
    name: String
    createdAt: String
    id: String
  }

  type Todo {
    id: String
    title: String
    description: String
    done: Boolean
    createdAt: String
    updatedAt: String
  }

  type List {
    id: String
    name: String
    ownerId: String
    todos: [Todo]
    isFreezed: Boolean
  }

  input inputTodo {
    id: String
    title: String
    description: String
    done: Boolean
    createdAt: String
    updatedAt: String
  }

  input updateList {
    id: String
    name: String
    ownerId: String
    todos: [inputTodo]
    isFreezed: Boolean
  }

  type Query {
    getUserByEmail(email: String!): User
    getUserLists(ownerId: String!): [List]!
    getListById(listId: String): List
  }

  type Mutation {
    createUser(email: String!, name: String!): User!
    createList(name: String, ownerId: String): List!
    updateList(updatedList: updateList): List
  }
`;

export default typeDefs;
