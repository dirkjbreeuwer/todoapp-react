import TaskItem from "../components/TaskItem";
import styles from "./Tasks.module.css";

const Tasks = () => {
  return (
    <div className={styles.tasks}>
      <div className={styles.header}>
        <div className={styles.listname}>Inbox</div>
      </div>
      <div className={styles.tasks1}>
        <TaskItem uICreateNavigationCompone="UI - Create Navigation component" />
        <div className={styles.taskitem}>
          <div className={styles.taskcontainer}>
            <div className={styles.checkbox}>
              <img
                className={styles.checkboxChild}
                alt=""
                src="../ellipse-1.svg"
              />
            </div>
            <div
              className={styles.uiCreate}
            >{`UI - Create Drawer section `}</div>
          </div>
          <div className={styles.separator} />
        </div>
        <div className={styles.taskitem}>
          <div className={styles.taskcontainer}>
            <div className={styles.checkbox}>
              <img
                className={styles.checkboxChild}
                alt=""
                src="../ellipse-1.svg"
              />
            </div>
            <div className={styles.uiCreate}>UI - Create Tasks component</div>
          </div>
          <div className={styles.separator} />
        </div>
        <div className={styles.taskitem}>
          <div className={styles.taskcontainer}>
            <div className={styles.checkbox}>
              <img
                className={styles.checkboxChild}
                alt=""
                src="../ellipse-1.svg"
              />
            </div>
            <div className={styles.uiCreate}>Backend - Add authentication</div>
          </div>
          <div className={styles.separator} />
        </div>
        <div className={styles.taskitem3}>
          <div className={styles.taskcontainer}>
            <div className={styles.checkbox}>
              <img
                className={styles.addoutlinedIcon}
                alt=""
                src="../addoutlined.svg"
              />
            </div>
            <div className={styles.addTask}>Add Task</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
