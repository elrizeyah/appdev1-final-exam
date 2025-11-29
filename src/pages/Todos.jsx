import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from '../features/todos/todosSlice';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';
import GitHubCorner from '../components/GitHubCorner';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const [theme, setTheme] = useState(localStorage.getItem('savedTheme') || 'standard');

  useEffect(() => { dispatch(fetchTodos()); }, [dispatch]);
  useEffect(() => { 
    localStorage.setItem('savedTheme', theme); 
    document.body.className = theme;
  }, [theme]);

  const handleAdd = (text) => dispatch(addTodo(text));
  const handleToggle = (todo) => dispatch(updateTodo({...todo, completed: !todo.completed}));
  const handleDelete = (id) => dispatch(deleteTodo(id));

  return (
    <div>
      <GitHubCorner />
      <h1 id="title" className={theme === 'darker' ? 'darker-title' : ''}>Just do it.</h1>

      <div className="flexrow-container">
        <div className="theme-selector standard-theme" onClick={() => setTheme('standard')}></div>
        <div className="theme-selector light-theme" onClick={() => setTheme('light')}></div>
        <div className="theme-selector darker-theme" onClick={() => setTheme('darker')}></div>
      </div>

      <AddTodoForm addTodo={handleAdd} theme={theme} />
      <p id="datetime">{new Date().toLocaleString()}</p>
      <TodoList todos={todos} toggleComplete={handleToggle} deleteTodo={handleDelete} theme={theme} />
    </div>
  );
};

export default Todos;
