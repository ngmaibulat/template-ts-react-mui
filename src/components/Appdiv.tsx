import styled from "styled-components";

export const Appdiv = styled.div`
    padding: 15px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid black;
    max-width: 50%;
    color: yellowgreen;
    background-color: aqua;

    h1 {
        color: red;
        &:hover {
            background-color: black;
        }
    }
`;
