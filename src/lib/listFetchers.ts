import { gql } from 'graphql-request';
import fetcher from '@lib/fetcher';
import { ITodoList } from '@localTypes/client';

export const getListFetcher = async (listId: string): Promise<ITodoList | null> => {
  const query = gql`
    query getListById($listId: String!) {
      getListById(listId: $listId) {
        name
        id
        ownerId
        isFreezed
        todos {
          id
          title
          description
          done
          createdAt
          updatedAt
        }
      }
    }
  `;

  const variables = { listId };

  const res = await fetcher(query, variables);
  return res ? res.getListById : null;
};

export const getUserListsFetcher = async (ownerId: string): Promise<ITodoList[]> => {
  const query = gql`
    query getUserLists($ownerId: String!) {
      getUserLists(ownerId: $ownerId) {
        name
        id
        ownerId
        isFreezed
      }
    }
  `;

  const variables = { ownerId };

  const res = await fetcher(query, variables);
  return res.getUserLists;
};

export const createListFetcher = async (name: string, ownerId: string): Promise<ITodoList> => {
  const query = gql`
    mutation createList($name: String!, $ownerId: String!) {
      createList(name: $name, ownerId: $ownerId) {
        name
        id
        ownerId
        isFreezed
        todos {
          id
          title
          description
          done
          createdAt
          updatedAt
        }
      }
    }
  `;

  const variables = { name, ownerId };

  const res = await fetcher(query, variables);
  return res.createList;
};

export const updateListFetcher = async (updatedList: ITodoList): Promise<ITodoList> => {
  const query = gql`
    mutation updateList($updatedList: updateList!) {
      updateList(updatedList: $updatedList) {
        name
        id
        ownerId
        isFreezed
        todos {
          id
          title
          description
          done
          createdAt
          updatedAt
        }
      }
    }
  `;

  const variables = { updatedList };

  const res = await fetcher(query, variables);
  return res.updateList;
};
