import React from "react";
import { useState } from "react";
import styles from "./todoitem.module.css"

export const TodoItem = ({ value, deleteTodo, todo}) => {

  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

    return (
     <div className={isCompleted ? styles.todoBg: styles.todo}>
      <input type="checkbox" 
        checked = {isCompleted}
        onChange ={ (e) => {
            setIsCompleted(e.target.checked)
        }}
      />
     
    <div className={isCompleted ? styles.striked: ""}>{value}</div>
    <button className={styles.right} onClick={() => deleteTodo(value)}>Remove</button> 
    </div>
  );
};
