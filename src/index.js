import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createContext } from "react"; // just create context sub-module
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const MyContext = createContext({}); // just this piece of code

const myObject = {
  hi: "hello",
};

const About = () => <div>About page!</div>;

const Users = () => <div>Users page!</div>;

const Home = () => <div>Home page</div>;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <MyContext.Provider value={myObject}>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </MyContext.Provider>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
