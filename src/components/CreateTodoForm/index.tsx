import React, { useState } from 'react';
import { createTodoFetcher } from '@lib/todoFetchers';
import type { ITodoList } from '@localTypes/client';
import type { KeyedMutator } from 'swr';
import * as styles from './styles';

interface TodoListProps {
  listId: string;
  mutate: KeyedMutator<ITodoList | null>;
}

const CreateTodoForm = ({ listId, mutate }: TodoListProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(async () => createTodoFetcher(title, description, listId));
    setTitle('');
    setDescription('');
  };

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
      <styles.SubmitButton type="submit" styleType="primary">Add</styles.SubmitButton>
    </styles.Form>
  );
};

export default CreateTodoForm;
