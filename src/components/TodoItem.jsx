import React, { useState } from 'react';
import { FaTrash, FaPen } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/slices/todoListSlice';
import ModalEditForm from './ModalEditForm';

const TodoItem = (props) => {
  const [shouldShowForm, toggleForm] = useState(false);
  const dispatch = useDispatch();

  const handleRemove = (todoItem) => {
    dispatch(deleteTodo(todoItem));
  };
  return (
    <>
      <tr className="fw-normal">
        <th className="align-middle">
          <div className="checkbox">
            <input input type="checkbox" id="checkbox1" />
            <label for="checkbox1">
              <span className="ms-2">{props.todoItem.name}</span>
            </label>
          </div>
        </th>
        <td className="align-middle">
          <span>{props.todoItem.description}</span>
        </td>
        <td className="align-middle">
          <FaPen
            role="edit_button"
            className="edit"
            icon="fa-solid fa-pen"
            style={{ color: '#38b3ff' }}
            onClick={() => {
              toggleForm((current) => !current);
            }}
          />
        </td>
        <td className="align-middle">
          <FaTrash
            role="delete_button"
            className="fas fa-trash-alt fa-lg text-warning"
            onClick={() => handleRemove(props.todoItem)}
          />
        </td>
      </tr>
      {shouldShowForm ? (
        <ModalEditForm
          toggleForm={toggleForm}
          shouldShowForm={shouldShowForm}
          item={props.todoItem}
        />
      ) : (
        <></>
      )}
    </>
  );
};
export default TodoItem;
