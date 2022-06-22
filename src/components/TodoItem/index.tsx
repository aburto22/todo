import { ITodo } from '@localTypes/client';
import { formatDate } from '@lib/dates';
import { useList } from '@hooks/swr';
import { removeTodoFromList, updateTodoInList, toggleTodo } from '@lib/todos';
import { updateListFetcher } from '@lib/listFetchers';
import { DeleteSvg, EditSvg, DoneSvg } from '@components/Svg';
import * as styles from './styles';

interface TodoItemProps {
  todo: ITodo;
  listId: string;
  setFocusTodoId: React.Dispatch<React.SetStateAction<string>>;
}

const TodoItem = ({ todo, listId, setFocusTodoId }: TodoItemProps) => {
  const { list, mutate } = useList(listId);

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
          <styles.EditButton type="button" onClick={handleEditClick} title="edit">
            <EditSvg />
          </styles.EditButton>
          <styles.DeleteButton type="button" onClick={handleDeleteClick} title="delete">
            <DeleteSvg />
          </styles.DeleteButton>
          <styles.DoneButton type="button" onClick={handleDoneClick} title="toggle completed">
            <DoneSvg />
          </styles.DoneButton>
        </styles.ButtonContainer>
      </styles.Footer>
    </styles.Todo>
  );
};

export default TodoItem;
