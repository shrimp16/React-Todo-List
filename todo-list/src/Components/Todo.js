import React from 'react';

import { StyledTodo } from '../Styles/Todo.styled';
import { StyledButton } from '../Styles/Button.styled';
import { StyledH3 } from '../Styles/Titles.styled';

export default function Todo({ todo, deleteTodo }) {

    return (
        <StyledTodo>
            <StyledH3>{todo.name}</StyledH3>
            <StyledButton onClick={() => {
                deleteTodo(todo.key);
            }}>Complete</StyledButton>
        </StyledTodo>
    )
}