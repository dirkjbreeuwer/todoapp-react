import styles from "./TaskItem.module.css";

import useDoubleClick from "../hooks/useDoubleClick";

const TaskItem = (props) => {
  const handleViewClick = useDoubleClick(
    () => {
      console.log("Single click");
    },
    () => {
      console.log("Double click");
    }
  );

  return (
    <div className={styles.task}>
      <div><div
                className={styles.checkbox}
                onClick={props.onDeleteTask}
              /></div>
      <span className={styles.description} onClick={handleViewClick}>{props.description}</span>
    </div>
  );
};

export default TaskItem;
