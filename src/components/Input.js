import React, { useState } from 'react'
import "../styles/Input.css"
import store from '../store'

export const reduceItem = (state = [], action) => {
  switch(action.type) {
    case "addItem":
      state.push(action.payload) 
  }
}

export default function () {

  const[input, setInput] = useState();

  const addItem = (item) => {
    return {
      type: "addItem",
      payload: item
    }
  }

  return (
    <div className='container'>
      <input type="text" placeholder='Water Your Dog'></input>
      <button onClick={()=>store.dispatch(addItem(input))}>Add</button>
      <h1>{store.getState()}</h1>
    </div>
  )
}

  