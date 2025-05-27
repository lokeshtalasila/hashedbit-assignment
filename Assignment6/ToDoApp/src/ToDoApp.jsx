import React, { useState } from 'react';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Handle adding new task
  const handleAddTask = () => {
    const trimmedTask = task.trim();
    if (trimmedTask === '') return;

    const updatedTasks = [...tasks, trimmedTask];
    updatedTasks.sort(); // Sort in ascending order
    setTasks(updatedTasks);
    setTask(''); // Clear input
  };

  // Handle deleting a task
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Allow pressing Enter to add a task
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={handleKeyPress}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />
      <button onClick={handleAddTask}>Add</button>

      <ul style={{ marginTop: '20px' }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ marginBottom: '8px' }}>
            {t}
            <button
              onClick={() => handleDeleteTask(index)}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
