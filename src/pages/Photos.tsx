import React, { useState } from 'react';

const Photos = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

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
    <div className="w-full max-w-7xl mx-auto p-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
      <h2 className="text-3xl sm:text-4xl font-light mb-6 sm:mb-8 text-neutral-800">
        visual evidence of existence
      </h2>

      <p className="text-neutral-600 mb-8 sm:mb-12 font-light leading-relaxed text-sm sm:text-base">
        random moments captured during existential crises.
        no filter needed when your life is already grainy.
      </p>

      {/* Flexible Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max">
        {photos.map((photo, index) => {
          // Create size variations for visual interest
          let sizeClass = "col-span-1"; // default

          // Make some images larger for variety
          if (index === 0 || index === 6 || index === 12) {
            sizeClass = "col-span-2 sm:col-span-2 lg:col-span-2"; // larger images
          } else if (index === 3 || index === 9) {
            sizeClass = "col-span-2 sm:col-span-1 lg:col-span-1"; // mobile wide, desktop normal
          }

          return (
            <div
              key={index}
              className={`${sizeClass} group cursor-pointer`}
              onClick={() => setSelectedPhoto(index as any)}
            >
              <div className="relative bg-white p-3 shadow-md hover:shadow-xl transition-all duration-300 rounded-lg border border-neutral-100 h-fit">
                {/* Image container that adapts to natural aspect ratio */}
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{
                      filter: 'sepia(0.15) contrast(1.05) brightness(0.95)',
                      display: 'block',
                      minHeight: '200px'
                    }}
                    onError={(e) => {
                      e.currentTarget.src = `https://picsum.photos/400/${Math.floor(Math.random() * 300) + 300}?random=${index + 1}`;
                    }}
                  />
                </div>

                {/* Polaroid-style caption */}
                <div className="pt-3 pb-1">
                  <p className="text-neutral-700 text-sm font-light leading-tight mb-1">
                    {photo.caption}
                  </p>
                  <p className="text-neutral-400 text-xs font-light">
                    {photo.location}
                  </p>
                </div>

                {/* Hover overlay for click hint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-3 py-1 rounded-full">
                    <p className="text-xs text-neutral-700 font-medium">view</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stats section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-12 max-w-lg mx-auto">
        <div className="text-center p-4 bg-neutral-50 rounded-lg border border-neutral-200">
          <div className="text-2xl font-light text-neutral-800 mb-1">{photos.length}</div>
          <div className="text-xs text-neutral-500">random shots</div>
        </div>
        <div className="text-center p-4 bg-neutral-50 rounded-lg border border-neutral-200">
          <div className="text-2xl font-light text-neutral-800 mb-1">73%</div>
          <div className="text-xs text-neutral-500">sky obsession</div>
        </div>
        <div className="text-center p-4 bg-neutral-50 rounded-lg border border-neutral-200">
          <div className="text-2xl font-light text-neutral-800 mb-1">1</div>
          <div className="text-xs text-neutral-500">waffle priority</div>
        </div>
        <div className="text-center p-4 bg-neutral-50 rounded-lg border border-neutral-200">
          <div className="text-2xl font-light text-neutral-800 mb-1">∞</div>
          <div className="text-xs text-neutral-500">coffee breaks</div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-white p-6 rounded-lg">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-2 right-2 w-8 h-8 bg-neutral-100 hover:bg-neutral-200 rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-800 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col items-center">
              <img
                src={photos[selectedPhoto].src}
                alt={photos[selectedPhoto].caption}
                className="max-w-full max-h-[70vh] object-contain mb-4"
                onError={(e) => {
                  e.currentTarget.src = `https://picsum.photos/800/600?random=${selectedPhoto + 1}`;
                }}
              />
              <div className="text-center">
                <p className="text-neutral-700 font-light mb-2">{photos[selectedPhoto].caption}</p>
                <p className="text-neutral-500 text-sm">{photos[selectedPhoto].location}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Note */}
      <div className="mt-12 p-6 bg-neutral-50 border border-neutral-200 rounded-lg">
        <p className="text-neutral-500 text-sm font-light text-center italic leading-relaxed">
          all photos shot on whatever device was closest.
          click on any photo to see it properly - like opening a folder but way more dramatic.
        </p>
      </div>
    </div>
  );
};

export default Photos;