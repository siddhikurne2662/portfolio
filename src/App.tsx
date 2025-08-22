import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Thoughts from './pages/Thoughts';
import Photos from './pages/Photos';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'work':
        return <Projects />;
      case 'thoughts':
        return <Thoughts />;
      case 'photos':
        return <Photos />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
      <div className="flex flex-col lg:flex-row">
        {/* Mobile header */}
        <div className="lg:hidden bg-stone-100 border-b border-stone-200 p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-stone-800 font-medium italic">digital whatever</p>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-stone-600 hover:text-stone-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="mt-4 pb-4 border-t border-stone-200 pt-4">
              <nav className="flex flex-col space-y-3">
                {['home', 'work', 'thoughts', 'photos'].map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      setActiveSection(section);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left text-lg font-light transition-all duration-300 ${
                      activeSection === section
                        ? 'text-stone-800 font-medium'
                        : 'text-stone-600 hover:text-stone-700'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>

        {/* Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-stone-50 overflow-y-auto">
          <div className="max-w-4xl mx-auto lg:max-w-2xl lg:mx-0">
            <div
              key={activeSection}
              className="transition-opacity duration-300"
            >
              {renderContent()}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 lg:mt-16 pt-6 lg:pt-8 border-t border-stone-300 max-w-4xl mx-auto lg:max-w-2xl lg:mx-0">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-stone-500 text-sm font-light space-y-4 sm:space-y-0">
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