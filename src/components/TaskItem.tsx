import { TaskItemProps } from 'declarations/declarations';

export default function TaskItem({ task, toggleTask }: TaskItemProps) {
    return (
        <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
            </span>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
            />
        </li>
    );
};
