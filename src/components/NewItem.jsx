import React from 'react';

const NewItem = (props) => {
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
          <form class="d-flex justify-content-center align-items-center mb-4">
            <div class="form-outline flex-fill">
              <input type="text" id="form2" class="form-control" />
              <label class="form-label" for="form2">
                New task
              </label>
              <input type="text" id="form2" class="form-control" />
              <label class="form-label" for="form2">
                Description
              </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  {' '}
                  High priority{' '}
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  {' '}
                  Medium priority{' '}
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  {' '}
                  Low priority{' '}
                </label>
              </div>
              <button type="submit" class="btn btn-info ms-2">
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
