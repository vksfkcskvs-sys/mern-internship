import React, { useState } from 'react';

const TabsWidget = () => {
  const [active, setActive] = useState('Home');

  return (
    <div className="card">
      <h3>Simple Tabs</h3>
      <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid #ccc', paddingBottom: '8px' }}>
        <button 
          onClick={() => setActive('Home')}
          style={{ background: active === 'Home' ? '#3b82f6' : 'transparent', color: active === 'Home' ? '#fff' : 'inherit' }}
        >
          Home
        </button>
        <button 
          onClick={() => setActive('About')}
          style={{ background: active === 'About' ? '#3b82f6' : 'transparent', color: active === 'About' ? '#fff' : 'inherit' }}
        >
          About
        </button>
      </div>
      <div style={{ padding: '10px 0' }}>
        {active === 'Home' && <p>Welcome to the home tab.</p>}
        {active === 'About' && <p>This is the about tab content.</p>}
      </div>
    </div>
  );
};

export default TabsWidget;