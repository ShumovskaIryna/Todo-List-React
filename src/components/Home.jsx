import React, { useState } from 'react';
import Filters from './Filters';
import NewItem from './NewItem';
import TodoItem from './TodoItem';
import { FaPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Home = () => {
  const [shouldShowForm, toggleForm] = useState(false);
  const state = useSelector((state) => state.handleTodo);
  return (
    <div>
      <section className="mvh-100 gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-10">
              <div className="card mask-custom">
                <div className="card-body p-4 text-white">
                  <div className="text-center pt-3 pb-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                      alt="Check"
                      width="60"
                    />
                    <h2 className="my-4">Task List</h2>
                  </div>
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
                      <FaPlus
                        role="plus_button"
                        className="fas fa-solid fa-plus"
                      />
                    </button>
                  </div>
                  {shouldShowForm ? (
                    <NewItem
                      toggleForm={toggleForm}
                      shouldShowForm={shouldShowForm}
                    />
                  ) : (
                    <></>
                  )}
                  <Filters />
                  {/* TODO: move to another component */}
                  <table className="table text-white mb-0">
                    <thead>
                      <tr>
                        <th scope="col">Task</th>
                        <th scope="col">Description</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {state.map((el) => (
                        <TodoItem key={el.id} todoItem={el} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
