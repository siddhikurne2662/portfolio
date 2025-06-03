import React, { useState } from 'react';

const Thoughts = () => {
  const [selectedThought, setSelectedThought] = useState(0);

  const thoughts = [
    {
      title: "getting active",
      content: "decided to start bringing wierd ideas to life. like hating spotify bringing too much ads, so building a simple music player that plays by searching your songs and creating playlist.",
      date: "may 2025",
      tags: ["music", "mindset"]
    },
    {
      title: "ai and creativity",
      content: "using ai doesn't make you less creative. it's like having a really smart rubber duck that occasionally gives good suggestions instead of just listening to you ramble.",
      date: "april 2025",
      tags: ["ai", "creativity", "tools"]
    },
    {
      title: "imposter syndrome",
      content: "everyone talks about imposter syndrome, but what about the opposite? that moment when you fix a bug on the first try and think 'maybe i actually know what i'm doing.' spoiler: you don't.",
      date: "march 2025",
      tags: ["psychology", "development"]
    },
    {
      title: "the art of procrastination",
      content: "procrastination isn't laziness, it's a complex coping mechanism. like when you spend 3 hours optimizing your code instead of writing the actual feature. clearly, you're just preparing for success.",
      date: "february 2025",
      tags: ["productivity", "humor"]
    },

    {
      title: "learning in public",
      content: "started sharing my failures online. turns out people relate more to 'here's how i broke everything' than 'here's my perfect solution.' vulnerability is accidentally good marketing.",
      date: "january 2025",
      tags: ["learning", "community"]
    },
    {
      title: "the psychology of code reviews",
      content: "code reviews reveal more about personality than technical skill. some people are therapists ('this looks great, maybe we could try...'), others are surgeons ('line 47: delete this').",
      date: "december 2024",
      tags: ["psychology", "teamwork"]
    },
  ];


interface TagColors {
  [key: string]: string;
}

const getTagColor = (_tag: string): string => {
  return 'bg-gray-700/20 text-gray-300 border-gray-600';
};


  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-white">random thoughts</h2>
      <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mb-8"></div>

      <p className="text-gray-300 mb-8">
        brain dumps that seemed worth writing down at the time. mostly observations about code, people, and the weird intersection of both.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {thoughts.map((thought, index) => (
          <button
            key={index}
            onClick={() => setSelectedThought(index)}
            className={`text-left p-4 rounded-lg transition-all duration-200 ${
              selectedThought === index
                ? 'bg-gray-900/50 border border-gray-700 scale-105'
                : 'bg-gray-900/20 border border-gray-800 hover:bg-gray-900/30 hover:scale-102'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-white font-medium text-sm">{thought.title}</h3>
              <span className="text-gray-500 text-xs whitespace-nowrap ml-2">{thought.date}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {thought.tags.map(tag => (
                <span
                  key={tag}
                  className={`text-xs px-2 py-0.5 rounded-full border ${getTagColor(tag)}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-white font-medium text-lg">{thoughts[selectedThought].title}</h3>
          <span className="text-gray-500 text-sm">{thoughts[selectedThought].date}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {thoughts[selectedThought].tags.map(tag => (
            <span
              key={tag}
              className={`text-xs px-2 py-1 rounded-full border ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <blockquote className="text-gray-300 leading-relaxed italic text-base border-l-2 border-purple-500 pl-4">
          "{thoughts[selectedThought].content}"
        </blockquote>

        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-gray-500 text-xs">
            thought {selectedThought + 1} of {thoughts.length} • click cards above to switch
          </p>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-900/20 border border-gray-800 rounded-lg">
        <p className="text-gray-500 text-sm text-center">
          more thoughts brewing in the drafts folder...
        </p>
        <p className="text-gray-600 text-xs text-center mt-1">
          mostly half-formed ideas and 3am realizations
        </p>
      </div>
    </div>
  );
};

export default Thoughts;