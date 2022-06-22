import React, { useState } from 'react';
import { useUserLists } from '@hooks/swr';
import { useUser } from '@auth0/nextjs-auth0';
import { saveNewListFetcher } from '@lib/listFetchers';
import { createList } from '@lib/lists';
import * as styles from './styles';

const CreateListForm = () => {
  const [name, setName] = useState('');
  const { user } = useUser();
  const userId = user?.sub || '';
  const { lists, mutate } = useUserLists(userId);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!lists || !userId) {
      return;
    }

    const newList = createList(name, userId);

    const options = {
      optimisticData: [...lists, newList],
      rollbackOnError: true,
    };

    mutate(async () => {
      const savedList = await saveNewListFetcher(newList);
      return [...lists, savedList];
    }, options);
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
