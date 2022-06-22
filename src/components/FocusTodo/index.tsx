import { useState } from 'react';
import { ITodo } from '@localTypes/client';
import FocusTodoContent from '@components/FocusTodoContent';
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
        <FocusTodoContent
          title={todo.title}
          description={todo.description}
          setIsEditing={setIsEditing}
        />
      )}
    </styles.Container>
  );
};

export default FocusTodo;
