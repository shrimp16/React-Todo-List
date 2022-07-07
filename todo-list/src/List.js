import React from 'react';

import Todo from './Todo';

export default function List (todos) {

    console.log(todos);

    return (
        <>
            {todos.todos.map((todo) => {
                return (
                    <Todo key={todo.key} todo={todo}/>
                )
            })}
        </>
    )
}