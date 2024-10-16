import React, { useState } from 'react';
import { TaskModel } from 'declarations/declarations';
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: TaskModel[];
    toggleTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask }) => {
    const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') {
            return task.completed;
        }
        if (filter === 'incomplete') {
            return !task.completed;
        }
        return true;
    });

    return (
        <div>
            <ul>
                {filteredTasks.map((task) => (
                    <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
                ))}
            </ul>

            <div style={{ marginTop: '20px' }}>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
                <button onClick={() => setFilter('incomplete')}>Incomplete</button>
            </div>
        </div>
    );
};

export default TaskList;
