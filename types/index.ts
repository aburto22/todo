export interface ITodo {
  title: string;
  description: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

export interface ITodoList {
  owner: string;
  todos: ITodo[];
}
