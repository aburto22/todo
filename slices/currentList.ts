import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ITodo, ITodoList } from '@localTypes/.';
import { createTodo } from '@lib/todos';

const initialState: ITodoList = {
  owner: 'me',
  todos: [],
};

type IAddTodo = Omit<ITodo, 'createdAt' | 'updatedAt' | 'done' | 'id'>;

const currentListSlice = createSlice({
  name: 'currentList',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<IAddTodo>) => {
      const { title, description } = action.payload;
      const newTodo = createTodo(title, description);
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    },
  },
});

export default currentListSlice.reducer;
export const { addTodo } = currentListSlice.actions;
