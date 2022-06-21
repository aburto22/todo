import { Types, Document } from 'mongoose';

export interface ITodoDb extends Document {
  title: string;
  description: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ITodoListDb extends Document {
  ownerId: string;
  name: string;
  todos: Types.ObjectId[];
  isFreezed: boolean;
}

export interface ITodoListPopulatedDb extends Document {
  ownerId: string;
  name: string;
  todos: ITodoDb[];
  isFreezed: boolean;
}

export interface IUserDb extends Document {
  name: string;
  email: string;
  createdAt: Date;
}
