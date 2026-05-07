import React, { useState } from 'react';

const ToastManager = () => {
  const [showToast, setShowToast] = useState(false);

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  };

  return (
    <div className="card" style={{ position: 'relative' }}>
      <h3>Toast Alert</h3>
      <button className="primary" onClick={triggerToast}>
        Show Message
      </button>
      
      {showToast && (
        <div style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          background: '#10b981',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '4px',
          fontSize: '14px'
        }}>
          Saved!
        </div>
      )}
    </div>
  );
};

export default ToastManager;