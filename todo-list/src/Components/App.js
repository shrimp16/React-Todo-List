import React, { useState, useRef, useEffect } from 'react';
import '../Styles/App.scss';

import List from './List';

function App() {

  const [todos, setTodos] = useState([]);

  const todoInput = useRef();

  useEffect(() => {

    const storedTodos = JSON.parse(localStorage.getItem('todos'));

    if (storedTodos === null) return;

    setTodos(storedTodos);

    console.log(todos);

  }, [])

  useEffect(() => {

    localStorage.setItem('todos', JSON.stringify(todos));

  }, [todos])

  function createTodo() {

    if (todoInput.current.value === '') return;

    const newTodo = {
      name: todoInput.current.value,
      key: todos.length
    }

    const updatedTodos = [...todos, newTodo];

    setTodos(updatedTodos);

    todoInput.current.value = null;

  }

  function deleteTodo(id) {

    const todosCopy = [...todos];

    const filteredTodos = todosCopy.filter(todo => todo.key !== id);
    
    setTodos(filteredTodos);

  }

  return (
    <>
      <div className='todo-creator'>
        <h1>React To-Do List</h1>
        <input ref={todoInput} className="todo-input" type="text"></input>
        <button onClick={createTodo}>Create Todo</button>
      </div>
      <List todos={todos} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
