import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useList } from '@hooks/swr';
import { createTodoFetcher } from '@lib/fetchers';
import * as styles from './styles';

const CreateTodoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();
  const { id } = router.query;
  const listId = id?.toString() || '';
  const { mutate } = useList(listId);

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
