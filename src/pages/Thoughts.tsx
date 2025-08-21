import React from 'react';

const Thoughts = () => {
  const thoughts = [
    {
      content: "realized i spend more time thinking about what to build than actually building it. maybe the planning phase is just elaborate procrastination with extra steps.",
      date: "july 2025"
    },

    {
      content: "using ai doesn't make you less creative. it's like having a really smart rubber duck that occasionally gives good suggestions.",
      date: "may 2025"
    },
    {
      content: "everyone talks about imposter syndrome, but what about the opposite? that moment when you fix a bug on the first try and think 'maybe i actually know what i'm doing.' spoiler: you don't.",
      date: "april 2025"
    },
    {
      content: "procrastination isn't laziness, it's a complex coping mechanism. like when you spend 3 hours optimizing code instead of writing the actual feature.",
      date: "march 2025"
    },
    {
      content: "started sharing failures online. turns out people relate more to 'here's how i broke everything' than 'here's my perfect solution.'",
      date: "january 2025"
    },
    {
      content: "code reviews reveal more about personality than technical skill. some people are therapists ('this looks great, maybe we could try...'), others are surgeons ('line 47: delete this').",
      date: "november 2024"
    }
  ];

  return (
    <div className="flex-1 p-8 bg-neutral-50 overflow-y-auto" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
      <div className="max-w-2xl">
        <h2 className="text-4xl font-light mb-8 text-neutral-800">
          random thoughts
        </h2>

        <p className="text-neutral-600 mb-12 font-light leading-relaxed">
          brain dumps that seemed worth writing down at the time.
        </p>

        <div className="space-y-8">
          {thoughts.map((thought, index) => (
            <div key={index} className="flex gap-6 border-b border-neutral-200 pb-6 last:border-b-0">
              <span className="text-neutral-400 text-sm font-light mt-1 w-8 flex-shrink-0">
                {index + 1}.
              </span>
              <div>
                <p className="text-neutral-700 leading-relaxed mb-3 font-light">
                  {thought.content}
                </p>
                <span className="text-neutral-400 text-sm font-light">
                  {thought.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-4 bg-neutral-100/50 border border-neutral-200 rounded-lg">
          <p className="text-neutral-500 text-sm font-light text-center">
            most of the thoughts that i forgot
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thoughts;