import React, { useState } from 'react';
// import { useAppDispatch } from '@hooks/redux';
// import { addList } from '@slices/lists';
import * as styles from './styles';

const CreateListForm = () => {
  const [name, setName] = useState('');
  // const dispatch = useAppDispatch();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newList = {
      name,
    };
    console.log(newList);
    // dispatch(addList(newList));
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
