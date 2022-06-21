import { gql } from 'graphql-request';
import fetcher from '@lib/fetcher';
import { ITodoList } from '@localTypes/client';

export const createTodoFetcher = async (
  title: string,
  description: string,
  listId: string,
): Promise<ITodoList> => {
  const query = gql`
    mutation {
      createTodo(title: "${title}", description: "${description}", listId: "${listId}") {
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
  return res.createTodo;
};
