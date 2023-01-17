import { v4 as uuidv4 } from 'uuid';

import styles from "./AddTask.module.css";




const AddTask = (props) => {
  const createNewTask = () => {
    const newTask = {
      id: uuidv4().toString(),
      description: "New task",
      status: "Active",
      creationDate: new Date().toISOString()
    }
    props.onAddTask(newTask);
  }
  return (
    <div className={styles.addtask}>
      <div>
        <div className={styles.addbutton} onClick={createNewTask}/>
      </div>
      <span className={styles.description}>Add task</span>
    </div>
  );
};

export default AddTask;
