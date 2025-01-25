import React from 'react';

const TestButton = () => {
  return (
    <button 
      onClick={() => alert('¡Funciona!')}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Test Button
    </button>
  );
};

export default TestButton;
