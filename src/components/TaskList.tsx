import { useState } from 'react';
import { TaskListProps } from 'declarations/declarations';
import TaskItem from './TaskItem';
import styles from "./components.module.scss";


export default function TaskList({
    tasks,
    toggleTask,
    removeCompleteTasks }: TaskListProps) {
    const [filter, setFilter] = useState<'all' | 'complet' | 'incomplete'>('all');

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'complet') {
            return task.completed;
        }
        if (filter === 'incomplete') {
            return !task.completed;
        }
        return true;
    });


    const itemsLeft = tasks.filter(task => !task.completed).length;

    return (
        <section className={styles.taskList}>
            <ul>
                {filteredTasks.map((task) => (
                    <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
                ))}
            </ul>

            <div className={styles.taskListControl}>
                <p>{itemsLeft} item left</p>
                <div>
                    <button onClick={() => setFilter('all')}>All</button>
                    <button onClick={() => setFilter('incomplete')}>Active</button>
                    <button onClick={() => setFilter('complet')}>Completed</button>
                </div>
                <button onClick={() => removeCompleteTasks()}>Clear completed</button>
            </div>
        </section>
    );
};
