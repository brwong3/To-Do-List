import React from 'react'

export default function ItemsList(props) {
  const table = props.item.map((item) => <h1>{item}</h1>)
  return(
    <div>
      {table}
    </div>
  )
}
