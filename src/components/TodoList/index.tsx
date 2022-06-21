import { useAppSelector } from '@hooks/redux';
import TodoItem from '@components/TodoItem';
import * as styles from './styles';

const TodoList = () => {
  const todos = useAppSelector((state) => state.currentList.todos);

  const doneTodos = todos.filter((todo) => todo.done);
  const pendingTodos = todos.filter((todo) => !todo.done);

  return (
    <>
      {pendingTodos.length > 0 && (
        <>
          <styles.Subheading>Pending</styles.Subheading>
          <styles.List>
            {pendingTodos.map((todo) => (
              <li key={todo.id}>
                <TodoItem todo={todo} />
              </li>
            ))}
          </styles.List>
        </>
      )}
      {doneTodos.length > 0 && (
        <>
          <styles.Subheading>Completed</styles.Subheading>
          <styles.List>
            {doneTodos.map((todo) => (
              <li key={todo.id}>
                <TodoItem todo={todo} />
              </li>
            ))}
          </styles.List>
        </>
      )}
    </>
  );
};

export default TodoList;
