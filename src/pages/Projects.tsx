import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "IMDb Clone",
      description: "My first React project - built a movie database that kinda works when the API feels like cooperating. Learned why error handling exists.",
      date: "Feb 2025",
      tags: ["React", "Tailwind", "API Integration"],
      link: "https://sidsmoviedb.netlify.app",
      status: "live",
      tech: "Built with React and styled with Tailwind. Uses TMDB API for movie data. Features search, filtering, and responsive design."
    },
    {
      id: 2,
      title: "Reelabs India",
      description: "E-commerce site that taught me more about client demands than js. Still proud of the product carousel though.",
      date: "Feb 2024",
      tags: ["React", "Tailwind", "E-commerce"],
      link: "https://siddhikurne2662.github.io/ReeLabs/",
      status: "archived",
      tech: "Full e-commerce interface with product catalog, cart functionality, and payment integration mockup."
    },
    {
      id: 3,
      title: "Pristine Pads",
      description: "Where I currently break things professionally. The homepage animation took me 3 days to get right (it's still wonky on mobile).",
      date: "April 2025",
      tags: ["HTML", "CSS", "JavaScript", "Accessibility"],
      link: "https://pristinepads.in",
      status: "live",
      tech: "Custom HTML/CSS with focus on accessibility and performance. Vanilla JavaScript for interactions."
    },
    {
      id: 4,
      title: "SyncTwin",
      description: "My 'oh shoot we need 3D' project. Took 6 intense hours to sync the 3D car and that's about as far as I got before Three.js broke my brain.",
      date: "March 2025",
      tags: ["Three.js", "JavaScript", "WebGL"],
      link: "https://github.com/siddhikurne2662/SyncTwin",
      status: "paused",
      tech: "3D car visualization with synchronized animations. Uses Three.js for WebGL rendering and custom shaders."
    },
    {
      id: 5,
      title: "Zynk AI Chatbot",
      description: "Built an AI that mostly just tells dad jokes. Occasionally helpful, always embarrassing.",
      date: "Jan 2025",
      tags: ["AI", "NLP", "Machine Learning"],
      link: "https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/18/16/20250318164624-ZIULMKM9.json",
      status: "live",
      tech: "Built using Botpress platform with custom NLP training and conversation flows."
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-white">things i've built</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mb-4"></div>
      <p className="text-gray-300 text-lg leading-relaxed mb-10">
        some worked, some didn't. all taught me something (usually patience). maybe lowered my anger issues.
      </p>

      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`group transition-all duration-300 cursor-pointer ${
              selectedProject === project.id ? 'scale-102' : 'hover:scale-101'
            }`}
            onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
          >
            <div className="p-6 bg-gray-900/30 border border-gray-800 rounded-lg hover:bg-gray-900/50">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-normal text-white">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition-colors flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.title}
                        <span className="text-purple-400 text-sm">↗</span>
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === 'live' ? 'bg-green-900/30 text-green-400 border border-green-800' :
                    project.status === 'paused' ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800' :
                    'bg-gray-700 text-gray-400 border border-gray-600'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <span className="text-sm text-gray-400 whitespace-nowrap">
                  {project.date}
                </span>
              </div>

              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {selectedProject === project.id && (
                <div className="mt-4 pt-4 border-t border-gray-700 space-y-3 animate-in fade-in duration-200">
                  <div>
                    <h4 className="text-white font-medium mb-2">Technical details:</h4>
                    <p className="text-gray-400 text-sm">
                      {project.tech}
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-2 text-gray-500 text-xs">
                {selectedProject === project.id ? 'click to collapse' : 'click for more details'}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-8 text-center">
        <div className="bg-gray-900/20 border border-gray-800 rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-2">
            much more saved in folders but never made it here
          </p>
          <p className="text-xs text-gray-600">
            ~ 15 unfinished projects, 3 abandoned experiments, 1 actually useful thing
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;