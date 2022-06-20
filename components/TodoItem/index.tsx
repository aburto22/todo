import { ITodo } from '@localTypes/.';

interface TodoItemProps {
  todo: ITodo
}

const TodoItem = ({ todo }: TodoItemProps) => (
  <article>
    <h4>{todo.title}</h4>
    <p>{todo.description}</p>
  </article>
);

export default TodoItem;
