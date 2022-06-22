import TodoItem from '@components/TodoItem';
import { useList } from '@hooks/swr';
import Spinner from '@components/Spinner';
import * as styles from './styles';

interface TodoListProps {
  listId: string;
}

const TodoList = ({ listId }: TodoListProps) => {
  const { list, error } = useList(listId);

  if (error) {
    console.error(error);
  }

  if (!list) {
    return <Spinner size="normal" />;
  }

  const doneTodos = list.todos.filter((todo) => todo.done);
  const pendingTodos = list.todos.filter((todo) => !todo.done);

  return (
    <>
      {list.todos.length > 0 && (
        <>
          <styles.Subheading>Pending</styles.Subheading>
          <styles.List>
            {pendingTodos.map((todo) => (
              <li key={todo.id}>
                <TodoItem todo={todo} listId={listId} />
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
                <TodoItem todo={todo} listId={listId} />
              </li>
            ))}
          </styles.List>
        </>
      )}
    </>
  );
};

export default TodoList;
