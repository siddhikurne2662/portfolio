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

  const sections = ['home', 'work', 'thoughts', 'photos'];

  return (
    <div className="w-64 p-8 bg-stone-100 h-screen border-r border-stone-200" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
      <div className="mb-12">
        <div className="text-sm text-stone-600 space-y-1">
          <p className="italic font-medium">digital whatever</p>
          <p className="text-xs text-stone-500">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>

      <nav className="space-y-6">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`block text-lg font-light transition-all duration-300 ${
              activeSection === section
                ? 'text-stone-800 translate-x-2 font-medium scale-105'
                : 'text-stone-600 hover:text-stone-700 hover:translate-x-1'
            }`}
          >
            {section}
          </button>
        ))}
      </nav>

      <div className="mt-16 text-sm text-stone-500">
        <p className="italic">chronically caffeinated</p>
        <p className="text-xs mt-2 not-italic text-stone-400">& overthinking everything fr</p>
      </div>
    </div>
  );
};

export default Navigation;