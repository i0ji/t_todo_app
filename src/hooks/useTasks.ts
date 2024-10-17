import { useState } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const addTask = (title: string, completed: boolean) => {
    const newTask: TaskModel = {
      id: tasks.length + 1,
      title,
      completed,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeCompleteTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };
  return { tasks, addTask, toggleTask, removeCompleteTasks };
};
