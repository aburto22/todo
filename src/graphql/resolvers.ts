import { createUser, getUserByEmail } from '@lib/users';
import {
  getUserLists, getListById, saveNewList, updateList, deleteList,
} from '@lib/listsDb';
import { ITodoList } from '@localTypes/client';

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
    saveNewList: async (
      parent: any,
      { list }: { list: ITodoList },
    ) => saveNewList(list),
    updateList: async (
      parent: any,
      { updatedList }: { updatedList: ITodoList },
    ) => updateList(updatedList),
    deleteList: async (
      parent: any,
      { listId }: { listId: string },
    ) => deleteList(listId),
  },
};

export default resolvers;
