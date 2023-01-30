import React, { useState } from "react";
import TaskItem from "./TaskItem";
import TaskInputForm from "./TaskInputForm";
import styles from "./Tasks.module.css";

const DUMMY_TASKS = [
  {
    id: "t1",
    description: "UI - Create Navigation component",
    status: "Active",
    creationDate: "2022-01-01",
  },
  {
    id: "t2",
    description: "UI - Create Drawer section",
    status: "Active",
    creationDate: "2022-01-01",
  },
  {
    id: "t3",
    description: "UI - Create Tasks component",
    status: "Active",
    creationDate: "2022-01-01",
  },
  {
    id: "t4",
    description: "Backend - Add authentication",
    status: "Active",
    creationDate: "2022-01-01",
  },
];

const Tasks = () => {
  const [tasks, setTasks] = useState(DUMMY_TASKS);
  const [isAdding, setIsAdding] = useState(false);

  const toggleForm = () => {
    setIsAdding((prevIsAdding) => {
      return !prevIsAdding;
    });};

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  };

  const updateTaskHandler = (taskId, taskDescription) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === taskId) {
          task.description = taskDescription;
        }
        return task;
      });
      return updatedTasks;
    });
  };


  const deleteTaskHandler = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      return updatedTasks;
    });
  };

  const taskList = tasks.map((task) => {
    return (
      <TaskItem
        key={task.id}
        description={task.description}
        status={task.status}
        creationDate={task.creationDate}
        onDeleteTask={() => deleteTaskHandler(task.id)}
        onUpdateTask={updateTaskHandler.bind(null, task.id)}
      />
    );
  });

  return (
    <div className={styles.tasks}>
      <div className={styles.header}>
        <span className={styles.H1}>Inbox</span>
      </div>
      <div>{taskList}</div>
      <div>
        {!isAdding && (
         <div className={styles.addtask}>
         <div>
           <div className={styles.addbutton} onClick={toggleForm} />
         </div>
         <span className={styles.description}>Add task</span>
       </div>
        )}
        {isAdding && (
         <TaskInputForm onAddTask={addTaskHandler} onSave={toggleForm} onCancel={toggleForm} />
        )
        }
      </div>
    </div>
  );
};

export default Tasks;
