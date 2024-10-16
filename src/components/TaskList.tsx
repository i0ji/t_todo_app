import { useState } from 'react';
import { TaskListProps } from 'declarations/declarations';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, toggleTask }: TaskListProps) {
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

    return (
        <div>
            <ul>
                {filteredTasks.map((task) => (
                    <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
                ))}
            </ul>

            <div style={{ marginTop: '20px' }}>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('complet')}>Completed</button>
                <button onClick={() => setFilter('incomplete')}>Incomplete</button>
            </div>
        </div>
    );
};
