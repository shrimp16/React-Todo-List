import React from 'react';

import Todo from './Todo';

import { StyledList } from '../Styles/List.styled';

export default function List ( { todos, deleteTodo }) {

    return (
        <StyledList>
            {todos.map((todo) => {
                console.log(todo.key);
                return (
                    <Todo key={todo.key} todo={todo} deleteTodo={deleteTodo}/>
                )
            })}
        </StyledList>
    )

}