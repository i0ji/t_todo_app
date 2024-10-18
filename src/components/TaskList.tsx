import { useState } from 'react';
import TaskItem from './TaskItem';
import styles from "./components.module.scss";


export default function TaskList({
    tasks,
    toggleTask,
    removeCompleteTasks }: TaskListProps) {
    const [filter, setFilter] = useState<TaskStatusModel>('all');
    const [activeFilter, setActiveFilter] = useState('all');

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

    const handleFilterChange = (filter: TaskStatusModel) => {
        setActiveFilter(filter);
        setFilter(filter);
    };

    return (
        <>
            <section className={styles.taskList}>
                <ul>
                    {filteredTasks.map((task) => (
                        <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
                    ))}
                </ul>


            </section>
            <div className={styles.taskListControl}>
                <p>{itemsLeft} item left</p>
                <div>
                    <button
                        onClick={() => handleFilterChange('all')}
                        className={activeFilter === 'all' ? styles.active : ''}
                    >
                        All
                    </button>
                    <button
                        className={activeFilter === 'incomplete' ? styles.active : ''}
                        onClick={() => handleFilterChange('incomplete')}
                    >
                        Active
                    </button>
                    <button
                        className={activeFilter === 'complet' ? styles.active : ''}
                        onClick={() => handleFilterChange('complet')}
                    >
                        Completed
                    </button>
                </div>
                <button onClick={() => removeCompleteTasks()}>Clear completed</button>
            </div>
        </>
    );
};