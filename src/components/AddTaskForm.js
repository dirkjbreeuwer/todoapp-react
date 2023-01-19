import React from "react";
import { Fragment } from "react";
import classes from "./AddTaskForm.module.css";

const AddTaskForm = () => {
  return (
    <Fragment>
      <form>
      <div className={classes.taskform}>
        <div className={classes.taskinputsection}>
          <input
            type="text"
            placeholder="Task Name"
            name="taskDescription" 
            className={classes.taskdescriptioninput}
          />
          <div className={classes.taskpanebutton}>
            Inbox
          </div>
        </div>
      </div>
      <div className={classes.taskactions}>
        <div onClick={() => console.log("Cancelled")} className={classes.taskactionscancelbutton}>
          <span className={classes.taskactionscancelbuttontext}>Cancel</span>
        </div>
        <button type = "submit" onClick={() => console.log("Clicked")} className={classes.taskactionsaddbutton}>
          <span className={classes.taskactionsaddbuttontext}>Add task</span>
        </button>
      </div>
      </form>
    </Fragment>
  );
};

export default AddTaskForm;
