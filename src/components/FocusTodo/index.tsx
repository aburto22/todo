import { useState, useEffect } from 'react';
import FocusTodoContent from '@components/FocusTodoContent';
import EditTodoForm from '@components/EditTodoForm';
import { useList } from '@hooks/swr';
import * as styles from './styles';

interface FocusTodoProps {
  todoId: string;
  setTodoId: React.Dispatch<React.SetStateAction<string>>;
  listId: string,
}

const FocusTodo = ({ todoId, setTodoId, listId }: FocusTodoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const { list } = useList(listId);
  const todo = list?.todos.find((t) => t.id === todoId);

  useEffect(() => {
    const closeFocus = (e: KeyboardEvent) => {
      if (!todoId) {
        return;
      }

      if (e.key === 'Escape') {
        setTodoId('');
        setIsEditing(false);
      }
    };

    window.addEventListener('keydown', closeFocus);

    return () => {
      window.removeEventListener('keydown', closeFocus);
    };
  }, [todoId, setTodoId]);

  if (!list || !todo) {
    return null;
  }

  const handleCloseClick = () => {
    setIsEditing(false);
    setTodoId('');
  };

  return (
    <styles.Container>
      <styles.CloseButton type="button" onClick={handleCloseClick} size="large">
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
