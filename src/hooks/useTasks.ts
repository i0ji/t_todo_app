import { useState } from "react";
import { TaskModel } from "declarations/declarations";

export const useTasks = () => {
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  const addTask = (title: string) => {
    const newTask: TaskModel = {
      id: tasks.length + 1,
      title,
      completed: false,
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

  return { tasks, addTask, toggleTask };
};
