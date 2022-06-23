import { useState } from 'react';
import TodoItem from '@components/TodoItem';
import { useList } from '@hooks/swr';
import FocusTodo from '@components/FocusTodo';
import WithCollapse from '@components/WithCollapse';
import * as styles from './styles';

interface TodoListProps {
  listId: string;
}

const TodoList = ({ listId }: TodoListProps) => {
  const { list } = useList(listId);
  const [focusTodoId, setFocusTodoId] = useState<string>('');

  if (!list) {
    return null;
  }

  const doneTodos = list.todos.filter((todo) => todo.done);
  const pendingTodos = list.todos.filter((todo) => !todo.done);

  return (
    <>
      <FocusTodo todoId={focusTodoId} setTodoId={setFocusTodoId} listId={listId} />
      {pendingTodos.length > 0 && (
        <styles.List>
          {pendingTodos.map((todo) => (
            <li key={todo.id}>
              <TodoItem todo={todo} listId={listId} setFocusTodoId={setFocusTodoId} />
            </li>
          ))}
        </styles.List>
      )}
      {doneTodos.length > 0 && (
        <WithCollapse Title={<styles.Subheading>{`Completed (${doneTodos.length})`}</styles.Subheading>}>
          <styles.List>
            {doneTodos.map((todo) => (
              <li key={todo.id}>
                <TodoItem todo={todo} listId={listId} setFocusTodoId={setFocusTodoId} />
              </li>
            ))}
          </styles.List>
        </WithCollapse>
      )}
    </>
  );
};

export default TodoList;
