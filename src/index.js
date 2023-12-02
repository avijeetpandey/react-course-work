import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

// importing global css for app
import "./index.css";

// creating root element to render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
