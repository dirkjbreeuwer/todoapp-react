import React, { useState } from "react";
import TaskInputForm from "./TaskInputForm";
import useDoubleClick from "../hooks/useDoubleClick";

import styles from "./TaskItem.module.css";

const TaskItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleViewClick = useDoubleClick(
    () => {
      console.log("Single click");
    },
    () => {
      console.log("Double click");
      setIsEditing(true);
    }
  );


  return (
    <>
      {isEditing && (
        <TaskInputForm/>
      )}
      {!isEditing && (
        <div className={styles.task}>
          <div>
            <div className={styles.checkbox} onClick={props.onDeleteTask} />
          </div>
          <span className={styles.description} onClick={handleViewClick}>
            {props.description}
          </span>
        </div>
      )}
    </>
  );
};

export default TaskItem;
