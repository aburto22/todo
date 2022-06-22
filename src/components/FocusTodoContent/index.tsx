import * as styles from './styles';

interface FocusTodoContentProps {
  title: string;
  description: string;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const FocusTodoContent = ({ title, description, setIsEditing }: FocusTodoContentProps) => (
  <styles.Todo>
    <styles.Title>{title}</styles.Title>
    <styles.Description>{description}</styles.Description>
    <styles.ButtonContainer>
      <styles.Button
        type="button"
        styleType="primary"
        onClick={() => setIsEditing(true)}
      >
        Edit
      </styles.Button>
    </styles.ButtonContainer>
  </styles.Todo>
);

export default FocusTodoContent;
