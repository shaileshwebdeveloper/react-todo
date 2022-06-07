// import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todo';
import styles from "./components/main.module.css"
import { useState } from 'react';
import { Deleted } from './components/Deleted ';

function App() {

  const [toggle, setToggle] = useState(false)

  return (
    <div className={styles.width}>
        <Todo/>
        <button className={styles.show} onClick ={ () => setToggle(!toggle)}>Show Completed To-Dos</button>
        {toggle ? <Deleted/> : "" }
    </div>
  );
}

export default App;
