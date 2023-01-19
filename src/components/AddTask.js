import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


import styles from "./AddTask.module.css";


const AddTask = (props) => {
  const [formVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible(prevState => !prevState);
  };

  const createNewTask = (description) => {
    const newTask = {
      id: uuidv4(),
      description: description,
      status: "Active",
      creationDate: new Date().toISOString()
    };
    props.onAddTask(newTask);
  };

  return (
    <div className={styles.addtask}>
      <div>
        <div className={styles.addbutton} onClick={toggleForm}/>
      </div>
      <span className={styles.description}>Add task</span>
      {formVisible && (
        <div className={styles.formContainer}>
          <form onSubmit={(e) => {
            e.preventDefault();
            createNewTask(e.target.taskDescription.value);
            toggleForm();
          }}>
            <input type="text" name="taskDescription" placeholder="Enter task description"/>
            <button type="submit">Add</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddTask;