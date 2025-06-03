
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Thoughts from './pages/Thoughts';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
  switch (activeSection) {
    case 'home':
      return <Home />;
    case 'about':
      return <About />;
    case 'projects':
      return <Projects />;
    case 'thoughts':
      return <Thoughts />;
    default:
      return <Home />;
  }
};

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="flex">
        {/* Left side - Navigation */}
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Right side - Content */}
        <div className="w-2/3 p-8">
          <div className="max-w-4xl">
            <div
              key={activeSection}
              className="animate-in fade-in duration-300"
            >
              {renderContent()}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex justify-between items-center text-gray-500 text-sm">
              <p>built with caffeine and questionable decisions</p>
             <div className="flex space-x-4">
  <a
    href="https://github.com/siddhikurne2662"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer hover:text-white transition-colors text-gray-400"
  >
    github
  </a>
  <a
    href="mailto:siddhi.s.kurne@gmail.com"
    className="cursor-pointer hover:text-white transition-colors text-gray-400"
  >
    email
  </a>
  <a
    href="https://www.linkedin.com/in/siddhikurne"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer hover:text-white transition-colors text-gray-400"
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