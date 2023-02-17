import './App.css';
import { React, useState } from 'react';
import { TodoList } from './Todo/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const storeTodo = (todo) => {
    setTodo(todo.target.value);
  };

  const addTodo = () => {
    if (todo === '') return;

    if (todo.length > 20) return alert('Todo is too long');

    if (todo.length < 3) return alert('Todo is too short');

    if (todos.includes(todo)) return alert('Todo already exists');

    if (!todo.match(/^[a-zA-Z0-9 ]*$/))
      return alert('Todo contains invalid characters');

    setTodos([...todos, todo]);
    setTodo('');
  };

  const onItemChecked = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    console.log(newTodos, index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="overview">
        <div className="controls">
          <input
            type="text"
            onChange={(e) => storeTodo(e)}
            placeholder="Add todo"
            value={todo}
          />
          <button onClick={addTodo}>Add</button>
        </div>
        <TodoList todos={todos} onItemChecked={onItemChecked} />
      </div>
    </div>
  );
};

export default App;
