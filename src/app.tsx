import React from "react";
import { Appdiv } from "./components/Appdiv.js";
import { Message } from "./components/Message.jsx";

export default function App() {
    return (
        <Appdiv>
            <h1>Hola!</h1>
            <div className="red">gdhfgh</div>
            <Message msg="Hello!" />
        </Appdiv>
    );
}
