import React from 'react';
import { useTasks } from './hooks/useTasks';
import { TaskList, TaskInput } from 'components/index';
import './App.scss';

const App: React.FC = () => {
  const { tasks, addTask, toggleTask } = useTasks();

  return (
    <main>
      <h1>todos</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </main>
  );
};

export default App;