import React, { useState, useEffect } from 'react';

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "hey, i'm sid";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-white">
        {displayText}<span className="animate-pulse">|</span>
      </h2>
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">
          engineering student with a browser full of tabs and half-finished projects.
          this site is where some of them land.
        </p>
        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4 my-6">
          <p className="text-gray-300 leading-relaxed">
            this isn't a portfolio in the traditional sense. it's more like a digital notebook
            — part archive, part sandbox.
          </p>
        </div>
        <p className="text-gray-300 leading-relaxed">
          i document what i make, what breaks, and what i learn from it.
        </p>
        <p className="text-gray-300 leading-relaxed">
          unfinished projects, overthought ideas, and the occasional link that actually works
          can be found here.
        </p>
        <div className="mt-8 p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-gray-800 rounded-lg">
          <p className="text-gray-400 text-sm italic">
            built with react, styled with tailwind, inspired by designs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;