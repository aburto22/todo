export interface ITodo {
  title: string;
  description: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
  cost: number;
}

export interface ITodoList {
  ownerId: string;
  name: string;
  todos: ITodo[];
  id: string;
  isFreezed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IUser {
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}
