import React from "react";
import { createRoot } from "react-dom/client";
import { Message } from "./components/Message.jsx";

// import { styled } from "@mui/system";
import styledpkg from "styled-components";

// import styledpkg from "@emotion/styled";

const styled = styledpkg.default;

const Appdiv = styled.div`
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

function App() {
    return (
        <Appdiv>
            <h1>Hola!</h1>
            <Message msg="Hello!" />
        </Appdiv>
    );
}

const container = document.getElementById("app")!;
const root = createRoot(container);
root.render(<App />);
