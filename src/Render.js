import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { addPost } from "./Redux/State";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let render = (props) => {
  root.render(
    <React.StrictMode>
      <App appState={props} addPost={addPost} />
    </React.StrictMode>
  );
};
