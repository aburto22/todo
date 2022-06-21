import TodoItem from '@components/TodoItem';
import { useRouter } from 'next/router';
import { useList } from '@hooks/swr';
import * as styles from './styles';

const TodoList = () => {
  const router = useRouter();
  const { id } = router.query;
  const listId = id?.toString() || '';
  const { list } = useList(listId);

  if (!list) {
    return null;
  }

  const doneTodos = list.todos.filter((todo) => todo.done);
  const pendingTodos = list.todos.filter((todo) => !todo.done);

  return (
    <>
      {pendingTodos.length > 0 && (
        <>
          <styles.Subheading>Pending</styles.Subheading>
          <styles.List>
            {pendingTodos.map((todo) => (
              <li key={todo._id}>
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
              <li key={todo._id}>
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
