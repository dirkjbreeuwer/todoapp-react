import React, { useState } from "react";
import TaskItem from "./TaskItem";
import TaskInputForm from "./TaskInputForm";
import styles from "./TaskList.module.css";

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

  // Editing logic
  const [editIndex, setEditIndex] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleEdit = (index) => {
    setEditIndex(index);
    setInputValue(tasks[index].description);
  };

  const handleSave = (index) => {
    setTasks(
      tasks.map((item, i) =>
        i === index ? { ...item, description: inputValue } : item
      )
    );
    setEditIndex(null);
    setInputValue("");
    console.log(inputValue);
  };

  // Form logic
  const toggleForm = () => {
    setIsAdding((prevIsAdding) => {
      return !prevIsAdding;
    });
  };

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  };

  const deleteTaskHandler = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      return updatedTasks;
    });
  };

  const taskList = tasks.map((task, index) => {
    return (
      <TaskItem
        key={task.id}
        description={task.description}
        onDeleteTask={() => deleteTaskHandler(task.id)}
        onEditTask={() => handleEdit(index)}
        onSaveTask={() => handleSave(index)}
        setInputValue={setInputValue}
        editIndex={editIndex}
        index={index}
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
          <TaskInputForm
            onAddTask={addTaskHandler}
            onSave={toggleForm}
            onCancel={toggleForm}
          />
        )}
      </div>
    </div>
  );
};

export default Tasks;
