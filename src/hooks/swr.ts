import useSWR from 'swr';
import { getUserFetcher, getUserListsFetcher, getListFetcher } from '@lib/fetchers';

export const useUser = (email: string) => {
  const { data, error, mutate } = useSWR(email, getUserFetcher);

  return {
    user: data,
    isLoading: data === undefined && !error,
    error,
    mutate,
  };
};

export const useList = (listId: string) => {
  const { data, error, mutate } = useSWR(listId, getListFetcher);

  return {
    list: data,
    isLoading: data === undefined && !error,
    error,
    mutate,
  };
};

export const useUserLists = (ownerId: string) => {
  const { data, error, mutate } = useSWR(ownerId, getUserListsFetcher);

  return {
    lists: data,
    isLoading: data === undefined && !error,
    error,
    mutate,
  };
};
