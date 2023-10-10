import React, { useState } from 'react';
import Filters from './Filters';
import NewItem from './NewItem';
import TodoItem from './TodoItem';
import { FaPlus } from 'react-icons/fa';

const data = {
  todoItem: [
    {
      id: 1,
      name: 'Wash dishes',
      description: 'Wash dishes and make sure that you do it perfect',
      priority: 'medium',
      bg: 'warning',
      isDone: true,
    },
    {
      id: 2,
      name: 'Do test task',
      description: 'Do test task and make sure that you do it perfect',
      priority: 'high',
      bg: 'danger',
      isDone: true,
    },
    {
      id: 3,
      name: 'Cook dinner',
      description: 'Cook dinner and make sure that you do it perfect',
      priority: 'low',
      bg: 'success',
      isDone: true,
    },
    {
      id: 4,
      name: 'Watch black mirror',
      description:
        'Watch new series BLACK MIRROR and make sure that you do it perfect',
      priority: 'high',
      bg: 'danger',
      isDone: false,
    },
    {
      id: 5,
      name: 'Do sport',
      description: 'Do sport and make sure that you do it perfect',
      priority: 'medium',
      bg: 'warning',
      isDone: false,
    },
    {
      id: 6,
      name: 'Run, jump & push up',
      description: 'Run, jump & push up and make sure that you do it perfect',
      priority: 'high',
      bg: 'danger',
      isDone: false,
    },
  ],
};
const Home = () => {
  const [shouldShowForm, toggleForm] = useState(false);
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
                        <th scope="col">Priority</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.todoItem.map((el) => (
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
