import React, { useRef, Fragment, useState } from "react";
import classes from "./TaskInputForm.module.css";
import { v4 as uuidv4 } from "uuid";

const TaskInputForm = (props) => {
  const formRef = useRef(null);

  const [formVisible, setFormVisible] = useState(true);

  const toggleForm = () => {
    setFormVisible((prevState) => !prevState);
  };

  const createNewTask = (event) => {
    event.preventDefault();
    const newTask = {
      id: uuidv4(),
      description: formRef.current.taskDescription.value,
      status: "Active",
      creationDate: new Date().toISOString(),
    };
    toggleForm();
    props.onAddTask(newTask);
  };

  return (
    <Fragment>
        {formVisible && (
        <form ref={formRef}>
          <div className={classes.taskform}>
            <div className={classes.taskinputsection}>
              <input
                type="text"
                placeholder="Task Name"
                name="taskDescription"
                className={classes.taskdescriptioninput}
              />
              <div className={classes.taskpanebutton}>Inbox</div>
            </div>
          </div>
          <div className={classes.taskactions}>
            <div
              onClick={toggleForm}
              className={classes.taskactionscancelbutton}
            >
              <span className={classes.taskactionscancelbuttontext} onClick={props.onCancel}>
                Cancel
              </span>
            </div>
            <button
              type="submit"
              onClick={createNewTask}
              className={classes.taskactionsaddbutton}
            >
              <span className={classes.taskactionsaddbuttontext} onClick={props.onSave}>Add task</span>
            </button>
          </div>
        </form> )}
    </Fragment>
  );
};

export default TaskInputForm;
