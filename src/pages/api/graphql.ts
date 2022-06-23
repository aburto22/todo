import { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServer } from 'apollo-server-micro';
import typeDefs from '@graphql/typeDefs';
import resolvers from '@graphql/resolvers';
import { ApolloServerPluginLandingPageGraphQLPlayground, ApolloServerPluginLandingPageDisabled } from 'apollo-server-core';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    process.env.Node_ENV === 'production'
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloStart = apolloServer.start();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await apolloStart;
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res);
};

export default handler;
