import styles from "./TaskItem.module.css";

const TaskItem = ({ uICreateNavigationCompone }) => {
  return (
    <div className={styles.taskitem}>
      <div className={styles.taskcontainer}>
        <div className={styles.checkbox}>
          <img className={styles.checkboxChild} alt="" src="../ellipse-1.svg" />
        </div>
        <div className={styles.uiCreate}>{uICreateNavigationCompone}</div>
      </div>
      <div className={styles.separator} />
    </div>
  );
};

export default TaskItem;
