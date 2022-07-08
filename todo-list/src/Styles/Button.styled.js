import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 9rem;
    heigth: 2rem;
    font-size: 1.3rem;
    border-radius: 7.5px;
    border: 2px rgba(0, 0, 255, 0.4) solid;
    background-color: rgba(0, 0, 255, 0.15);
    transition: 0.3s;
    cursor: pointer;
    margin: auto;

    &:hover {
        background-color: rgba(0, 0, 255, 0.4);
        color: white;
    }
`