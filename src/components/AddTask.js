import styles from "./AddTask.module.css";



const AddTask = (props) => {
  let taskIdCounter = 5;
  const createNewTask = () => {
    const newTask = {
      id: "t" + taskIdCounter,
      description: "New task",
      status: "Active",
      creationDate: new Date().toISOString()
    }
    taskIdCounter++;
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
