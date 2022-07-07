import React from 'react';

export default function Todo ( { todo, deleteTodo } ) {

    return (
        <>
            <div>
                <h3>{todo.name}</h3>
                <button onClick={() => {
                    deleteTodo(todo.key);
                }}>Complete</button>
            </div>
        </>
    )
}