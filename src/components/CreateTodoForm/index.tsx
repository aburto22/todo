import React, { useState } from 'react';
import { updateListFetcher } from '@lib/listFetchers';
import { addTodoToList, createTodo } from '@lib/todos';
import { useList } from '@hooks/swr';
import { useUser } from '@auth0/nextjs-auth0';
import { userNotAllowedToEdit } from '@lib/misc';
import * as styles from './styles';

interface TodoListProps {
  listId: string;
}

const CreateTodoForm = ({ listId }: TodoListProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { list, mutate } = useList(listId);
  const { user } = useUser();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!list) {
      return;
    }

    const newTodo = createTodo(title.trim(), description.trim());
    const updatedList = addTodoToList(list, newTodo);

    const options = {
      optimisticData: updatedList,
      rollbackOnError: true,
      populateCache: true,
      revalidate: false,
    };

    mutate(updateListFetcher(updatedList), options);
    setTitle('');
    setDescription('');
  };

  const buttonDisabled = userNotAllowedToEdit(list, user);

  return (
    <styles.Form onSubmit={handleSubmit}>
      <styles.Title>Add a new Todo</styles.Title>
      <styles.Label htmlFor="title">
        Title:
        <styles.Input type="text" name="title" value={title} onChange={handleTitleChange} required />
      </styles.Label>
      <styles.Label htmlFor="description">
        Description:
        <styles.Textarea name="description" value={description} onChange={handleDescriptionChange} />
      </styles.Label>
      <styles.SubmitButton
        type="submit"
        styleType="primary"
        disabled={buttonDisabled}
      >
        Add
      </styles.SubmitButton>
    </styles.Form>
  );
};

export default CreateTodoForm;
