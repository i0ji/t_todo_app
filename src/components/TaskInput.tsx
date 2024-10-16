import { TaskInputProps } from 'declarations/declarations';
import React, { useState } from 'react';
import styles from "./components.module.scss";
import arrow from "assets/arrows.png";

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
    <form
      className={styles.taskInput}
      onSubmit={handleSubmit}
    >
      <button type="submit">
        <img src={arrow} alt="Add " />
      </button>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="What needs to be done?"
      />
    </form>
  );
};