import React, { createContext, useState } from "react";
import Input from "./components/Input";
import "./styles/App.css"
import ItemsList from "./components/ItemsList";
import { motion } from "framer-motion"


export const listContext = createContext();

function App() {

  const[list, setList] = useState([]);

  return (
    <listContext.Provider value={{list, setList}}>
      <div className="App">
        <div className="input">
          <motion.div transition={{duration: 0.5, ease: "easeIn"}} animate={{ scale:1.5}} className="title">To-Do List</motion.div>
          <motion.div transition={{duration: 1, ease: "easeIn"}} animate={{ scale:1.2, rotate: 720}} className="subtitle">Click to Delete</motion.div>
          <motion.div animate={{x: [-100, 0]}} transition={{duration: 0.5, ease: "easeIn"}}><Input></Input></motion.div>
        </div>
        <div className="table">
          <ItemsList item={list}></ItemsList>
        </div>
      </div>
    </listContext.Provider>
  );
}

export default App;
