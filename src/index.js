import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "playbook-ui/dist/reset.css";
import "playbook-ui/dist/playbook.css";
import "../public/fontawesome.min.js";
import "../public/regular.min.js";
import "./styles.scss";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
