import React, { useState, useEffect } from 'react';
import { FaTrash, FaPen } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/slices/todoListSlice';
import ModalEditForm from './ModalEditForm';

const TodoItem = (props) => {
  const [shouldShowForm, toggleForm] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.todoItem.status === 'Completed') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [props.todoItem.status]);

  const handleCheck = () => {
    dispatch(
      updateTodo({
        ...props.todoItem,
        status: isChecked ? 'Active' : 'Completed',
      }),
    );
    setChecked((isChecked) => !isChecked);
  };

  const handleRemove = (todoItem) => {
    dispatch(deleteTodo(todoItem));
  };
  return (
    <>
      <tr className="fw-normal">
        <th className="align-middle">
          <div className="checkbox">
            <input
              type="checkbox"
              id={props.todoItem.id}
              checked={isChecked}
              onClick={() => handleCheck()}
            />
            <label for={props.todoItem.id}>
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
