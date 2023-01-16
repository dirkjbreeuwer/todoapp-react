import styles from "./AddTask.module.css";

const AddTask = (props) => {
  return (
    <div className={styles.addtask}>
      <div>
        <div className={styles.addbutton} onClick={props.onAddTask}/>
      </div>
      <span className={styles.description}>Add task</span>
    </div>
  );
};

export default AddTask;
