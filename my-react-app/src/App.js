import React, { useState } from 'react';
import CharacterCounter from './CharacterCounter';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app dark' : 'app light'}>
      <h2>React UI Practice Project</h2>
      <button onClick={toggleTheme}>Toggle Dark Mode</button>
      <div className="components-wrapper">
        <CharacterCounter />
        <TodoList />
      </div>
    </div>
  );
}

export default App;