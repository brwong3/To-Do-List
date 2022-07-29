import React, { createContext, useState } from "react";
import Input from "./components/Input";
import "./styles/App.css"
import ItemsList from "./components/ItemsList";


export const listContext = createContext();

function App() {

  const[list, setList] = useState([]);

  return (
    <listContext.Provider value={{list, setList}}>
      <div className="App">
        <div className="input">
          <h1>To-Do List</h1>
          <Input></Input>
        </div>
        <div className="table">
          <ItemsList item={list}></ItemsList>
        </div>
      </div>
    </listContext.Provider>
  );
}

export default App;
