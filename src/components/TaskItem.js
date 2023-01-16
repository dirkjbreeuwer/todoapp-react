import styles from "./TaskItem.module.css";

const TaskItem = (props) => {
  return (
    <div className={styles.task}>
      <div><img
                className={styles.checkbox}
                alt=""
                src="../ellipse-1.svg"
                onClick={props.onDeleteTask}
              /></div>
      <span className={styles.description}>{props.description}</span>
    </div>
  );
};

export default TaskItem;
