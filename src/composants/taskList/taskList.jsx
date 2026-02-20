//Le compsant qui va nous permettre d'afficher la liste des tâches
import { useState } from "react";
// TaskList.jsx
// TaskList.jsx
import { TaskItem } from "../taskItem/taskItem";
import styles from "./taskList.module.css";

export const TaskList = ({
  tasksList,
  editTask,
  deleteTask,
  incompletedTasks,
}) => {
  const allCompleted =
    tasksList.length > 0 &&
    tasksList.every((task) => task.completed);

  return (
    <div className="box">
      <h2 className={styles.title}>
        Il te reste encore <span className="important">{incompletedTasks}</span> tâche(s) !
      </h2>

      {/* 👉 Liste vide */}
      {tasksList.length === 0 && (
        <p className={styles.message}>
         Ajoutez une tâche pour commencer !
        </p>
      )}

      {/* 👉 Message succès MAIS liste visible */}
      {allCompleted && (
        <p className={styles.successMessage}>
           Toutes les tâches sont complétées !
        </p>
      )}

      {/* 👉 Liste affichée TOUJOURS si tâches existantes */}
      {tasksList.length > 0 && (
        <ul className={styles.container}>
          {tasksList.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              editTask={editTask}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
