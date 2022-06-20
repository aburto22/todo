import { v4 as uuidv4 } from 'uuid';
import type { ITodo } from '@localTypes/.';

export const createTodo = (title: string, description: string): ITodo => ({
  title,
  description,
  createdAt: new Date(),
  updatedAt: new Date(),
  done: false,
  id: uuidv4(),
});
