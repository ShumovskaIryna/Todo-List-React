import React, { useState } from 'react';
import { ActionCreators } from '../redux/actions/index';
import { useDispatch } from 'react-redux';

const NewItem = (props) => {
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    priority: '',
    bg: '',
    isDone: false,
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
    dispatch(ActionCreators.addTodoItem(inputs));
    props.toggleForm((current) => !current);
  }

  return (
    <>
      <div className="black">
        {' '}
        <div className="white">
          {' '}
          <button
            className="close"
            onClick={() => {
              props.toggleForm((current) => !current);
            }}
          >
            Close
          </button>
          <form
            className="d-flex justify-content-center align-items-center mb-4"
            onSubmit={handleSubmit}
          >
            <div className="form-outline flex-fill">
              <input
                type="text"
                id="form2"
                className="form-control"
                name="name"
                value={inputs.name}
                onChange={(e) => handleChange(e)}
              />
              <label className="form-label" for="form2">
                New task
              </label>
              <input
                type="text"
                id="form2"
                className="form-control"
                name="description"
                value={inputs.description}
                onChange={(e) => handleChange(e)}
              />
              <label className="form-label" for="form2">
                Description
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="high"
                  id="flexRadioDefault1"
                  value={inputs.priority}
                  onChange={(e) => handleChange(e)}
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  {' '}
                  High priority{' '}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="medium"
                  id="flexRadioDefault2"
                  value={inputs.priority}
                />
                <label className="form-check-label" for="flexRadioDefault2">
                  {' '}
                  Medium priority{' '}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="low"
                  id="flexRadioDefault2"
                  value={inputs.priority}
                />
                <label className="form-check-label" for="flexRadioDefault2">
                  {' '}
                  Low priority{' '}
                </label>
              </div>
              <button type="submit" className="btn btn-info ms-2">
                Add New Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default NewItem;
