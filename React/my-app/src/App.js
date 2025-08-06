import React from 'react';

const App = () => {
  const topics = ['React', 'JavaScript', 'CSS'];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Topics to Learn</h2>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
  
};

export default App;
