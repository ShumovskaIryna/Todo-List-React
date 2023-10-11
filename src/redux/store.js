import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../redux/slices/todoListSlice';
import filterReducer from '../redux/slices/filterSlice';

import { combineReducers } from "redux";

const reducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
});
export const store = configureStore({reducer});
export default store;
