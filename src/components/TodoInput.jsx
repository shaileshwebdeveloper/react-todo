import React from 'react'
import {useState} from 'react'
import styles from "./todoInput.module.css"

export const TodoInput = ({addTodo}) => {

  const [value, setValue] = useState("")

  const handleChange = (e) => {   //input
        setValue(e.target.value);
       //  console.log(value)
   }

   const handleAdd = () => {       // click button
       // console.log(value)
       addTodo(value)
       setValue("")
   }

  return (
    <div>
    <button className={styles.add} onClick={handleAdd}> + </button> 
    <input  className={styles.input} type="text" value={value} placeholder='Add a to-do...' onChange={handleChange}/>
    </div>
  )
}
