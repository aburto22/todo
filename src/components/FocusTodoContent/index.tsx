import { useUser } from '@auth0/nextjs-auth0';
import { useList } from '@hooks/swr';
import { userNotAllowedToEdit } from '@lib/misc';
import * as styles from './styles';

interface FocusTodoContentProps {
  title: string;
  description: string;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  listId: string;
}

const FocusTodoContent = ({
  title, description, setIsEditing, listId,
}: FocusTodoContentProps) => {
  const { user } = useUser();
  const { list } = useList(listId);

  const buttonDisabled = userNotAllowedToEdit(list, user);

  return (
    <styles.Todo>
      <styles.Title>{title}</styles.Title>
      <styles.Description>{description}</styles.Description>
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
