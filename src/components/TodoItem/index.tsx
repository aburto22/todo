import { ITodo } from '@localTypes/client';
import { formatDate } from '@lib/dates';
import { useList } from '@hooks/swr';
import { removeTodoFromList, updateTodoInList, toggleTodo } from '@lib/todos';
import { updateListFetcher } from '@lib/listFetchers';
import { DeleteSvg, DoneSvg } from '@components/Svg';
import { userNotAllowedToEdit } from '@lib/misc';
import { useUser } from '@auth0/nextjs-auth0';
import { triggerPusher } from '@lib/pusher';
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

    mutate(async () => {
      const savedList = await updateListFetcher(updatedList);
      await triggerPusher(listId);
      return savedList;
    }, options);
  };

  const handleExpandClick = () => {
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

    mutate(async () => {
      const savedList = await updateListFetcher(updatedList);
      await triggerPusher(listId);
      return savedList;
    }, options);
  };

  const buttonDisabled = userNotAllowedToEdit(list, user);

  return (
    <styles.Todo done={todo.done}>
      <styles.Content
        type="button"
        done={todo.done}
        onClick={handleExpandClick}
      >
        <styles.Title>{todo.title}</styles.Title>
        {todo.description && <styles.Description>{todo.description}</styles.Description>}
        <styles.DateInfo>
          <p>Updated:</p>
          <p>{formatDate(todo.updatedAt)}</p>
        </styles.DateInfo>
      </styles.Content>
      <styles.ButtonContainer>
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
    </styles.Todo>
  );
};

export default TodoItem;
