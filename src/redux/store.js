import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../redux/slices/todoListSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
export default store;
