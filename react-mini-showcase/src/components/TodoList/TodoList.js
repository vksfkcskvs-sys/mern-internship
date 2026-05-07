import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([{ id: 1, text: 'Make UI simpler', done: false }]);
  const [newTask, setNewTask] = useState('');

  const handleAdd = () => {
    if (newTask !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (targetId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === targetId) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="card">
      <h3>Todo List</h3>
      <div style={{ display: 'flex', gap: '8px' }}>
        <input 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Add task" 
        />
        <button className="primary" onClick={handleAdd}>Add</button>
      </div>
      <ul style={{ paddingLeft: '20px', margin: '10px 0 0 0' }}>
        {tasks.map(task => (
          <li 
            key={task.id} 
            onClick={() => toggleTask(task.id)}
            style={{ 
              textDecoration: task.done ? 'line-through' : 'none',
              color: task.done ? '#888' : 'inherit',
              cursor: 'pointer',
              marginBottom: '8px'
            }}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;