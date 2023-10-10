import React, { useState } from 'react';
import Filters from './Filters';
import NewItem from './NewItem';
import TodoItem from './TodoItem';
import { FaPlus } from 'react-icons/fa';

const data = {
  filters: {
    todoItem: [
      {
        id: 1,
        name: 'Wash dishes',
        priority: 'medium',
        bg: 'warning',
        done: true,
      },
      {
        id: 2,
        name: 'Do test task',
        priority: 'high',
        bg: 'danger',
        done: true,
      },
      {
        id: 3,
        name: 'Cook dinner',
        priority: 'low',
        bg: 'success',
        done: true,
      },
      {
        id: 4,
        name: 'Watch new series BLACK MIRROR',
        priority: 'high',
        bg: 'danger',
        done: false,
      },
      {
        id: 5,
        name: 'Do sport',
        priority: 'medium',
        bg: 'warning',
        done: false,
      },
      {
        id: 6,
        name: 'Run, jump & push up',
        priority: 'high',
        bg: 'danger',
        done: false,
      },
    ],
  },
};
const Home = () => {
  const [shouldShowForm, toggleForm] = useState(false);
  return (
    <div>
      <section class="mvh-100 gradient-custom-2">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-12 col-xl-10">
              <div class="card mask-custom">
                <div class="card-body p-4 text-white">
                  <div class="text-center pt-3 pb-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                      alt="Check"
                      width="60"
                    />
                    <h2 class="my-4">Task List</h2>
                  </div>
                  <div class="text-center pt-1 pb-3">
                    <button
                      type="button"
                      class="btn btn-success btn-rounded"
                      data-mdb-ripple-color="dark"
                      onClick={() => {
                        toggleForm((current) => !current);
                      }}
                    >
                      Add New Todo Item{' '}
                      <FaPlus
                        role="plus_button"
                        className="plus"
                        class="fas fa-solid fa-plus"
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
                  <table class="table text-white mb-0">
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
                      {data.filters.todoItem.map((el) => (
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
