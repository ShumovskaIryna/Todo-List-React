import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterStatus } from '../redux/slices/todoListSlice';

const Filter = (props) => {
  const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  const [, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useDispatch();

  const handleClick = (filter) => {
    setFilterStatus(filter);
    dispatch(updateFilterStatus(filter));
  };

  return (
    <>
      <li className="nav-item" role="presentation">
        <div
          className={
            'nav-link ' +
            (props.filterItem.name === initialFilterStatus ? 'active' : '')
          }
          id="ex2-tab-1"
          data-bs-toggle="tab"
          role="tab"
          aria-controls="ex2-tabs-1"
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
