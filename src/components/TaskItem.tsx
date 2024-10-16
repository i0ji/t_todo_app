import { TaskItemProps } from 'declarations/declarations';
import styles from "./components.module.scss";

export default function TaskItem({ task, toggleTask }: TaskItemProps) {
    return (
        <li>
            <label className={styles.customCheckboxContainer}>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                />
                <span className={styles.customCheckbox}></span>
            </label>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none'  }}>
                {task.title}
            </span>

        </li>
    );
};
