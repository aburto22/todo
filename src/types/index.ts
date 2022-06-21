import { Types } from 'mongoose';

export interface ITodo {
  title: string;
  description: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface ITodoList {
  ownerId: string;
  name: string;
  todos: Types.ObjectId[];
  id: string;
  _id: Types.ObjectId;
  isFreezed: boolean;
}

export interface IUser {
  name: string;
  lists: ITodoList[];
  id: string;
}

export interface IUserDb {
  name: string;
  email: string;
  id: string;
  createdAt: Date;
  _id: Types.ObjectId;
}
