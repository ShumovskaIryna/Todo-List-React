import { Types } from '../../constants/actionTypes';

const initialState = [];

const handleTodo = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_ITEM:
      return [
        ...state,
        action.payload
      ];
    case Types.UPDATE_ITEM:
      return {
        ...state,
      };
    case Types.DELETE_ITEM:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default handleTodo;