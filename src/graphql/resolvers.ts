import { createUser, getUserByEmail } from '@lib/users';

const resolvers = {
  Query: {
    getUserByEmail: async (parent: any, { email }: { email: string }) => getUserByEmail(email),
  },
  Mutation: {
    createUser: async (
      parent: any,
      { email, name }: { email: string, name: string },
    ) => createUser(email, name),
  },
};

export default resolvers;
