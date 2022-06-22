import { useState } from 'react';
import * as styles from './styles';

interface EditTodoFormProps {
  title: string;
  description: string;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditTodoForm = ({ title, description, setIsEditing }: EditTodoFormProps) => {
  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <styles.Form onSubmit={handleSubmit}>
      <styles.TitleInput
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
      />
      <styles.DescriptionInput
        value={descriptionInput}
        onChange={(e) => setDescriptionInput(e.target.value)}
      />
      <styles.ButtonContainer>
        <styles.Button
          type="submit"
          styleType="success"
          onClick={handleSaveClick}
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
