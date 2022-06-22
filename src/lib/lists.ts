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
