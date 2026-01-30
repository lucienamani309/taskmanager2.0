import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/taskList";

//Composant pour afficher l'integralité des râches
export const TaskContainer = () => {
    return (
        <main>
            <Header />
            <TaskInput />
            <TaskList />
            <Footer />
        </main>
    );
};