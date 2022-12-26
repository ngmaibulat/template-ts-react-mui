import React from "react";
import styled from "styled-components";

export const FooterDiv = styled.div`
    background-color: lightgray;
    flex-grow: 0;
    max-height: 200px;
    min-height: 100px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

export function Footer() {
    return (
        <FooterDiv>
            <div>div1</div> <div>div2</div> <div>div3</div>
        </FooterDiv>
    );
}
