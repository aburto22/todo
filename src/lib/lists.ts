import { ITodoListDb } from '@localTypes/server';
import List from '@models/list';
import dbConnect from '@lib/mongoose';

export const getUserLists = async (ownerId: string): Promise<ITodoListDb[]> => {
  await dbConnect();
  return List.find<ITodoListDb>({ ownerId }).exec();
};

export const getListById = async (listId: string): Promise<ITodoListDb | null> => {
  await dbConnect();
  return List.findById(listId).populate('todos').exec();
};

export const createList = async (name: string, ownerId: string): Promise<ITodoListDb> => {
  await dbConnect();

  const newList = new List({
    name,
    ownerId,
    isFreezed: false,
    todos: [],
  });

  return newList.save();
};
