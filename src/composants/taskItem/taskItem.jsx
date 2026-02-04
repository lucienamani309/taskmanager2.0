//Composant qui va afficher une tâche ajoutée

import styles from "./taskItem.module.css";

export const TaskItem = (
    task,
    editTask,
    deleteTask,
) => {
    return (
        <li className={`${styles.container} ${task?.comleted ? styles.success : styles.default}`}
        onClick={() => editTask(task.id, !task.comleted)} 
        >
            <div className={styles.item}>
                <div className={`${styles.id} ${styles.idDefault}`}>
                    {task}
                </div>
                <div className={styles.contentDefault}>
                    {task.title}
                </div>
            </div>
        <button className="button-primary">x</button>
        </li>
    );
};