import useSWR from 'swr';
import { getUserFetcher } from '@lib/fetchers';

export const useUser = (email: string) => {
  const { data, error, mutate } = useSWR(email, getUserFetcher);

  return {
    user: data,
    isLoading: data === undefined && !error,
    error,
    mutate,
  };
};
