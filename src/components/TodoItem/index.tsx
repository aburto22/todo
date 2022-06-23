import { ITodo } from '@localTypes/client';
import { formatDate } from '@lib/dates';
import { useList } from '@hooks/swr';
import { removeTodoFromList, updateTodoInList, toggleTodo } from '@lib/todos';
import { updateListFetcher } from '@lib/listFetchers';
import { DeleteSvg, ExpandSvg, DoneSvg } from '@components/Svg';
import { userNotAllowedToEdit } from '@lib/misc';
import { useUser } from '@auth0/nextjs-auth0';
import * as styles from './styles';

interface TodoItemProps {
  todo: ITodo;
  listId: string;
  setFocusTodoId: React.Dispatch<React.SetStateAction<string>>;
}

const TodoItem = ({ todo, listId, setFocusTodoId }: TodoItemProps) => {
  const { list, mutate } = useList(listId);
  const { user } = useUser();

  if (!list) {
    return null;
  }

  const handleDoneClick = () => {
    const updatedTodo = toggleTodo(todo);
    const updatedList = updateTodoInList(list, updatedTodo);

    const options = {
      optimisticData: updatedList,
      rollbackOnError: true,
      populateCache: true,
      revalidate: false,
    };

    mutate(updateListFetcher(updatedList), options);
  };

  const handleEditClick = () => {
    setFocusTodoId(todo.id);
  };

  const handleDeleteClick = async () => {
    const updatedList = removeTodoFromList(list, todo.id);

    const options = {
      optimisticData: updatedList,
      rollbackOnError: true,
      populateCache: true,
      revalidate: false,
    };

    mutate(updateListFetcher(updatedList), options);
  };

  const buttonDisabled = userNotAllowedToEdit(list, user);

  return (
    <styles.Todo done={todo.done}>
      <styles.Content done={todo.done}>
        <styles.Title>{todo.title}</styles.Title>
        <styles.Description>{todo.description}</styles.Description>
      </styles.Content>
      <styles.Footer>
        <styles.DateInfo>
          <p>Last updated:</p>
          <p>{formatDate(todo.updatedAt)}</p>
        </styles.DateInfo>
        <styles.ButtonContainer>
          <styles.ExpandButton
            type="button"
            onClick={handleEditClick}
            title="edit"
          >
            <ExpandSvg />
          </styles.ExpandButton>
          <styles.DeleteButton
            type="button"
            onClick={handleDeleteClick}
            title="delete"
            disabled={buttonDisabled}
          >
            <DeleteSvg />
          </styles.DeleteButton>
          <styles.DoneButton
            type="button"
            onClick={handleDoneClick}
            title="toggle completed"
            disabled={buttonDisabled}
          >
            <DoneSvg />
          </styles.DoneButton>
        </styles.ButtonContainer>
      </styles.Footer>
    </styles.Todo>
  );
};

export default TodoItem;
