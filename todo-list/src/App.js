import { useState, useRef } from 'react';
import './App.css';

import List from './List';

function App() {

  const [todos, setTodos] = useState([]);

  const todoInput = useRef();

  function createTodo() {

    if (todoInput.current.value === null) return;

    const newTodo = todoInput.current.value;

    const updatedTodos = [...todos, newTodo];

    setTodos(updatedTodos);

    todoInput.current.value = null;

  }

  return (
    <>
      <div>
        <input ref={todoInput} className="todo-input" type="text"></input>
        <button onClick={createTodo}>Create Todo</button>
      </div>
      <List todos={todos} />
    </>
  );
}

export default App;
