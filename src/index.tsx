import React from "react";
import ReactDOM from "react-dom/client";
import "./css/global.css";

import App from "./app";

const container = document.getElementById("app")!;
const root = ReactDOM.createRoot(container);
root.render(<App />);
