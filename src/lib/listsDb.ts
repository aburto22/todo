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

export const updateListSummary = async (updatedList: ITodoList): Promise<ITodoListDb> => {
  await dbConnect();

  const options = {
    returnDocument: 'after',
  };

  const list = await List.findOne<ITodoListDb>({ id: updatedList.id }).exec();

  if (!list) {
    throw new Error('List not found');
  }

  const newList = {
    ...updatedList,
    todos: list.todos,
  };

  const savedList = await List
    .findOneAndReplace<ITodoListDb>({ id: updatedList.id }, newList, options).exec();

  if (!savedList) {
    throw new Error('List not found');
  }

  return savedList;
};

export const deleteList = async (listId: string): Promise<ITodoListDb> => {
  await dbConnect();

  const deletedList = await List.findOneAndDelete({ id: listId }).exec();

  if (!deletedList) {
    throw new Error('List not found');
  }

  return deletedList;
};
