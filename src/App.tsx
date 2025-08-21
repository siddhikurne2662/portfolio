import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Thoughts from './pages/Thoughts';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'work':
        return <Projects />;
      case 'thoughts':
        return <Thoughts />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
      <div className="flex">
        {/* Left side - Navigation */}
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Right side - Content */}
        <div className="flex-1 p-8 bg-stone-50 overflow-y-auto">
          <div className="max-w-2xl">
            <div
              key={activeSection}
              className="transition-opacity duration-300"
            >
              {renderContent()}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-stone-300">
            <div className="flex justify-between items-center text-stone-500 text-sm font-light">
              <p className="italic">built with 2 hours of sleep and mild confusion</p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/siddhikurne2662"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-700 transition-colors"
                >
                  github
                </a>
                <a
                  href="mailto:siddhi.s.kurne@gmail.com"
                  className="hover:text-stone-700 transition-colors"
                >
                  email
                </a>
                <a
                  href="https://www.linkedin.com/in/siddhikurne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-700 transition-colors"
                >
                  linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;