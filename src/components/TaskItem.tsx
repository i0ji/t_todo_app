import React from 'react';
import { TaskItemProps } from 'declarations/declarations';

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTask }) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
            </span>
        </li>
    );
};

export default TaskItem;