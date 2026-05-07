import React, { useState } from 'react';

const CharacterCounter = () => {
  const [text, setText] = useState('');
  const maxChars = 50;

  return (
    <div className="card">
      <h3>Character Counter</h3>
      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type here..."
        maxLength={maxChars}
        rows="3"
      />
      <p style={{ color: text.length === maxChars ? '#ef4444' : 'inherit', margin: 0 }}>
        {text.length} / {maxChars}
      </p>
    </div>
  );
};

export default CharacterCounter;