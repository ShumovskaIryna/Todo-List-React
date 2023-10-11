import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todoListSlice';

const ModalItemForm = (props) => {
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    status: 'Active',
    submitted: false,
  });

  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addTodo(inputs));
    props.toggleForm((current) => !current);
  }

  return (
    <>
      <div className="black">
        {' '}
        <div className="white row">
          {' '}
          <div className="row justify-content-end">
            <button
              type="button"
              class="close col-2"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                props.toggleForm((current) => !current);
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form
            className="d-flex justify-content-center align-items-center mb-4"
            onSubmit={handleSubmit}
          >
            <div className="form-outline flex-fill">
              <label className="form-label" for="form2">
                New task
              </label>
              <input
                type="text"
                id="form2"
                className="form-control"
                name="name"
                value={inputs.name}
                onChange={(e) => handleChange(e)}
                required
              />
              <label className="form-label" for="form2">
                Description
              </label>
              <input
                type="text"
                id="form2"
                className="form-control"
                name="description"
                value={inputs.description}
                onChange={(e) => handleChange(e)}
                required
              />

              <div class="row">
                <div class="col-auto mr-auto">
                  {' '}
                  <label htmlFor="type">
                    Status
                    <select
                      id="type"
                      className="form-control"
                      name="status"
                      value={inputs.status}
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="Active">Active</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </label>
                </div>
                <div class="col-auto">
                  <button type="submit" className="btn btn-info mt-4">
                    Add New Item
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ModalItemForm;
