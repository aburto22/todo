import { ITodoList } from '@localTypes/.';
import { v4 as uuidv4 } from 'uuid';

export const createList = (name: string, ownerId: string): ITodoList => ({
  name,
  ownerId,
  id: uuidv4(),
  todos: [],
});
