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
  todos: ITodo[];
  id: string;
  isFreezed: boolean;
}

export interface IUser {
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}
