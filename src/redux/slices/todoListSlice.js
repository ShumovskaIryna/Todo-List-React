import { createSlice } from '@reduxjs/toolkit';
import { Filters } from '../../constants/constants';

const initialValue = {
  filterStatus: Filters.ALL,
  todoList: [],
  filtredTodoList: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.unshift(action.payload);
      const todoList = state.todoList;
      state.filtredTodoList = state.filterStatus === Filters.ALL
      ? todoList
      : state.todoList.filter((item) => {
          return item.status === state.filterStatus;
          } 
      );
    },
    updateTodo: (state, action) => {
      const todoList = state.todoList;
        todoList.forEach((todo) => {
          if (todo.id === action.payload.id) {
            todo.status = action.payload.status;
            todo.name = action.payload.name;
            todo.description = action.payload.description;
          }
        });
        state.todoList = [...todoList];
        state.filtredTodoList = state.filterStatus === Filters.ALL
        ? todoList
        : state.todoList.filter((item) => {
            return item.status === state.filterStatus;
            } 
        );
    },
    deleteTodo: (state, action) => {
      const todoList = state.todoList;
      if (todoList) {
        todoList.forEach((todo, index) => {
          if (todo.id === action.payload.id) {
            todoList.splice(index, 1);
          }
        });
        state.todoList = todoList;
        state.filtredTodoList = state.filterStatus === Filters.ALL
        ? todoList
        : state.todoList.filter((item) => {
            return item.status === state.filterStatus;
            } 
        );
      }
    },
    filterTodoList: (state, action) => {
      state.filterStatus = action.payload;
      const filteredTodoList = state.todoList.filter((item) =>
        item.status === action.payload
      );
      state.filtredTodoList = action.payload === Filters.ALL ? state.todoList : filteredTodoList;
    }
  },
});

export const { addTodo, updateTodo, deleteTodo, updateFilterStatus, filterTodoList } =
  todoSlice.actions;
export default todoSlice.reducer;