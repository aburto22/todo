import { v4 as uuidv4 } from 'uuid';
import type { ITodoList, ITodo } from '@localTypes/client';

export const createTodo = (title: string, description: string): ITodo => ({
  id: uuidv4(),
  title,
  description,
  createdAt: Date(),
  updatedAt: Date(),
  done: false,
});

// export const toggleTodo = (list: ITodoList, todoId: string): ITodoList => ({
//   ...list,
//   todos: list.todos.map((todo) => {
//     if (todo.id === todoId) {
//       return {
//         ...todo,
//         done: !todo.done,
//       };
//     }
//     return todo;
//   }),
// });

export const addTodoToList = (list: ITodoList, newTodo: ITodo): ITodoList => ({
  ...list,
  todos: [...list.todos, newTodo],
});

export const updateTodoInList = (list: ITodoList, updatedTodo: ITodo): ITodoList => ({
  ...list,
  todos: list.todos.map((todo) => {
    if (todo.id === updatedTodo.id) {
      return updatedTodo;
    }
    return todo;
  }),
});

export const removeTodoFromList = (list: ITodoList, todoId: string): ITodoList => ({
  ...list,
  todos: list.todos.filter((todo) => todo.id !== todoId),
});
