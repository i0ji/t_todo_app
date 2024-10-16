import React from 'react';

import { useTasks } from './hooks/useTasks';
import { TaskList, TaskInput } from 'components/index'

const App: React.FC = () => {
  const { tasks, addTask, toggleTask } = useTasks();

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>ToDo App</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
};

export default App;