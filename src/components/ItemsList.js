import { MotionConfig } from 'framer-motion'
import React, {useContext} from 'react'
import "../styles/ItemsList.css"
import { motion } from "framer-motion"
import { listContext } from '../App'
 

export default function ItemsList(props) {

  const {list} = useContext(listContext);
  const {setList} = useContext(listContext);

  function whileClick(item) {
    setList(list.filter(list => list !== item))
  }
  

  const table = props.item.map((item) => <button onClick={()=> whileClick(item)}className="box">{item}</button>)
  
  return(
    <div className='tableContainer'>
      {table}
    </div>
  )
}
