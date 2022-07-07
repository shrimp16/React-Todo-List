import React from 'react';

import '../Styles/Todo.scss';

export default function Todo({ todo, deleteTodo }) {

    return (
        <div className='todo-item'>
            <h3>{todo.name}</h3>
            <button onClick={() => {
                deleteTodo(todo.key);
            }}>Complete</button>
        </div>
    )
}