import TodoItem from '@components/TodoItem';
import type { ITodoList } from '@localTypes/client';
import type { KeyedMutator } from 'swr';
import * as styles from './styles';

interface TodoListProps {
  mutate: KeyedMutator<ITodoList | null>;
  list: ITodoList;
}

const TodoList = ({ list, mutate }: TodoListProps) => {
  const doneTodos = list.todos.filter((todo) => todo.done);
  const pendingTodos = list.todos.filter((todo) => !todo.done);

  return (
    <>
      {list.todos.length > 0 && (
        <>
          <styles.Subheading>Pending</styles.Subheading>
          <styles.List>
            {pendingTodos.map((todo) => (
              <li key={todo._id}>
                <TodoItem todo={todo} mutate={mutate} list={list} />
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
                <TodoItem todo={todo} mutate={mutate} list={list} />
              </li>
            ))}
          </styles.List>
        </>
      )}
    </>
  );
};

export default TodoList;
