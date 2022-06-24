import { v4 as uuidv4 } from 'uuid';
import type { ITodoList, ITodo } from '@localTypes/client';

export const createTodo = (title: string, description: string, cost: number): ITodo => ({
  id: uuidv4(),
  title,
  description,
  createdAt: Date(),
  updatedAt: Date(),
  done: false,
  cost,
});

export const toggleTodo = (todo: ITodo): ITodo => ({
  ...todo,
  updatedAt: Date(),
  done: !todo.done,
});

export const updateTodo = (todo: ITodo, updatedData: Partial<ITodo>): ITodo => ({
  ...todo,
  ...updatedData,
  updatedAt: Date(),
});

export const addTodoToList = (list: ITodoList, newTodo: ITodo): ITodoList => ({
  ...list,
  updatedAt: Date(),
  todos: [...list.todos, newTodo],
});

export const updateTodoInList = (list: ITodoList, updatedTodo: ITodo): ITodoList => ({
  ...list,
  updatedAt: Date(),
  todos: list.todos.map((todo) => {
    if (todo.id === updatedTodo.id) {
      return updatedTodo;
    }
    return todo;
  }),
});

export const removeTodoFromList = (list: ITodoList, todoId: string): ITodoList => ({
  ...list,
  updatedAt: Date(),
  todos: list.todos.filter((todo) => todo.id !== todoId),
});
