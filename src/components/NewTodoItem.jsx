import React, { useState } from 'react';
import ModalItemForm from './ModalItemForm';
import { FaPlus } from 'react-icons/fa';

const NewTodoItem = () => {
  const [shouldShowForm, toggleForm] = useState(false);
  return (
    <div>
      <div className="text-center pt-1 pb-3">
        <button
          type="button"
          className="btn btn-success btn-rounded"
          data-mdb-ripple-color="dark"
          onClick={() => {
            toggleForm((current) => !current);
          }}
        >
          Add New Todo Item{' '}
          <FaPlus role="plus_button" className="fas fa-solid fa-plus" />
        </button>
      </div>
      {shouldShowForm ? (
        <ModalItemForm
          toggleForm={toggleForm}
          shouldShowForm={shouldShowForm}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default NewTodoItem;
