import { Document } from 'mongoose';
import { ITodo } from '@localTypes/client';

export interface ITodoListDb extends Document {
  id: string;
  ownerId: string;
  name: string;
  todos: ITodo[];
  isFreezed: boolean;
}

export interface IUserDb extends Document {
  name: string;
  email: string;
  createdAt: Date;
}
