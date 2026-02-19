//Le compsant qui va nous permettre d'afficher la liste des tâches
import { useState } from "react";
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

      {/* 👉 Aucune tâche */}
      {tasksList.length === 0 && (
        <p className={styles.message}>
          🚀 Aucune tâche pour le moment — ajoute-en une !
        </p>
      )}

      {/* 👉 Toutes complétées */}
      {allCompleted && (
        <p className={styles.successMessage}>
          ✅ Bravo ! Toutes les tâches sont terminées !
        </p>
      )}

      {/* 👉 Liste normale */}
      {tasksList.length > 0 && !allCompleted && (
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
