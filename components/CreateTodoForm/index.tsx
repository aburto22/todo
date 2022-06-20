import React, { useState } from 'react';
import * as styles from './styles';

const CreateTodoForm = () => {
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
  };

  return (
    <styles.Section>
      <styles.Form onSubmit={handleSubmit}>
        <styles.Title>Add a new ToDo</styles.Title>
        <styles.Label htmlFor="title">
          Title:
          <styles.Input type="text" name="title" value={title} onChange={handleTitleChange} />
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
