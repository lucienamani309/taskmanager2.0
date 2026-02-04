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

    
    return (
        <main>
            <Header />
            <TaskInput addTask={addTask}/>
            <TaskList />
            <Footer />
        </main>
    );
};