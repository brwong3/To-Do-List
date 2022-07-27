import React, { createContext } from "react";
import Input from "./components/Input";
import "./styles/App.css"


export const list = createContext();

function App() {
  return (
      <div className="App">
        <h1>To-Do List</h1>
        <Input></Input>
      </div>
  );
}

export default App;
