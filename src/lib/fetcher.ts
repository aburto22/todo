import { request } from 'graphql-request';

const fetcher = async <T = any>(query: string): Promise<T> => request('/api/graphql', query);

export default fetcher;
