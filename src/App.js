import logo from "./logo.svg";
import "./App.css";
import React from "react"; // get all of it!
import { MyContext } from "./index";

function App() {
  return (
    <MyContext.Consumer>
      {(data) => {
        console.log(data);

        return (
          <div className="App">
            <h1>{data.hi}</h1>
          </div>
        );
      }}
    </MyContext.Consumer>
  );
}

export default App;
