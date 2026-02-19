 
 import styles from "./Footer.module.css"

 export const Footer = ({completedTasks}) => {
  if (completedTasks){
    return (
        <footer>
          <code className={styles.footer}>
            Task Manager: vous avez éliminez {completedTasks} tâche"s"
            </code>  
        </footer>
    );
  }
    return null;
 };