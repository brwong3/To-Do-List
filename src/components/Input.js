import React, { useState } from 'react'
import { useContext } from 'react'
import "../styles/Input.css"
import { listContext } from '../App'


export default function () {

  const {list} = useContext(listContext);

  return (
    <div className='container'>
      <input type="text" placeholder='Water Your Dog'></input>
      <button onClick={() => console.log(list)}>Add</button>
    </div>
  )
}

  