import { createUser, getUserByEmail } from '@lib/users';
import { getUserLists, getListById, createList } from '@lib/lists';
import { createTodo, deleteTodo } from '@lib/todos';

const resolvers = {
  Query: {
    getUserByEmail: async (parent: any, { email }: { email: string }) => getUserByEmail(email),
    getUserLists: async (parent: any, { ownerId }: { ownerId: string }) => getUserLists(ownerId),
    getListById: async (parent: any, { listId }: { listId: string }) => getListById(listId),
  },
  Mutation: {
    createUser: async (
      parent: any,
      { email, name }: { email: string, name: string },
    ) => createUser(email, name),
    createList: async (
      parent: any,
      { name, ownerId }: { name: string, ownerId: string },
    ) => createList(name, ownerId),
    createTodo: async (
      parent: any,
      { title, description, listId }: { title: string, description: string, listId: string },
    ) => createTodo(title, description, listId),
    deleteTodo: async (
      parent: any,
      { todoId, listId }: { todoId: string, listId: string },
    ) => deleteTodo(todoId, listId),
  },
};

export default resolvers;
