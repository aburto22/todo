import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IUser, ITodoList } from '@localTypes/.';
import { createList } from '@lib/lists';

const initialState: IUser = {
  name: 'me',
  id: 'random id',
  lists: [],
};

type IAddList = Omit<ITodoList, 'id' | 'todos' | 'ownerId'>;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<IAddList>) => {
      const { name } = action.payload;
      const newList = {};
      return {
        ...state,
        lists: [...state.lists, newList],
      };
    },
    removeList: (state, action: PayloadAction<string>) => {
      const updatedLists = state.lists.filter((list) => list.id !== action.payload);

      return {
        ...state,
        lists: updatedLists,
      };
    },
  },
});

export default userSlice.reducer;
export const { addList, removeList } = userSlice.actions;
