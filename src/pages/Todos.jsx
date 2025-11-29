// src/pages/Todos.jsx
import React, { useState, useEffect } from "react";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import GitHubCorner from "../components/GitHubCorner"; // optional
import "../CSS/main.css";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState(
    localStorage.getItem("savedTheme") || "standard"
  );

  // Load todos from localStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Save theme to localStorage and update body class
  useEffect(() => {
    localStorage.setItem("savedTheme", theme);
    document.body.className = theme;
  }, [theme]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const toggleComplete = (index) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1 id="title" className={theme === "darker" ? "darker-title" : ""}>
        Todo App
      </h1>

      {/* Theme Selector */}
      <div className="flexrow-container">
        <div
          className="theme-selector standard-theme"
          onClick={() => setTheme("standard")}
        ></div>
        <div
          className="theme-selector light-theme"
          onClick={() => setTheme("light")}
        ></div>
        <div
          className="theme-selector darker-theme"
          onClick={() => setTheme("darker")}
        ></div>
      </div>

      {/* Add Todo Form */}
      <AddTodoForm addTodo={addTodo} theme={theme} />

      {/* Todo List */}
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        theme={theme}
      />

      {/* GitHub corner */}
      <GitHubCorner />
    </div>
  );
}
