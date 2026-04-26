import React, { useState } from 'react';
import './Styles.css';

const CharacterCounter = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="feature-box">
      <h3>Character Counter</h3>
      <textarea 
        value={text} 
        onChange={handleChange} 
        rows="4"
      />
      <p>Count: {text.length}</p>
    </div>
  );
};

export default CharacterCounter;