import { useState } from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/taskList";

//Composant pour afficher l'integralité des râches
export const TaskContainer = () => {
    const [tasksList, setTasksList] = useState ([]);

    const addTask = (title) => {
        const newTask = {
            id: tasksList.length + 1,
            title: title,
            completed : false,
        };
        setTasksList([...tasksList, newTask]);
    };

    const editTask = (id, completedValue) => {
        setTasksList(
            tasksList.map((task) =>
                task.id === id ? {...task, completed: completedValue}:
            )
        );
    };

    const deleteTask = (id) => {
        setTasksList(tasksList.filter((task) => task.id !== id));
    };

    const getTaskCounts = () => {
        const completedTasks = tasksList.filter((task) => task.completed)
        const incompletedTasks = tasksList.length - completedTasks;
        return {
            completedTasks,
            incompletedTasks
        }
    }

    const {completedTasks, incompletedTasks}= getTaskCounts(); 
    return (
        <main>
            <Header />
            <TaskInput addTask={addTask}/>
            <TaskList tasksList={tasksList} 
            editTask={editTask}
            deleteTask={deleteTask}
            incompletedTasks={incompletedTasks}
            />
            <Footer />
        </main>
    );
};