import React from 'react';

import Todo from './Todo';

import '../Styles/List.scss';

export default function List ( { todos, deleteTodo }) {

    return (
        <div className='todo-list'>
            {todos.map((todo) => {
                console.log(todo.key);
                return (
                    <Todo key={todo.key} todo={todo} deleteTodo={deleteTodo}/>
                )
            })}
        </div>
    )

}