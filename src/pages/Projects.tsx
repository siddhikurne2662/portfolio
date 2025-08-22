import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "imdb clone",
      description: "turns out making a movie database is harder than watching movies. api calls everywhere.",
      year: "2025",
      link: "https://sidsmoviedb.netlify.app",
      status: "somehow works"
    },
    {
      title: "reelabs india",
      description: "e-commerce site where i learned clients change their mind every 30 minutes.",
      year: "2024",
      link: "https://siddhikurne2662.github.io/ReeLabs/",
      status: "client approved (finally)"
    },
    {
      title: "pristine pads",
      description: "current workplace. homepage animation still breaks on mobile, pretending it's intentional.",
      year: "2025",
      link: "https://pristinepads.in",
      status: "paying the bills"
    },
    {
      title: "synctwin",
      description: "spent 6 hours syncing a 3d car. three.js documentation is written by sadists.",
      year: "2025",
      link: "https://github.com/siddhikurne2662/SyncTwin",
      status: "car goes vroom"
    },
    {
      title: "zynk ai chatbot",
      description: "built an ai that tells dad jokes. accidentally more entertaining than helpful.",
      year: "2025",
      link: "https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/18/16/20250318164624-ZIULMKM9.json",
      status: "dad joke machine"
    }
  ];

  return (
    <div className="w-full" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
      <h2 className="text-3xl sm:text-4xl font-light mb-6 sm:mb-8 text-neutral-800">
        stuff i made
      </h2>

      <p className="text-neutral-600 leading-relaxed mb-8 sm:mb-12 font-light text-sm sm:text-base">
        random projects scattered across the internet like digital breadcrumbs.
      </p>

      {/* Simple grid layout */}
      <div className="space-y-8 sm:space-y-10">
        {projects.map((project, index) => (
          <div key={index} className="group border-b border-neutral-200 pb-6 last:border-b-0">
            {/* Project header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-3">
              <div className="flex-1">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl font-light text-neutral-800 hover:text-neutral-600 transition-colors"
                >
                  {project.title}
                </a>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-neutral-400 text-sm">{project.year}</span>
                  <span className="text-neutral-500 text-sm italic">— {project.status}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-neutral-600 leading-relaxed font-light text-sm sm:text-base max-w-2xl">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      {/* Minimal stats */}
      <div className="mt-12 sm:mt-16 flex justify-center gap-8 sm:gap-12">
        <div className="text-center">
          <div className="text-2xl font-light text-neutral-800 mb-1">5</div>
          <div className="text-xs text-neutral-500">shown</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-light text-neutral-800 mb-1">4</div>
          <div className="text-xs text-neutral-500">need to be completed</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-light text-neutral-800 mb-1">∞</div>
          <div className="text-xs text-neutral-500">abandoned</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-light text-neutral-800 mb-1">2am</div>
          <div className="text-xs text-neutral-500">deploy time</div>
        </div>
      </div>

      {/* Simple footer */}
      <div className="mt-12 sm:mt-16 pt-6 border-t border-neutral-200">
        <p className="text-neutral-500 font-light text-center text-sm italic">
          most of these probably break on internet explorer
        </p>
      </div>
    </div>
  );
};

export default Projects;