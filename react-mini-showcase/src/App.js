import React, { useState } from 'react';
import './App.css';
import CharacterCounter from './components/CharacterCounter';
import PasswordForm from './components/PasswordForm';
import ProductCard from './components/ProductCard';
import TabsWidget from './components/TabsWidget';
import ToastManager from './components/ToastManager';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'app dark' : 'app light'}>
      <div className="container">
        <header className="header">
          <h1>My React Projects</h1>
          <ThemeToggle isDark={isDarkMode} onToggle={toggleTheme} />
        </header>
        
        <div className="card-grid">
          <CharacterCounter />
          <PasswordForm />
          <ProductCard />
          <TabsWidget />
          <TodoList />
          <ToastManager />
        </div>
      </div>
    </div>
  );
}

export default App;