import React from 'react';

const Photos = () => {
  // Your actual photos - what a collection!
  const photos = [
    {
      src: "/images/architecture.jpg",
      caption: "when you accidentally take a decent photo",
      location: "was artistic"
    },
    {
      src: "/images/coffee.jpg",
      caption: "essential fuel ",
      location: "survival mode"
    },
    {
      src: "/images/coffeeshop.jpg",
      caption: "where i pretend to be productive",
      location: "ccd"
    },
    {
      src: "/images/cst.jpg",
      caption: "mumbai architecture flex",
      location: "why not"
    },
    {
      src: "/images/waffles.jpg",
      caption: "it was GOOD",
      location: "no regrets"
    },
    {
      src: "/images/dadarchaupaty.jpg",
      caption: "contemplating life choices by the sea",
      location: "therapy beach"
    },
    {
      src: "/images/elephant.jpg",
      caption: "they looked cute",
      location: "cuties"
    },
    {
      src: "/images/flyingbirds.jpg",
      caption: "birds flying away like my motivation",
      location: "freedom goals"
    },
    {
      src: "/images/lamp.jpg",
      caption: "street light during rain",
      location: "walking with your headphones on"
    },
    {
      src: "/images/marines.jpg",
      caption: "marine drive during sunset ",
      location: "priority check"
    },
    {
      src: "/images/sky.jpg",
      caption: "sky turned pink",
      location: "aesthetic chaos"
    },
    {
      src: "/images/sky2.jpg",
      caption: "another sky photo because why not",
      location: "consistency issues"
    },
    {
      src: "/images/sunrise-landscape.jpg",
      caption: "when nature shows off better than my portfolio",
      location: "humbling experience"
    },
    {
      src: "/images/treebeauty.jpg",
      caption: "tree standing strong like my wifi connection (rarely)",
      location: "resilience inspiration"
    },

    {
      src: "/images/clouds.jpg",
      caption: "sky looked better than my code that day",
      location: "looking up"
    },
  ];

  return (
    <div className="w-full" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
      <h2 className="text-3xl sm:text-4xl font-light mb-6 sm:mb-8 text-neutral-800">
        visual evidence of existence
      </h2>

      <p className="text-neutral-600 mb-8 sm:mb-12 font-light leading-relaxed text-sm sm:text-base">
        random moments captured during existential crises.
        no filter needed when your life is already grainy.
      </p>

      {/* Photo grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-max">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:-rotate-1"
            style={{
              filter: 'sepia(0.3) contrast(1.1) brightness(0.9)',
            }}
          >
            {/* Polaroid-style container */}
            <div className="bg-white p-3 shadow-lg border border-neutral-200 rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.currentTarget.src = `https://picsum.photos/400/300?random=${index + 1}`;
                  }}
                  style={{
                    aspectRatio: 'auto',
                    filter: 'grain(0.5) contrast(1.1)',
                  }}
                />
              </div>

              {/* Polaroid caption area */}
              <div className="pt-3 pb-2">
                <p className="text-neutral-700 text-sm font-light leading-tight mb-1">
                  {photo.caption}
                </p>
                <p className="text-neutral-400 text-xs font-light">
                  {photo.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 sm:my-12 max-w-md mx-auto sm:mx-0">
        <div className="text-center p-4 bg-neutral-100/50 rounded-lg border border-neutral-200">
          <div className="text-xl font-light text-neutral-800 mb-1">19</div>
          <div className="text-xs text-neutral-500">random shots</div>
        </div>
        <div className="text-center p-4 bg-neutral-100/50 rounded-lg border border-neutral-200">
          <div className="text-xl font-light text-neutral-800 mb-1">73%</div>
          <div className="text-xs text-neutral-500">sky obsession</div>
        </div>
        <div className="text-center p-4 bg-neutral-100/50 rounded-lg border border-neutral-200">
          <div className="text-xl font-light text-neutral-800 mb-1">1</div>
          <div className="text-xs text-neutral-500">waffle priority</div>
        </div>
      </div>

      {/* Film grain overlay note */}
      <div className="mt-8 sm:mt-12 p-4 bg-neutral-100/30 border border-neutral-200 rounded-lg">
        <p className="text-neutral-500 text-sm font-light text-center italic leading-relaxed">
          all photos shot on whatever device was closest.
          film grain effect courtesy of my questionable photography skills.
        </p>
      </div>
    </div>
  );
};

export default Photos;