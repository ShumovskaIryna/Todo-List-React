import { createSlice } from '@reduxjs/toolkit';

const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem('todoList');
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  window.localStorage.setItem('todoList', []);
  return [];
};

const initialValue = {
  filterStatus: 'All',
  todoList: getInitialTodo(),
  filtredTodoList: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.unshift(action.payload);
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.unshift({
          ...action.payload,
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem(
          'todoList',
          JSON.stringify([
            {
              ...action.payload,
            },
          ])
        );
      }
    },
    updateTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo) => {
          if (todo.id === action.payload.id) {
            todo.status = action.payload.status;
            todo.name = action.payload.name;
            todo.description = action.payload.description;
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = [...todoListArr];
        state.filtredTodoList = state.filterStatus === 'All'
        ? todoListArr
        : state.todoList.filter((item) => {
            console.log(item);
            return item.status === state.filterStatus;
            } 
        );
        console.log(state.filterStatus);
      }
    },
    deleteTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo, index) => {
          if (todo.id === action.payload.id) {
            todoListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },
    filterTodoList: (state, action) => {
      state.filterStatus = action.payload;
      const filteredTodoList = state.todoList.filter((item) =>
        item.status === action.payload
      );
      state.filtredTodoList = action.payload === 'All' ? state.todoList : filteredTodoList;
    }
  },
});

export const { addTodo, updateTodo, deleteTodo, updateFilterStatus, filterTodoList } =
  todoSlice.actions;
export default todoSlice.reducer;