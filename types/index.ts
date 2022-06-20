export interface ITodo {
  title: string;
  description: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface ITodoList {
  owner: string;
  name: string;
  todos: ITodo[];
}
