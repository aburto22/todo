import { request, gql } from 'graphql-request';
import { IUserDb, ITodoList } from '@localTypes/.';

const fetcher = async <T = any>(query: string): Promise<T> => request('/api/graphql', gql`${query}`);

export const getUserFetcher = async (email: string): Promise<IUserDb | null> => {
  const query = gql`
    query {
      getUserByEmail(email: "${email}") {
        name
        id
        _id
        email
        createdAt
      }
    }
`;

  const res = await fetcher(query);
  return res.getUserByEmail;
};

export const createUserFetcher = async (email: string, name: string): Promise<IUserDb> => {
  const query = gql`
    mutation {
      createUser(email: "${email}", name: "${name}") {
        _id
        id
        name
        email
        createdAt
      }
    }
  `;

  const res = await fetcher(query);
  return res.createUser;
};

export const getUserListsFetcher = async (ownerId: string): Promise<ITodoList[]> => {
  const query = gql`
    query {
      getUserLists(ownerId: "${ownerId}") {
        name
        id
        _id
        ownerId
        isFreezed
      }
    }
`;

  const res = await fetcher(query);
  return res.getUserLists;
};
