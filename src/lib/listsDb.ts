import { ITodoListDb } from '@localTypes/server';
import List from '@models/list';
import dbConnect from '@lib/mongoose';
import { v4 as uuidv4 } from 'uuid';
import { ITodoList } from '@localTypes/client';

export const getUserLists = async (ownerId: string): Promise<ITodoListDb[]> => {
  await dbConnect();
  return List.find<ITodoListDb>({ ownerId }).exec();
};

export const getListById = async (listId: string): Promise<ITodoListDb | null> => {
  await dbConnect();
  return List.findOne({ id: listId }).populate('todos').exec();
};

export const createList = async (name: string, ownerId: string): Promise<ITodoListDb> => {
  await dbConnect();

  const newList = new List({
    id: uuidv4(),
    name,
    ownerId,
    isFreezed: false,
    createdAt: Date(),
    updatedAt: Date(),
    todos: [],
  });

  return newList.save();
};

export const updateList = async (updatedList: ITodoList): Promise<ITodoListDb> => {
  await dbConnect();

  const options = {
    returnDocument: 'after',
  };

  const savedList = await List
    .findOneAndReplace<ITodoListDb>({ id: updatedList.id }, updatedList, options).exec();

  if (!savedList) {
    throw new Error('List not found');
  }

  return savedList;
};
