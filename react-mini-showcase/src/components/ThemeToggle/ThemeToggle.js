import React from 'react';

const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <button onClick={onToggle} style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;