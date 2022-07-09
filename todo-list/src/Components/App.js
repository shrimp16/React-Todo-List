import React, { useState, useRef, useEffect } from 'react';

import { StyledHeader } from '../Styles/Header.styled';
import { StyledH1 } from '../Styles/Titles.styled';
import { StyledInput } from '../Styles/Input.styled';
import { StyledButton } from '../Styles/Button.styled';

import List from './List';

function App() {

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  const todoInput = useRef();

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
      <StyledHeader>
        <StyledH1>React To-Do List</StyledH1>
        <StyledInput ref={todoInput} className="todo-input" type="text"></StyledInput>
        <StyledButton onClick={createTodo}>Create Todo</StyledButton>
      </StyledHeader>
      <List todos={todos} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
