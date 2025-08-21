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
    <div className="flex-1 p-8 bg-neutral-50 overflow-y-auto" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
      <div className="max-w-2xl">
        {/* intro */}
        <h2 className="text-4xl font-light mb-8 text-neutral-800">
          {displayText}<span className="animate-pulse">|</span>
        </h2>

        <div className="space-y-6 text-lg font-light">
          <p className="text-neutral-600 leading-relaxed">
            engineering student with way too many browser tabs open and a concerning amount of unfinished projects.
            this is where they end up.
          </p>

          <div className="bg-neutral-100 border border-neutral-200 rounded-lg p-6 my-8">
            <p className="text-neutral-700 leading-relaxed italic">
              not a typical portfolio but my personal space. more like a digital record of ideas that seemed
              genius at 2am but questionable in daylight. goto linkedin for professionalism.
            </p>
          </div>

          {/* status */}
          <div className="flex gap-3 my-6">
            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full border border-green-200">
              ● probably online
            </span>
            <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full border border-orange-200">
              definitely procrastinating
            </span>
          </div>

          {/* about section */}
          <div className="border-t border-neutral-200 pt-8 mt-12">
            <h3 className="text-2xl font-light mb-6 text-neutral-800">
              the person behind the mess
            </h3>

            <p className="text-neutral-600 leading-relaxed mb-4">
              started coding because someone said "it's easy money, use ai." spoiler alert: the money part
              was a lie, but the addiction to solving problems at 3am was real.
            </p>

            <p className="text-neutral-600 leading-relaxed mb-6">
              when not staring at screens, probably overthinking design choices or procrastinating the work.
              got tired of the complex 3d ui(s), decided to keep this simple.
            </p>

            {/* skills grid */}
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-neutral-100 border border-neutral-200 rounded-lg p-4">
                <h4 className="text-neutral-800 font-medium mb-3">currently using</h4>
                <div className="space-y-1 text-sm text-neutral-600">
                  <div>react (obviously)</div>
                  <div>tailwind css</div>
                  <div>javascript/typescript</div>
                  <div>git (badly)</div>
                  <div>figma (for procrastination)</div>
                </div>
              </div>

              <div className="bg-neutral-100 border border-neutral-200 rounded-lg p-4">
                <h4 className="text-neutral-800 font-medium mb-3">learning (struggling with)</h4>
                <div className="space-y-1 text-sm text-neutral-600">
                  <div>three.js</div>
                  <div>backend stuff</div>
                  <div>node.js (why is everything async?)</div>
                  <div>proper git workflow</div>
                  <div>saying no to feature requests</div>
                </div>
              </div>
            </div>
          </div>

          {/* timeline */}
          <div className="border-t border-neutral-200 pt-8">
            <h3 className="text-2xl font-light mb-6 text-neutral-800">
              how i ended up here
            </h3>

            <div className="space-y-3 text-base text-neutral-600">
              <div className="flex justify-between items-center">
                <span className="font-medium">2023</span>
                <span className="text-right"> the innocent beginning with html, css, and js</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">2024</span>
                <span className="text-right">built first react project, broke everything twice</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">2025</span>
                <span className="text-right">still here, somehow getting paid for this</span>
              </div>
            </div>
          </div>

          {/* stats */}
          <div className="grid grid-cols-3 gap-4 my-8">
            <div className="text-center p-4 bg-neutral-100 rounded-lg border border-neutral-200">
              <div className="text-2xl font-light text-neutral-800 mb-1">∞</div>
              <div className="text-xs text-neutral-500">unfinished projects</div>
            </div>
            <div className="text-center p-4 bg-neutral-100 rounded-lg border border-neutral-200">
              <div className="text-2xl font-light text-neutral-800 mb-1">3am</div>
              <div className="text-xs text-neutral-500">usual coding time</div>
            </div>
            <div className="text-center p-4 bg-neutral-100 rounded-lg border border-neutral-200">
              <div className="text-2xl font-light text-neutral-800 mb-1">404</div>
              <div className="text-xs text-neutral-500">errors created daily</div>
            </div>
          </div>

          {/* contact */}
          <div className="border-t border-neutral-200 pt-6">
            <h3 className="text-xl font-light mb-4 text-neutral-800">
              find me online (if you must)
            </h3>

            <div className="space-y-2 text-sm text-neutral-600">
              <div className="flex items-center gap-3">
                <span className="text-neutral-500 w-16">email</span>
                <span>probably in my spam folder</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neutral-500 w-16">github</span>
                <span>where my code goes to die</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neutral-500 w-16">linkedin</span>
                <span>exists but i never check it</span>
              </div>
            </div>
          </div>

          {/* footer */}
          <div className="mt-8 p-4 bg-neutral-100/50 border border-neutral-200 rounded-lg">
            <p className="text-neutral-500 text-sm italic text-center">
              built with react, styled with tailwind, powered by my diet coke.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;