import { TaskInput, TaskList } from 'components/index.ts';
import { useTasks } from 'hooks/useTasks';

export default function App() {
  const { tasks, addTask, toggleTask } = useTasks();
  return (
    <div>
      <h1>ToDo App</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
};