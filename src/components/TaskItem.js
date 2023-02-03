import React, { Fragment } from "react";
import styles from "./TaskItem.module.css";

const TaskItem = (props) => {
  return (
    <div className={styles.task}>
      <div className={styles.checkbox} onClick={props.onDeleteTask} />

      {props.editIndex === props.index ? (
        <>
          <input
            type="text"
            value={props.inputValue}
            onChange={(e) => props.setInputValue(e.target.value)}
          />
          <button onClick={props.onSaveTask}>Save</button>
        </>
      ) : (
        <>
          <div className={styles.description} key={props.id}>
            {" "}
            {props.description}{" "}
          </div>
          <button onClick={props.onEditTask}>Edit</button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
