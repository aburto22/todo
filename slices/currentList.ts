import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ITodo } from '@localTypes/.';

const initialState: ITodo[] = [];

const currentListSlice = createSlice({
  name: 'currentList',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => [...state, action.payload],
  },
});

export default currentListSlice.reducer;
export const { addTodo } = currentListSlice.actions;
