// src/components/TodoItem.jsx
import React from "react";

export default function TodoItem({ todo, index, toggleComplete, deleteTodo, theme }) {
  return (
    <div
      className={`todo ${theme}-todo ${todo.completed ? "completed" : ""}`}
    >
      <li className="todo-item">{todo.text}</li>
      <button
        className={`check-btn ${theme}-button`}
        onClick={() => toggleComplete(index)}
      >
        ✔
      </button>
      <button
        className={`delete-btn ${theme}-button`}
        onClick={() => deleteTodo(index)}
      >
        🗑
      </button>
    </div>
  );
}
