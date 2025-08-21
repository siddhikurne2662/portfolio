import React from 'react';

const Work = () => {
  const projects = [
    {
      title: "imdb clone",
      description: "turns out making a movie database is harder than watching movies. api calls everywhere.",
      year: "2025",
      link: "https://sidsmoviedb.netlify.app"
    },
    {
      title: "reelabs india",
      description: "e-commerce site where i learned clients change their mind every 30 minutes.",
      year: "2024",
      link: "https://siddhikurne2662.github.io/ReeLabs/"
    },
    {
      title: "pristine pads",
      description: "current workplace. homepage animation still breaks on mobile, pretending it's intentional.",
      year: "2025",
      link: "https://pristinepads.in"
    },
    {
      title: "synctwin",
      description: "spent 6 hours syncing a 3d car. three.js documentation is written by sadists.",
      year: "2025",
      link: "https://github.com/siddhikurne2662/SyncTwin"
    },
    {
      title: "zynk ai chatbot",
      description: "built an ai that tells dad jokes. accidentally more entertaining than helpful.",
      year: "2025",
      link: "https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/18/16/20250318164624-ZIULMKM9.json"
    }
  ];

  return (
    <div className="flex-1 p-8 bg-neutral-50 overflow-y-auto" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
      <div className="max-w-2xl">
        <h2 className="text-4xl font-light mb-8 text-neutral-800">
          things i've built
        </h2>

        <p className="text-neutral-600 leading-relaxed mb-12 font-light">
          collection of projects that seemed like good ideas at the time.
        </p>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="flex items-baseline gap-4 mb-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-light text-neutral-800 hover:text-neutral-600 transition-colors"
                >
                  {project.title}
                </a>
                <span className="text-neutral-400 text-sm font-light">
                  {project.year}
                </span>
              </div>

              <p className="text-neutral-600 leading-relaxed font-light pl-0">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-neutral-100/50 border border-neutral-200 rounded-lg">
          <p className="text-neutral-500 font-light leading-relaxed text-center">
            probably 20+ other projects sitting in various states of abandonment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;