import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ITodo, ITodoList } from '@localTypes/.';

const initialState: ITodoList = {
  ownerId: 'random id',
  name: 'any name',
  todos: [],
  id: '',
};

type IAddTodo = Omit<ITodo, 'createdAt' | 'updatedAt' | 'done' | 'id'>;

const currentListSlice = createSlice({
  name: 'currentList',
  initialState,
  reducers: {
    setCurrentList: (state, action: PayloadAction<ITodoList>) => action.payload,
    addTodo: (state, action: PayloadAction<IAddTodo>) => {
      const { title, description } = action.payload;
      const newTodo = {};
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });

      return {
        ...state,
        todos: updatedTodos,
      };
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const updatedTodos = state.todos.filter((todo) => todo.id !== action.payload);

      return {
        ...state,
        todos: updatedTodos,
      };
    },
  },
});

export default currentListSlice.reducer;
export const {
  setCurrentList, addTodo, toggleTodo, removeTodo,
} = currentListSlice.actions;
