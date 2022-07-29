import React, { useState } from 'react'
import { useContext } from 'react'
import "../styles/Input.css"
import { listContext } from '../App'


export default function () {

  const {list} = useContext(listContext);
  const {setList} = useContext(listContext);

  const[input, setInput] = useState("");

  function checkDuplicate(input) {
    for(let i = 0; i< list.length; i++) {
      if(list[i].toLowerCase() === input.toLowerCase()) {
        return true;
      }
    }
    return false;

  }

  function handleClick() {
    if(input != "" && !checkDuplicate(input)) {
      setList([...list, input]);
      setInput("");
      console.log(list)
    }
  }

  return (
    <div className='container'>
      <input onKeyDown={(e) => {
        if(e.key === "Enter") {
          handleClick()
        }
      }} type="text" placeholder='Water Your Dog' value={input} onChange={e => setInput(e.target.value)}></input>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

  