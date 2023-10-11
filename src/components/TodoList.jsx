import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const filteredTodoList = useSelector((state) => state.todo.filtredTodoList);

  return (
    <>
      <table className="table text-white mb-0">
        <thead>
          {filteredTodoList.length ? (
            <tr>
              <th scope="col">Task</th>
              <th scope="col">Description</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          ) : (
            <th scope="col">Your List is empty</th>
          )}
        </thead>
        <tbody>
          {filteredTodoList.map((el) => (
            <TodoItem key={el.id} todoItem={el} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoList;
