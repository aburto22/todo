import { configureStore } from '@reduxjs/toolkit';
import currentList from '@slices/currentList';

const store = configureStore({
  reducer: {
    currentList,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
