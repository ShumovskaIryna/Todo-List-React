import { Types } from '../../constants/actionTypes';

export const ActionCreators = {

  addTodoItem: (todoItem) => ({ type: Types.ADD_ITEM, payload:  todoItem  }),
  updateTodoItem: (todoItem) => ({ type: Types.UPDATE_ITEM, payload: todoItem }),
  deleteTodoItem: (todoItem) => ({ type: Types.DELETE_ITEM, payload: todoItem }),
};