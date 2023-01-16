import styles from "./AddTask.module.css";

const AddTask = () => {
  return (
    <div className={styles.addtask}>
      <div><img
                className={styles.checkboxChild}
                alt=""
                src="../addoutlined.svg"
              /></div>
      <span className={styles.description}>Add task</span>
    </div>
  );
};

export default AddTask;
