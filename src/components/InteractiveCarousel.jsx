import React, { useState, useEffect } from 'react';
import PopupModal from './PopupModal'; 

function InteractiveCarousel() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      title: 'Portfolio',
      tech: ['React', 'Tailwind', 'Laravel'],
      num: '01',
      img: './projects/portfolio.jpg',
      description: 'A personal portfolio site built using React, styled with Tailwind, and backed by a Laravel API.'
    },
    {
      title: 'Intelligent Crime Mapping In Legazpi City, An Information System',
      tech: ['Python', 'Machine Learning', 'Natural Language Processing', 'MySQL'],
      num: '02',
      img: './projects/crime_mapping.jpg',
      description: 'My College thesis that focus on machine learning and Natural language processing. Utilizing the web scrapper to collect news articles and baed from the collected articles it will be tokenized and be feed to the machine to calculate the accurate Crime rate in Legazpi City in Realtime'
    },
    {
      title: 'Blank Ecommerce',
      tech: ['React', 'Laravel', 'MySQL', 'Ongoing'],
      num: '03',
      img: './projects/blank_ecom.png',
      description: 'An e-commerce platform with basic product browsing, cart, and order management. Still an ongoing project that will utilize react for front-end laravel for backend MySql for database'
    },
    {
      title: 'Jake_AI',
      tech: ['Python', 'Flask', 'Tailwind', 'Ongoing'],
      num: '04',
      img: './projects/Jake_AI.png',
      description: 'A fun project that I will be doing, An AI with my personality'
    }
  ];

  const getZindex = (array, index) =>
    array.map((_, i) => (index === i ? array.length : array.length - Math.abs(index - i)));

  const animate = () => {
    const clampedProgress = Math.max(0, Math.min(progress, 100));
    const newActive = Math.floor((clampedProgress / 100) * (items.length - 1));
    setActive(newActive);
  };

  useEffect(() => {
    const newProgress = (active / (items.length - 1)) * 100;
    setProgress(newProgress);
  }, [active]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const goToPrevious = () => {
    setActive((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  };

  const goToNext = () => {
    setActive((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-transparent font-sans flex items-center justify-center">
      {/* Carousel Container */}
      <div className="relative flex items-end justify-center gap-6">
        {items.map((item, index) => {
          const zIndex = getZindex(items, active)[index];
          const activeOffset = (index - active) / items.length;
          const opacity = zIndex / items.length * 3 - 2;

          return (
            <div key={index} className="flex flex-col items-center">
              <div
                className="carousel-item absolute overflow-hidden bg-black pointer-events-auto select-none rounded-xl shadow-2xl"
                style={{
                  zIndex,
                  width: 'clamp(150px, 30vw, 300px)',
                  height: 'clamp(200px, 40vw, 400px)',
                  margin: 'calc(clamp(200px, 40vw, 400px) * -0.5) 0 0 calc(clamp(150px, 30vw, 300px) * -0.5)',
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0% 100%',
                  transform: `translate(${activeOffset * 800}%, ${activeOffset * 0}%) rotate(${activeOffset * 120}deg)`,
                  transition: 'transform 0.8s cubic-bezier(0, 0.02, 0, 1)',
                  cursor: 'pointer'
                }}
                onClick={() => handleItemClick(item)}
              >
                <div
                  className="absolute z-10 top-0 left-0 w-full h-full"
                  style={{
                    opacity,
                    transition: 'opacity 0.8s cubic-bezier(0, 0.02, 0, 1)'
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 via-transparent to-black/60" />
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover pointer-events-none" />
                  <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
                    {item.tech.map((tech, i) => (
                      <div
                        key={i}
                        className="text-white text-xs bg-cyan-500/90 px-3 py-1 rounded-full backdrop-blur-sm shadow-sm"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                  <div className="absolute text-white top-2.5 left-5 text-4xl font-bold">{item.num}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Text: Title */}
      <div className="absolute bottom-24 w-full text-center pointer-events-none">
        <h2 className="text-white text-2xl font-semibold drop-shadow">{items[active].title}</h2>
      </div>

      {/* Navigation Buttons */}
      <button onClick={goToPrevious} className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-[#0e0e0e]/60 hover:bg-cyan-500/20 border border-cyan-400/30 rounded-xl p-3 backdrop-blur-md transition-all duration-300 shadow-md hover:shadow-cyan-400/40 hover:scale-105">
        <svg width="24" height="24" fill="none" stroke="cyan" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15,18 9,12 15,6" />
        </svg>
      </button>

      <button onClick={goToNext} className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-[#0e0e0e]/60 hover:bg-cyan-500/20 border border-cyan-400/30 rounded-xl p-3 backdrop-blur-md transition-all duration-300 shadow-md hover:shadow-cyan-400/40 hover:scale-105">
        <svg width="24" height="24" fill="none" stroke="cyan" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9,18 15,12 9,6" />
        </svg>
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <PopupModal item={selectedItem} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}

export default InteractiveCarousel;
