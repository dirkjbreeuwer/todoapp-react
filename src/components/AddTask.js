import styles from "./AddTask.module.css";

const AddTask = () => {
  return (
    <div className={styles.addtask}>
      <div><div
                className={styles.addbutton}
              /></div>
      <span className={styles.description}>Add task</span>
    </div>
  );
};

export default AddTask;
