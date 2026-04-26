import React, { useState } from 'react';
import './Styles.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue !== "") {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        done: false
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const toggleStrike = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="feature-box">
      <h3>Todo List</h3>
      <div>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li 
            key={task.id} 
            onClick={() => toggleStrike(task.id)}
            className={task.done ? "strike-through" : ""}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;