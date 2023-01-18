import React from "react";
import { Fragment } from "react";
import classes from "./AddTaskForm.module.css";

const AddTaskForm = () => {
  return (
    <Fragment>
      <div className={classes.taskform}>
        <div className={classes.taskinputsection}>
          <div >
            <input type="text" placeholder="Task Name" className={classes.taskdescriptioninput} />
          </div>
          <div className={classes.taskpanebutton}>
            <button>Inbox</button>
          </div>
        </div>
      </div>
      <div className={classes.taskactions}>
        <div className={classes.taskactionscancelbutton}>
          <button>Cancel</button>
        </div>
        <div className={classes.taskactionsaddbutton}>
          <span className={classes.taskactionsaddbuttontext}>Add task</span>
        </div>
      </div>
    </Fragment>
  );
};

export default AddTaskForm;
