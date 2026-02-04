
import styles from "./taskInput.module.css"
export const TaskInput = ({addTask}) => {
    const [taskTitle, setTaskTitle] = useState("");
    const handleInputChange = (e) => {
        setTaskTitle(e.target.value);
    };

    const handleAddtask = (e) => {
        e.preventDefault();
        if (taskTitle.trim()) {
        addTask(taskTitle);
        setTaskTitle("");
        }
    };
    return (
        <div className={`box ${styles.element}`}>
            <h2 className={styles.title}>Ajouter une nouvelle tâche</h2>
            <form className={styles.container} onSubmit={handleAddtask}>
                <input 
                type="text"
                className={styles.input}
                placeholder="Indiquez le titre de la tâche à ajouter."
                onChange={handleInputChange}
                value={taskTitle}
                 />
                 <button className="button-primary" type="submit">
                Ajouter
            </button>
            </form>
            
        </div>
    );
};