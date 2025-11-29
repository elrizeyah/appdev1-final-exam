// src/components/AddTodoForm.jsx
import React, { useState } from "react";

export default function AddTodoForm({ addTodo, theme }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return alert("You must write something!");
    addTodo({ text: input, completed: false });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={`${theme}-input`}
        type="text"
        placeholder="Add a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className={`todo-btn ${theme}-button`}>
        Add
      </button>
    </form>
  );
}
