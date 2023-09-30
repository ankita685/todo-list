import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  const handleToggleComplete = () => {
    toggleComplete(task.id);
  };

  useEffect(() => {
    // Save the updated todo list to local storage whenever it changes
    localStorage.setItem('todos', JSON.stringify(task)); // Replace with your actual todo list state
  }, [task]); // Ensure you replace 'yourTodoListArray' with your actual state variable

  return (
    <div className={`Todo ${task.completed ? 'completed' : ''}`}>
      <p onClick={handleToggleComplete}>
        <span className="task-text">{task.task}</span>
        {task.dueDate && (
          <span className="due-date">
            Due: {task.dueDate.toLocaleDateString()}
          </span>
        )}
      </p>
      <div className="icons">
        <FontAwesomeIcon icon={faPenSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

