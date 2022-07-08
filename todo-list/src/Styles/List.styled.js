import styled from 'styled-components';

export const StyledList = styled.div`
    display: flex;
    flex-direction: column;
    width: 30rem;
    height: 70vh;

    overflow: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar{
        display: none;
    }

    text-align: center;
    margin: auto;
    margin-top: 1rem;
`