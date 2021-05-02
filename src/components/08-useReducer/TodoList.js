import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          i={i}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {};

export default TodoList;
