import { TaskItemProps } from 'declarations/declarations';
import styles from "./components.module.scss";

export default function TaskItem({ task, toggleTask }: TaskItemProps) {
    return (
        <li className={styles.listItem}>
            <label className={styles.customCheckboxContainer}>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                />
                <span className={styles.customCheckbox}></span>
            </label>
            <span
                className={task.completed ? styles.taskComplete : ''}
            >
                {task.title}
            </span>

        </li>
    );
};
