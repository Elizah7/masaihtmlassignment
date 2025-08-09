import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [reactTitle, setReactTitle] = useState('Initial React Title');
  const [reactCount, setReactCount] = useState(0);
  const [vanillaCount, setVanillaCount] = useState(0);

  // For vanilla DOM manipulation
  let vanillaTitle = 'Initial Vanilla Title';
  let vanillaUpdates = 0;

  const handleReactTitleChange = () => {
    setReactTitle(`React Title Updated ${reactCount + 1}`);
    setReactCount(reactCount + 1);
  };

  const handleVanillaTitleChange = () => {
    vanillaTitle = `Vanilla Title Updated ${vanillaCount + 1}`;
    document.getElementById('vanilla-title').innerText = vanillaTitle;
    setVanillaCount(vanillaCount + 1);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>React vs Vanilla DOM Updates</h2>

      {/* Vanilla JS */}
      <div style={{ marginBottom: '20px' }}>
        <h3 id="vanilla-title">Initial Vanilla Title</h3>
        <button onClick={handleVanillaTitleChange}>Change Title (Vanilla JS)</button>
        <p>Vanilla DOM Updates: {vanillaCount}</p>
      </div>

      {/* React */}
      <div>
        <h3>{reactTitle}</h3>
        <button onClick={handleReactTitleChange}>Change Title (React)</button>
        <p>React DOM Updates: {reactCount}</p>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
