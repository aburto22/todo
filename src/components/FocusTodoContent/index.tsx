import { useUser } from '@auth0/nextjs-auth0';
import { useList } from '@hooks/swr';
import { userNotAllowedToEdit, formatCost } from '@lib/misc';
import { ITodo } from '@localTypes/client';
import * as styles from './styles';

interface FocusTodoContentProps {
  todo: ITodo;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  listId: string;
}

const FocusTodoContent = ({ todo, setIsEditing, listId }: FocusTodoContentProps) => {
  const { user } = useUser();
  const { list } = useList(listId);

  const buttonDisabled = userNotAllowedToEdit(list, user);

  return (
    <styles.Todo>
      <styles.Title>{todo.title}</styles.Title>
      <styles.Cost>{formatCost(todo.cost)}</styles.Cost>
      <styles.Description>{todo.description}</styles.Description>
      <styles.ButtonContainer>
        <styles.Button
          type="button"
          styleType="primary"
          onClick={() => setIsEditing(true)}
          disabled={buttonDisabled}
        >
          Edit
        </styles.Button>
      </styles.ButtonContainer>
    </styles.Todo>
  );
};

export default FocusTodoContent;
