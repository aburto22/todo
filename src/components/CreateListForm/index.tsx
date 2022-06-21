import React, { useState } from 'react';
import { useUserLists } from '@hooks/swr';
import { useUser } from '@auth0/nextjs-auth0';
import { createListFetcher } from '@lib/fetchers';
import * as styles from './styles';

const CreateListForm = () => {
  const [name, setName] = useState('');
  const { user } = useUser();
  const userId = user?.sub || '';
  const { mutate } = useUserLists(userId);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(async (lists) => {
      const newList = await createListFetcher(name, userId);

      if (lists) {
        return [...lists, newList];
      }
      return [newList];
    });
    setName('');
  };

  return (
    <styles.Form onSubmit={handleSubmit}>
      <styles.Title>Create a new Todo List</styles.Title>
      <styles.Label htmlFor="title">
        Title:
        <styles.Input type="text" name="title" value={name} onChange={handleNameChange} required />
      </styles.Label>
      <styles.SubmitButton type="submit" styleType="primary">Create</styles.SubmitButton>
    </styles.Form>
  );
};

export default CreateListForm;
