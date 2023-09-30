import React, { useEffect, useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  // Load the saved value from localStorage when the component mounts
  useEffect(() => {
    const savedValue = localStorage.getItem('todoInputValue');
    if (savedValue) {
      setValue(savedValue);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue('');

      // Save the current value to localStorage
      localStorage.setItem('todoInputValue', value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="What is the task today?"
      />
      <button type="submit"   className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
