import React, { useState } from 'react'
import { useContext } from 'react'
import "../styles/Input.css"

export default function () {

  return (
    <div className='container'>
      <input type="text" placeholder='Water Your Dog'></input>
      <button>Add</button>
    </div>
  )
}

  