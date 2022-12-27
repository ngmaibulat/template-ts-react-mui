import React from "react";
import styled from "styled-components";

export const FooterDiv = styled.footer`
    background-color: #00000009;
    border-top: 1px solid lightgray;
    display: flex;

    & div {
        min-height: 100px;
        max-height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
    }

    @media only screen and (max-width: 600px) {
        display: block;
    }
`;

export function Footer() {
    return (
        <FooterDiv>
            <div>div1</div> <div>div2</div> <div>div3</div>
        </FooterDiv>
    );
}
