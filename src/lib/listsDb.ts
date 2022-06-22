import { ITodoListDb } from '@localTypes/server';
import List from '@models/list';
import dbConnect from '@lib/mongoose';
import { ITodoList } from '@localTypes/client';

export const getUserLists = async (ownerId: string): Promise<ITodoListDb[]> => {
  await dbConnect();
  return List.find<ITodoListDb>({ ownerId }).exec();
};

export const getListById = async (listId: string): Promise<ITodoListDb | null> => {
  await dbConnect();
  return List.findOne({ id: listId }).populate('todos').exec();
};

export const saveNewList = async (list: ITodoList): Promise<ITodoListDb> => {
  await dbConnect();

  const newList = new List(list);

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
