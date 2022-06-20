import { useAppSelector } from '@hooks/redux';
import TodoItem from '@components/TodoItem';
import * as styles from './styles';

const TodoList = () => {
  const todos = useAppSelector((state) => state.currentList.todos);

  const doneTodos = todos.filter((todo) => todo.done);
  const pendingTodos = todos.filter((todo) => !todo.done);

  return (
    <styles.List>
      {pendingTodos.length > 0 && (
        <>
          <styles.SubheadingItem>
            <styles.Subheading>Pending</styles.Subheading>
          </styles.SubheadingItem>
          {pendingTodos.map((todo) => (
            <li key={todo.id}>
              <TodoItem todo={todo} />
            </li>
          ))}
        </>
      )}
      {doneTodos.length > 0 && (
        <>
          <styles.SubheadingItem>
            <styles.Subheading>Completed</styles.Subheading>
          </styles.SubheadingItem>
          {doneTodos.map((todo) => (
            <li key={todo.id}>
              <TodoItem todo={todo} />
            </li>
          ))}
        </>
      )}
    </styles.List>
  );
};

export default TodoList;
