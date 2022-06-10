import React from "react";
import styles from "./todoitem.module.css"


export const Deleted  = ({deleted}) => {
  return (
     <div>
       {deleted.map((e) => (
       <div className={styles.todo}>
       <input type="checkbox" checked/>
       <div className={styles.striked}>{ e.value}</div>
       </div>
      ))}
     </div>
);
      

}
