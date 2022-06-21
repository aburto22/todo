import { createUser, getUserByEmail } from '@lib/users';
import { getUserLists, getListById, createList } from '@lib/lists';

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
  },
};

export default resolvers;
