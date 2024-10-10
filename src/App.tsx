import React, { useState } from 'react';
import { Send } from 'lucide-react';

function App() {
  const [color, setColor] = useState('#ffffff');

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleSubmit = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id!, { action: 'changeColor', color });
    });
  };

  return (
    <div className="p-4 w-64">
      <h1 className="text-lg font-bold mb-4">Background Color Changer</h1>
      <div className="flex items-center space-x-2">
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          className="w-8 h-8 border border-gray-300 rounded"
        />
        <input
          type="text"
          value={color}
          onChange={handleColorChange}
          className="flex-grow px-2 py-1 border border-gray-300 rounded"
        />
        <button
          onClick={handleSubmit}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}

export default App;