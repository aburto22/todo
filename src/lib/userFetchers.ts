import { gql } from 'graphql-request';
import fetcher from '@lib/fetcher';
import { IUser } from '@localTypes/client';

export const getUserFetcher = async (email: string): Promise<IUser | null> => {
  const query = gql`
    query getUserByEmail($email: String!) {
      getUserByEmail(email: $email) {
        name
        id
        email
        createdAt
      }
    }
  `;

  const variables = { email };

  const res = await fetcher(query, variables);
  return res.getUserByEmail;
};

export const createUserFetcher = async (email: string, name: string): Promise<IUser> => {
  const query = gql`
    mutation createUser($email: String!, $name: String!) {
      createUser(email: $email, name: $name) {
        id
        name
        email
        createdAt
      }
    }
  `;

  const variables = { email, name };

  const res = await fetcher(query, variables);
  return res.createUser;
};
