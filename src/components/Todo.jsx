import React from 'react'
import { useState } from 'react'
import { TodoInput } from './TodoInput'
import { TodoItem } from './TodoItem'
import { TodoList } from './TodoList'
import { v4 as uuidv4 } from 'uuid';
import { Deleted } from './Deleted '
import styles from "../components/main.module.css"



export const Todo = () => {
    
    const [todos, setTodos] = useState([])

    const [deleted, setDeleted] = useState([])

    const [toggle, setToggle] = useState(false)
    

    const addTodo = (value) => {        // making array
        setTodos([...todos, {
            id: uuidv4(),
            value: value
        }])     //previous value + new value
        // if you dont write ...todos badenge nahi and then wo div list me dikega nahi
        // console.log(todos)
        //It will make array of value entered in input
    }

    const deleteTodo = (value) => {
        // console.log(value)
        setTodos(todos.filter((todo) => todo.value !== value));
        // todo !== value
    }


  return (
     <div >
         <TodoInput addTodo = {addTodo}/>
          <TodoList>
              <div>
              {todos.map((todo) =>{
              return <TodoItem todo = {todo} key={todo.id} value = {todo.value} deleteTodo= {deleteTodo}  setDeleted={setDeleted} deleted={deleted} />
              })} 
              </div>
          </TodoList>

        <button className={styles.show} onClick ={ () => setToggle(!toggle)}>Show Completed To-Dos</button>
        {toggle ? <Deleted deleted={deleted}/> : "" }

     </div>
  )
}
