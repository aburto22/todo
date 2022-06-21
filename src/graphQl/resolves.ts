import { createUser, getUserByEmail } from '@lib/users';

const resolvers = {
  Query: {
    getOrCreateUser: async (parent: any, { email, name }: { email: string, name: string }) => {
      const user = await getUserByEmail(email);

      if (user) {
        return user;
      }

      return createUser(email, name);
    },
  },
};

export default resolvers;
