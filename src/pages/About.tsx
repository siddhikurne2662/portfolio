import React, { useState, useEffect } from 'react';

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "the id, ego, and superego walk into a bar...",
    "psychology meets code in weird ways",
    "freud would be confused by my commit messages"
  ];

  const skills = [
    { name: 'React', vibe: 'daily driver', color: 'from-blue-500 to-cyan-500' },
    { name: 'Next.js', vibe: 'production ready', color: 'from-gray-700 to-gray-900'},
    { name: 'Node.js', vibe: 'reliable friend', color: 'from-green-600 to-emerald-600' },
    { name: 'Three.js', vibe: 'when things get spicy', color: 'from-purple-500 to-pink-500' },
    { name: 'Tailwind', vibe: 'css but fun', color: 'from-teal-500 to-green-500',  },
    { name: 'SQL', vibe: 'data speaks', color: 'from-blue-600 to-indigo-600', },
    { name: 'MySQL', vibe: 'old reliable', color: 'from-orange-500 to-yellow-500',  },
    { name: 'PostgreSQL', vibe: 'the real deal', color: 'from-blue-700 to-indigo-700', },
    { name: 'Git', vibe: 'muscle memory', color: 'from-orange-600 to-red-600', },
    { name: 'GitHub', vibe: 'where code lives', color: 'from-gray-600 to-gray-800'},
    { name: 'Figma', vibe: 'design magic', color: 'from-pink-500 to-purple-500',  },
    { name: 'Java', vibe: 'enterprise vibes', color: 'from-red-500 to-orange-500', }
  ];

  const experiences = [
    {
      role: "Frontend Web Developer",
      company: "Pristine Pads",
      period: "March 2025 – present",
      description: "Developed dynamic, responsive web interfaces."
    },
    {
      role: "Beta Tester",
      company: "Yoliday LLP",
      period: "Feb 2025 – March 2025",
      description: "Testing and providing feedback on dynamic, responsive web interfaces."
    },
    {
      role: "Web Developer",
      company: "Varlyq Technologies",
      period: "Feb 2024 – March 2024",
      description: "Dynamic quiz game with interactive UI."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-white">
        not a typical "passionate about tech" story
      </h2>
      <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mb-8"></div>

      <div className="mb-8 p-4 bg-gray-900/30 border border-gray-800 rounded-lg">
        <p className="text-gray-400 text-sm italic transition-all duration-500">
          "{quotes[currentQuote]}"
        </p>
      </div>

      <div className="space-y-6 text-gray-300 mb-16">
        <p className="text-lg leading-relaxed">
          i didn't grow up dreaming of code or startups or silicon valley. engineering kind of happened because it was the expected path — you know how it goes.
        </p>
        <p className="text-lg leading-relaxed">
          psychology always interested me. the way people think, act, react. freud's idea of the id, ego, and superego — the push-pull between instinct, reason, and rules — made sense in a weird way.
        </p>
        <p className="text-lg leading-relaxed">
          most days i'm figuring things out. i've built some projects, broken most, and used ai a lot. not because i'm lazy — just because it helps.
        </p>
        <p className="text-lg leading-relaxed font-medium text-white bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-lg border border-gray-800">
          this site is where i share what i'm building, writing, and thinking. simple.
        </p>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold text-white mb-8">
          where i've been working
        </h3>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="p-4 bg-gray-900/20 border border-gray-800 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className="font-bold text-lg text-white">
                  {exp.role}
                </h4>
                <span className="text-sm text-gray-400">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-400 mb-1">{exp.company}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold text-white mb-8">tools i actually use</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
  key={skill.name}
  className="p-2 bg-gray-900/30 border border-gray-800 rounded-md cursor-pointer transition-all duration-300 hover:bg-gray-900/50 hover:scale-105"
  onMouseEnter={() => setHoveredSkill(skill.name)}
  onMouseLeave={() => setHoveredSkill(null)}
>
  <h4
    className={`font-semibold text-sm mb-1 ${
      hoveredSkill === skill.name
        ? `bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`
        : 'text-white'
    }`}
  >
    {skill.name}
  </h4>
  <p className="text-xs italic text-gray-400">{skill.vibe}</p>
</div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default About;