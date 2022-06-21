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
}

export interface IUser {
  name: string;
  lists: ITodoList[];
  id: string;
}
