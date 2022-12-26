import React from "react";
import styled from "styled-components";

export const MainStyled = styled.div`
    background-color: lightblue;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export function Main() {
    return <MainStyled>Main</MainStyled>;
}
