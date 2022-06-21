import { ITodo, ITodoList } from '@localTypes/client';
import { formatDate } from '@lib/dates';
import { deleteTodoFetcher } from '@lib/todoFetchers';
import type { KeyedMutator } from 'swr';
import * as styles from './styles';

interface TodoItemProps {
  todo: ITodo;
  mutate: KeyedMutator<ITodoList | null>;
  list: ITodoList;
}

const TodoItem = ({ todo, mutate, list }: TodoItemProps) => {
  const handleDoneClick = () => {

  };

  const handleEditClick = () => {

  };

  const handleDeleteClick = async () => {
    const optimisticData = {
      ...list,
      todos: list.todos.filter((t) => t._id !== todo._id),
    };

    const options = {
      optimisticData,
      rollbackOnError: true,
    };

    mutate(deleteTodoFetcher(todo._id, list._id), options);
  };

  return (
    <styles.Todo>
      <styles.Title>{todo.title}</styles.Title>
      <styles.Description>{todo.description}</styles.Description>
      <styles.Footer>
        <styles.DateInfo>
          <p>Last updated:</p>
          <p>{formatDate(Number(todo.updatedAt))}</p>
        </styles.DateInfo>
        <styles.ButtonContainer>
          <styles.EditButton type="button" onClick={handleEditClick} title="edit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </styles.EditButton>
          <styles.DeleteButton type="button" onClick={handleDeleteClick} title="delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </styles.DeleteButton>
          <styles.DoneButton type="button" onClick={handleDoneClick} title="toggle completed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </styles.DoneButton>
        </styles.ButtonContainer>
      </styles.Footer>
    </styles.Todo>
  );
};

export default TodoItem;
