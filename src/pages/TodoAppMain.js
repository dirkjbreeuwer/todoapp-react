import NavBar from "../components/NavBar";
import Drawer from "../components/Drawer";
import Tasks from "../components/TaskList";
import styles from "./TodoAppMain.module.css";

const TodoAppMain = () => {
  return (
    <div className={styles.todoappMain}>
      <NavBar />
      <div className={styles.main}>
        <Drawer />
        <Tasks />
      </div>
    </div>
  );
};

export default TodoAppMain;
