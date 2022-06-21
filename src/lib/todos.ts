import Todo from '@models/todo';
import List from '@models/list';
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

  const list = await List.findById(listId).exec();

  list.todos = [...list.todos, newTodo._id];

  return list.save();
};
