import { gql } from 'graphql-request';
import fetcher from '@lib/fetcher';
import { IUserDb } from '@localTypes/.';

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
