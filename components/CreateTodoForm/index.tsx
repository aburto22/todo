import React, { useState } from 'react';
import { useAppDispatch } from '@hooks/redux';
import { addTodo } from '@slices/currentList';
import * as styles from './styles';

const CreateTodoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useAppDispatch();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      title,
      description,
    };
    dispatch(addTodo(newTodo));
    setTitle('');
    setDescription('');
  };

  return (
    <styles.Section>
      <styles.Form onSubmit={handleSubmit}>
        <styles.Title>Add a new ToDo</styles.Title>
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
    </styles.Section>
  );
};

export default CreateTodoForm;
