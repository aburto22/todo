import { ITodoList } from '@localTypes/.';
import { v4 as uuidv4 } from 'uuid';

export const createList = (name: string, owner: string): ITodoList => ({
  name,
  owner,
  id: uuidv4(),
  todos: [],
});
