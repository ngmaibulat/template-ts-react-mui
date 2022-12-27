import React from "react";
import styled from "styled-components";

export const MainStyled = styled.main`
    background-color: #ebedf4;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export function Main() {
    return <MainStyled>Main</MainStyled>;
}
