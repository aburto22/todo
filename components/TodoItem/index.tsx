import { ITodo } from '@localTypes/.';
import { formatDate } from '@lib/dates';
import * as styles from './styles';

interface TodoItemProps {
  todo: ITodo
}

const TodoItem = ({ todo }: TodoItemProps) => (
  <styles.Todo>
    <styles.Title>{todo.title}</styles.Title>
    <styles.Description>{todo.description}</styles.Description>
    <styles.Footer>
      <styles.DateInfo>
        <p>Last updated:</p>
        <p>{formatDate(todo.updatedAt)}</p>
      </styles.DateInfo>
    </styles.Footer>
  </styles.Todo>
);

export default TodoItem;
