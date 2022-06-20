import { configureStore } from '@reduxjs/toolkit';
import currentList from '@slices/currentList';
import user from '@slices/user';

const store = configureStore({
  reducer: {
    user,
    currentList,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
