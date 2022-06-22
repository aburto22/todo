import { useState } from 'react';
import { ITodo } from '@localTypes/client';
import { updateTodo, updateTodoInList } from '@lib/todos';
import { useList } from '@hooks/swr';
import { updateListFetcher } from '@lib/listFetchers';
import * as styles from './styles';

interface EditTodoFormProps {
  todo: ITodo;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  listId: string;
}

const EditTodoForm = ({ todo, setIsEditing, listId }: EditTodoFormProps) => {
  const [titleInput, setTitleInput] = useState(todo.title);
  const [descriptionInput, setDescriptionInput] = useState(todo.description);
  const { list, mutate } = useList(listId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!list) {
      return;
    }

    const updatedData = {
      title: titleInput.trim(),
      description: descriptionInput.trim(),
    };
    const updatedTodo = updateTodo(todo, updatedData);
    const updatedList = updateTodoInList(list, updatedTodo);

    const options = {
      optimisticData: updatedList,
      rollbackOnError: true,
      populateCache: true,
      revalidate: false,
    };

    mutate(updateListFetcher(updatedList), options);

    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <styles.Form onSubmit={handleSubmit}>
      <styles.TitleInput
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
        required
      />
      <styles.DescriptionInput
        value={descriptionInput}
        onChange={(e) => setDescriptionInput(e.target.value)}
      />
      <styles.ButtonContainer>
        <styles.Button
          type="submit"
          styleType="success"
        >
          Save
        </styles.Button>
        <styles.Button
          type="button"
          styleType="danger"
          onClick={handleCancelClick}
        >
          Cancel
        </styles.Button>
      </styles.ButtonContainer>
    </styles.Form>
  );
};

export default EditTodoForm;
