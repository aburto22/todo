import { request } from 'graphql-request';

const fetcher = async <T = any>(
  query: string,
  variables: any,
): Promise<T> => request('/api/graphql', query, variables);

export default fetcher;
