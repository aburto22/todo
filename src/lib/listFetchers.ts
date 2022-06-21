import { gql } from 'graphql-request';
import fetcher from '@lib/fetcher';
import { ITodoList } from '@localTypes/client';

export const getListFetcher = async (listId: string): Promise<ITodoList | null> => {
  const query = gql`
    query {
      getListById(listId: "${listId}") {
        name
        id
        _id
        ownerId
        isFreezed
        todos {
          title
          description
          done
          createdAt
          updatedAt
          _id
        }
      }
    }
`;

  const res = await fetcher(query);
  return res.getListById;
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

export const createListFetcher = async (name: string, ownerId: string): Promise<ITodoList> => {
  const query = gql`
    mutation {
      createList(name: "${name}", ownerId: "${ownerId}") {
        name
        id
        _id
        ownerId
        isFreezed
        todos {
          _id
          title
          description
          done
          createdAt
          updatedAt
        }
      }
    }
  `;

  const res = await fetcher(query);
  return res.createList;
};
