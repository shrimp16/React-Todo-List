import React from 'react';

import Todo from './Todo';

export default function List ( { todos, deleteTodo }) {


    return (
        <>
            {todos.map((todo) => {
                console.log(todo.key);
                return (
                    <Todo key={todo.key} todo={todo} deleteTodo={deleteTodo}/>
                )
            })}
        </>
    )
}