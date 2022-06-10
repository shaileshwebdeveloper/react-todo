// import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todo';
import styles from "./components/main.module.css"

function App() {

  

  return (
    <div className={styles.width}>
        <Todo/>
    </div>
  );
}

export default App;
