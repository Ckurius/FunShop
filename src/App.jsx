import { useState } from 'react';
import background from './bgcloud.png';
function App() {
  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-100"
      style={{ background: `url(${background})` }}
    >
      <h1 className="text-5xl font-bold text-gray-800 p-5 border-2 border-gray-800 shadow-lg rounded-lg bg-white transform transition-transform duration-300 hover:scale-105">
        Fun Shop - Loading ... !
      </h1>
    </div>
  );
}

export default App;
