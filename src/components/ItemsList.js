import React from 'react'
import "../styles/ItemsList.css"

export default function ItemsList(props) {
  const table = props.item.map((item) => <h1 className="box">{item}</h1>)
  
  return(
    <div>
      {table}
    </div>
  )
}
