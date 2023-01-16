import styles from "./TaskItem.module.css";

const TaskItem = (props) => {
  return (
    <div className={styles.task}>
      <div><div
                className={styles.checkbox}
                onClick={props.onDeleteTask}
              /></div>
      <span className={styles.description}>{props.description}</span>
    </div>
  );
};

export default TaskItem;
