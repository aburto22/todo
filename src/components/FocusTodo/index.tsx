import { useState } from 'react';
import { ITodo } from '@localTypes/client';
import * as styles from './styles';

interface FocusTodoProps {
  todo: ITodo | null;
  setTodo: React.Dispatch<React.SetStateAction<ITodo | null>>;
}

const FocusTodo = ({ todo, setTodo }: FocusTodoProps) => {
  const [isEditing, setIsEditing] = useState(false);

  if (!todo) {
    return null;
  }

  const handleCloseClick = () => {
    setIsEditing(false);
    setTodo(null);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <styles.Container>
      <styles.CloseButton type="button" onClick={handleCloseClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </styles.CloseButton>
      <styles.Todo>
        <styles.Title>{todo.title}</styles.Title>
        <styles.Description>{todo.description}</styles.Description>
        <styles.ButtonContainer>
          {isEditing ? (
            <>
              <styles.Button
                type="button"
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
            </>
          ) : (
            <styles.Button
              type="button"
              styleType="primary"
              onClick={handleEditClick}
            >
              Edit
            </styles.Button>
          )}
        </styles.ButtonContainer>
      </styles.Todo>
    </styles.Container>
  );
};

export default FocusTodo;
