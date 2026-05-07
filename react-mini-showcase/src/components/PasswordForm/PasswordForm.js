import React, { useState } from 'react';

const PasswordForm = () => {
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const isLong = password.length >= 6;
  const canSubmit = isLong;

  return (
    <div className="card">
      <h3>Password Check</h3>
      <div style={{ display: 'flex', gap: '8px' }}>
        <input 
          type={show ? "text" : "password"} 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password"
        />
        <button onClick={() => setShow(!show)}>
          {show ? 'Hide' : 'Show'}
        </button>
      </div>
      <p style={{ margin: 0, fontSize: '14px', color: isLong ? '#22c55e' : '#ef4444' }}>
        Must be at least 6 characters
      </p>
      <button 
        className="primary" 
        disabled={!canSubmit}
        style={{ opacity: canSubmit ? 1 : 0.5, cursor: canSubmit ? 'pointer' : 'not-allowed' }}
      >
        Submit
      </button>
    </div>
  );
};

export default PasswordForm;