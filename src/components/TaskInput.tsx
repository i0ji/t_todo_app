import { TaskInputProps } from 'declarations/declarations';
import React, { useState } from 'react';

export default function TaskInput({ addTask }: TaskInputProps) {
  const [inputValue, setInputValue] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTask(inputValue, completed);
      setInputValue('');
      setCompleted(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="What needs to be done?"
      />
      {/* <label>
        Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
        />
      </label> */}
      <button type="submit">Add Task</button>
      
    </form>
  );
};