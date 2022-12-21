import React from "react";
import { createRoot } from "react-dom/client";
import { Message } from "./components/Message.jsx";

function App() {
    return <Message msg="Hello!" />;
}

const container = document.getElementById("app")!;
const root = createRoot(container);
root.render(<App />);
