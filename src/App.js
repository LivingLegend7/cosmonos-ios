import React, { useState } from 'react';
import { Trophy, User, BookOpen, Star } from 'lucide-react';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('challenge');

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="max-w-md w-full h-[700px] bg-white rounded-3xl overflow-hidden flex flex-col shadow-2xl">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="text-blue-500" size={32} />
            </div>
            <h2 className="text-xl font-bold text-gray-800">{selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)} Screen</h2>
            <p className="text-gray-500 mt-2">Preview Mode</p>
          </div>
        </div>

        <div className="bg-white border-t flex justify-around">
          {[
            { icon: Trophy, label: 'Challenge' },
            { icon: BookOpen, label: 'Study' },
            { icon: User, label: 'Profile' }
          ].map(({ icon: Icon, label }) => (
            <button 
              key={label}
              onClick={() => setSelectedTab(label.toLowerCase())}
              className={`flex flex-col items-center py-3 px-6 ${selectedTab === label.toLowerCase() ? 'text-blue-500' : 'text-gray-400'}`}
            >
              <Icon size={24} />
              <span className="text-xs mt-1">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;