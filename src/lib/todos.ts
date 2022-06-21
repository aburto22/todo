import Todo from '@models/todo';
import List from '@models/list';
import { ITodoListDb } from '@localTypes/server';
import dbConnect from './mongoose';

export const createTodo = async (title: string, description: string, listId: string) => {
  await dbConnect();

  const newTodo = new Todo({
    title,
    description,
    createdAt: new Date(),
    updatedAt: new Date(),
    done: false,
  });

  await newTodo.save();

  const list = await List.findById<ITodoListDb>(listId).exec();

  if (!list) {
    throw new Error('list not found');
  }

  list.todos = [...list.todos, newTodo._id];

  return list.save();
};

export const deleteTodo = async (todoId: string, listId: string) => {
  await dbConnect();

  const list = await List.findById<ITodoListDb>(listId).exec();

  if (!list) {
    throw new Error('list not found');
  }

  list.todos = list.todos.filter((todo) => todo.valueOf() === todoId);

  return list.save();
};
