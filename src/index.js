import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createContext } from "react"; // just create context sub-module

export const MyContext = createContext({}); // just this piece of code

const myObject = {
  hi: "hello",
};

ReactDOM.render(
  <React.StrictMode>
    <MyContext.Provider value={myObject}>
      <App />
    </MyContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
