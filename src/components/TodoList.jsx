import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const sortedTodoList = [...todoList];
  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === 'All') {
      return true;
    }
    return item.status === filterStatus;
  });

  return (
    <>
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
          {filteredTodoList.map((el) => (
            <TodoItem key={el.id} todoItem={el} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoList;
