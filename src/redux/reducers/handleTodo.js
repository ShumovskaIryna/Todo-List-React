import { Types } from '../../constants/actionTypes';


const data = [
    {
      id: 1,
      name: 'Do test task',
      description: 'Do test task and make sure that you have done it perfect',
      isDone: true,
    },
    {
      id: 2,
      name: 'Cook dinner',
      description: 'Cook dinner and make sure that you have done it perfect',
      isDone: false,
    },
  ];

const handleTodo = (state = data, action) => {
  switch (action.type) {
    case Types.ADD_ITEM:
      return [
        action.payload,
        ...state
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