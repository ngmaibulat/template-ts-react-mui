import React from "react";
import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    gap: 20px;

    & {
        div {
            min-height: 40px;
            min-width: 40px;
            margin: 10px;
            flex-grow: 1;
        }

        .left {
            background-color: red;
        }

        .center {
            background-color: yellow;
            flex-grow: 2;
        }

        .right {
            background-color: green;
        }
    }
`;

export function Sample() {
    return (
        <Content>
            <div className="left"></div>
            <div className="center"></div>
            <div className="right"></div>
        </Content>
    );
}
