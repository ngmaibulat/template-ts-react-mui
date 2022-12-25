import React from "react";
import { Appdiv } from "./components/Appdiv.js";
import { Message } from "./components/Message.jsx";
import { Menu } from "./components/Menu.js";

export default function App() {
    return (
        <>
            <Menu />
            <Appdiv>
                <Message msg="App Content" />
            </Appdiv>
        </>
    );
}
