import React from 'react'
import styles from "./todolist.module.css"


export const TodoList = ({children}) => {
  return (
    <div className={styles.list}>{children}</div>
  )
}
