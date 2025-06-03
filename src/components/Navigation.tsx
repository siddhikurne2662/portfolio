import React, { useState, useEffect } from 'react';

type NavigationProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const sections = ['home', 'about', 'projects', 'thoughts'];

  return (
    <div className="w-1/3 p-8 border-r border-gray-800">
      <div className="sticky top-8">
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
            <span className="text-xs text-green-500">online</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">sid</h1>
          <p className="text-gray-500 text-sm">digital notebook</p>
          <p className="text-gray-600 text-xs mt-1">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>

        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`block w-full text-left px-3 py-2 rounded transition-all duration-200 ${
                activeSection === section
                  ? 'bg-gray-900 text-white translate-x-1'
                  : 'text-gray-400 hover:text-white hover:bg-gray-900/50 hover:translate-x-0.5'
              }`}
            >
              <span className="mr-2">{activeSection === section ? '→' : ' '}</span>
              {section}
            </button>
          ))}
        </nav>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="text-gray-500 text-xs space-y-1">
            <p>status: <span className="text-yellow-500">probably procrastinating</span></p>
            <p>coffee: <span className="text-red-500">empty</span></p>
            <p>projects: <span className="text-blue-400">12 started, 0.5 finished</span></p>
            <p className="pt-2 text-gray-600">last good sleep: 2 months ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;