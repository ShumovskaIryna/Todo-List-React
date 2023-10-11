import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
  filterStatus: 'All',
  todoList: [{
    id: 1,
    name: 'Do test task',
    description: 'Do test task and make sure that you have done it perfect',
    status: "Active",
  },
  {
    id: 2,
    name: 'Cook dinner',
    description: 'Cook dinner and make sure that you have done it perfect',
    status: "Completed",
  },],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialValue,
    reducers: {
      addTodo: (state, action) => {
        state.todoList.unshift(action.payload);
      },
    updateTodo: (state, action) => {
    const todoList = initialValue.todoList;
      if (todoList) {
        todoList.forEach((todo) => {
          if (todo.id === action.payload.id) {
            todo.status = action.payload.status;
            todo.title = action.payload.title;
          }
        });
        state.todoList = [...todoList];
      }
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, updateFilterStatus } =
  todoSlice.actions;
export default todoSlice.reducer;