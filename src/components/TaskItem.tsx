import styles from "./components.module.scss";

export default function TaskItem({ task, toggleTask }: TaskItemProps) {
    return (
        <li className={styles.taskItem}>

            <label className={styles.checkboxContainer}>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                />
                <span className={styles.checkbox}></span>
            </label>
            <span
                className={task.completed ? styles.taskComplete : ''}
            >
                {task.title}
            </span>

        </li>
    );
};