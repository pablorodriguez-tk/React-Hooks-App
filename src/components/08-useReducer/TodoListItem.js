import React from "react";
import PropTypes from "prop-types";

const TodoListItem = ({ todo, i, handleDelete, handleToggle }) => {
  return (
    <li className="list-group-item">
      <p
        className={`${todo.done && "complete"}`}
        onClick={() => handleToggle(todo.id)}
      >
        {i + 1}. {todo.desc}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
        Borrar
      </button>
    </li>
  );
};

TodoListItem.propTypes = {};

export default TodoListItem;
