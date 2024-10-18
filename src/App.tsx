import { useTasks } from 'hooks/useTasks.ts';
import { TaskList, TaskInput } from 'components/index.ts';
import './App.scss';

export default function App() {
  const { tasks, addTask, toggleTask, removeCompleteTasks } = useTasks();

  return (
    <main>
      <h1>todos</h1>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        removeCompleteTasks={removeCompleteTasks}
      />
    </main>
  );
};

