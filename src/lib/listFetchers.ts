import { gql } from 'graphql-request';
import fetcher from '@lib/fetcher';
import { ITodoList } from '@localTypes/client';

export const getListFetcher = async (listId: string): Promise<ITodoList | null> => {
  const query = gql`
    query getListById($listId: String!) {
      getListById(listId: $listId) {
        id
        name
        ownerId
        isFreezed
        createdAt
        updatedAt
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
        id
        name
        ownerId
        isFreezed
        createdAt
        updatedAt
        todos {
          id
        }
      }
    }
  `;

  const variables = { ownerId };

  const res = await fetcher(query, variables);
  return res.getUserLists;
};

export const saveNewListFetcher = async (list: ITodoList): Promise<ITodoList> => {
  const query = gql`
    mutation saveNewList($list: inputList!) {
      saveNewList(list: $list) {
        id
        name
        ownerId
        isFreezed
        createdAt
        updatedAt
        todos {
          id
        }
      }
    }
  `;

  const variables = { list };

  const res = await fetcher(query, variables);
  return res.saveNewList;
};

export const updateListSummaryFetcher = async (updatedList: ITodoList): Promise<ITodoList> => {
  const query = gql`
    mutation updateListSummary($updatedList: inputListSummary!) {
      updateListSummary(updatedList: $updatedList) {
        id
        name
        ownerId
        isFreezed
        createdAt
        updatedAt
        todos {
          id
        }
      }
    }
  `;

  const variables = { updatedList };

  const res = await fetcher(query, variables);
  return res.updateListSummary;
};

export const updateListFetcher = async (updatedList: ITodoList): Promise<ITodoList> => {
  const query = gql`
    mutation updateList($updatedList: inputList!) {
      updateList(updatedList: $updatedList) {
        id
        name
        ownerId
        isFreezed
        createdAt
        updatedAt
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

export const deleteListFetcher = async (listId: string): Promise<ITodoList> => {
  const query = gql`
    mutation deleteList($listId: String!) {
      deleteList(listId: $listId) {
        id
        name
        ownerId
        isFreezed
        createdAt
        updatedAt
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
  return res.deleteList;
};
