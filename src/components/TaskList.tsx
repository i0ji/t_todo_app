import React from 'react';
import { TaskModel } from 'declarations/declarations';
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: TaskModel[];
    toggleTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask }) => {
    const incompleteTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);

    return (
        <div>
            <h2>Incomplete Tasks</h2>
            <ul>
                {incompleteTasks.map(task => (
                    <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
                ))}
            </ul>

            <h2>Completed Tasks</h2>
            <ul>
                {completedTasks.map(task => (
                    <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;