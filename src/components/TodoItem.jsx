import React, { useState } from 'react';
import FullItem from './FullItem';
import { FaTrash, FaPen } from 'react-icons/fa';

const TodoItem = (props) => {
  const [shouldShowItemDetails, toggleItemDetails] = useState(false);
  return (
    <>
      <tr className="fw-normal">
        <th className="align-middle">
          <div className="checkbox">
            <input
              input
              type="checkbox"
              id="checkbox1"
              checked={props.todoItem.isDone}
            />
            <label for="checkbox1">
              <span className="ms-2">{props.todoItem.name}</span>
            </label>
          </div>
        </th>
        <td className="align-middle">
          <span>{props.todoItem.description}</span>
        </td>
        <td className="align-middle">
          <h6 className="mb-0">
            <span className={`badge bg-${props.todoItem.bg}`}>
              {props.todoItem.priority} priority
            </span>
          </h6>
        </td>

        <td className="align-middle">
          <a href="#!" data-mdb-toggle="tooltip" title="Edit">
            <FaPen
              role="edit_button"
              className="edit"
              icon="fa-solid fa-pen"
              style={{ color: '#38b3ff' }}
              onClick={() => {
                toggleItemDetails((current) => !current);
              }}
            />
          </a>
        </td>
        <td className="align-middle">
          <a href="#!" data-mdb-toggle="tooltip" title="Remove">
            <FaTrash
              role="delete_button"
              className="fas fa-trash-alt fa-lg text-warning"
            />
          </a>
        </td>
      </tr>

      {shouldShowItemDetails ? (
        <FullItem
          shouldShowProductDetails={shouldShowItemDetails}
          toggleItemDetails={toggleItemDetails}
          fullItem={props.todoItem}
        />
      ) : (
        <></>
      )}
    </>
  );
};
export default TodoItem;
