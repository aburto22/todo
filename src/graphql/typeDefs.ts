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
    createdAt: String
    updatedAt: String
  }

  input inputTodo {
    id: String
    title: String
    description: String
    done: Boolean
    createdAt: String
    updatedAt: String
  }

  input inputList {
    id: String
    name: String
    ownerId: String
    todos: [inputTodo]
    isFreezed: Boolean
    createdAt: String
    updatedAt: String
  }

  type Query {
    getUserByEmail(email: String!): User
    getUserLists(ownerId: String!): [List]!
    getListById(listId: String): List
  }

  type Mutation {
    createUser(email: String!, name: String!): User!
    saveNewList(list: inputList): List!
    updateList(updatedList: inputList): List
  }
`;

export default typeDefs;
