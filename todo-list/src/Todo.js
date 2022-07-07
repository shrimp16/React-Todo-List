import React from 'react';

export default function Todo (todo) {

    console.log(todo);

    return (
        <>
            <div>
                <h3>{todo.todo.name}</h3>
                <button>Complete</button>
            </div>
        </>
    )
}