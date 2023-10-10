import React, { useState } from 'react';
import FullItem from './FullItem';
import { FaTrash, FaPen } from 'react-icons/fa';

const TodoItem = (props) => {
  const [shouldShowItemDetails, toggleItemDetails] = useState(false);
  return (
    <>
      <tr class="fw-normal">
        <th class="align-middle">
          <div class="checkbox">
            <input
              input
              type="checkbox"
              id="checkbox1"
              checked={props.todoItem.done}
            />
            <label for="checkbox1">
              <span class="ms-2">Task #{props.todoItem.id}</span>
            </label>
          </div>
        </th>
        <td class="align-middle">
          <span>{props.todoItem.name}</span>
        </td>
        <td class="align-middle">
          <h6 class="mb-0">
            <span class={`badge bg-${props.todoItem.bg}`}>
              {props.todoItem.priority} priority
            </span>
          </h6>
        </td>

        <td class="align-middle">
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
        <td class="align-middle">
          <a href="#!" data-mdb-toggle="tooltip" title="Remove">
            <FaTrash
              role="delete_button"
              className="delete"
              class="fas fa-trash-alt fa-lg text-warning"
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
