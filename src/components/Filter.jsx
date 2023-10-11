import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodoList } from '../redux/slices/todoListSlice';

const Filter = (props) => {
  const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  const dispatch = useDispatch();

  const handleClick = (filter) => {
    dispatch(filterTodoList(filter));
  };

  return (
    <>
      <li className="nav-item" role="presentation">
        <div
          className={
            'nav-link ' +
            (props.filterItem.name === initialFilterStatus ? 'active' : '')
          }
          data-bs-toggle="tab"
          role="tab"
          aria-selected="true"
          style={{ color: '#6da2fd' }}
          onClick={() => {
            handleClick(props.filterItem.name);
          }}
        >
          {props.filterItem.name}
        </div>
      </li>
    </>
  );
};

export default Filter;
