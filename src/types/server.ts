import { Types } from 'mongoose';

export interface ITodoDb {
  title: string;
  description: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
  _id: Types.ObjectId;
}

export interface ITodoListDb {
  ownerId: string;
  name: string;
  todos: ITodoDb[];
  _id: Types.ObjectId;
  isFreezed: boolean;
}

export interface IUserDb {
  name: string;
  email: string;
  createdAt: Date;
  _id: Types.ObjectId;
}
