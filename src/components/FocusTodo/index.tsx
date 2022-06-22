import { useState } from 'react';
import { ITodo } from '@localTypes/client';
import FocusTodoContent from '@components/FocusTodoContent';
import EditTodoForm from '@components/EditTodoForm';
import * as styles from './styles';

interface FocusTodoProps {
  todo: ITodo | null;
  setTodo: React.Dispatch<React.SetStateAction<ITodo | null>>;
  listId: string,
}

const FocusTodo = ({ todo, setTodo, listId }: FocusTodoProps) => {
  const [isEditing, setIsEditing] = useState(false);

  if (!todo) {
    return null;
  }

  const handleCloseClick = () => {
    setIsEditing(false);
    setTodo(null);
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
        <EditTodoForm
          todo={todo}
          setIsEditing={setIsEditing}
          listId={listId}
        />
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
