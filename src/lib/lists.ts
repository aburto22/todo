import { ITodoList } from '@localTypes/.';
import List from '@models/list';
import dbConnect from '@lib/mongoose';
import { v4 as uuidv4 } from 'uuid';

export const getUserLists = async (ownerId: string): Promise<ITodoList[]> => {
  await dbConnect();
  return List.find({ ownerId }).exec();
};

export const getListById = async (listId: string): Promise<ITodoList> => {
  await dbConnect();
  return List.findById(listId).populate('todos').exec();
};

export const createList = async (name: string, ownerId: string): Promise<ITodoList> => {
  await dbConnect();

  const newList = new List({
    name,
    ownerId,
    isFreezed: false,
    todos: [],
    id: uuidv4(),
  });

  return newList.save();
};
