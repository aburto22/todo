import { useState } from 'react';
import TodoItem from '@components/TodoItem';
import { useList } from '@hooks/swr';
import FocusTodo from '@components/FocusTodo';
import WithCollapse from '@components/WithCollapse';
import { sortList } from '@lib/misc';
import type { ITodo } from '@localTypes/client';
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
          {sortList<ITodo>(pendingTodos).map((todo) => (
            <styles.ListItem key={todo.id}>
              <TodoItem todo={todo} listId={listId} setFocusTodoId={setFocusTodoId} />
            </styles.ListItem>
          ))}
        </styles.List>
      )}
      {doneTodos.length > 0 && (
        <WithCollapse Title={<styles.Subheading>{`Completed (${doneTodos.length})`}</styles.Subheading>}>
          <styles.List>
            {sortList<ITodo>(doneTodos).map((todo) => (
              <styles.ListItem key={todo.id}>
                <TodoItem todo={todo} listId={listId} setFocusTodoId={setFocusTodoId} />
              </styles.ListItem>
            ))}
          </styles.List>
        </WithCollapse>
      )}
    </>
  );
};

export default TodoList;
