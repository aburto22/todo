import { v4 as uuidv4 } from 'uuid';
import { ITodoList } from '@localTypes/client';

export const createList = (name: string, ownerId: string): ITodoList => ({
  id: uuidv4(),
  name,
  ownerId,
  isFreezed: false,
  createdAt: Date(),
  updatedAt: Date(),
  todos: [],
});

export const toggleList = (list: ITodoList): ITodoList => ({
  ...list,
  isFreezed: !list.isFreezed,
});

export const updateListInArray = (lists: ITodoList[], list: ITodoList): ITodoList[] => lists
  .map((l) => {
    if (l.id === list.id) {
      return list;
    }
    return l;
  });

export const removeListFromArray = (lists: ITodoList[], listId: string): ITodoList[] => lists
  .filter((list) => list.id !== listId);
