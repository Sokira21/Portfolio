// components/PopupModal.js
import React from 'react';

function PopupModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-[#0e0e0e] text-white rounded-xl p-6 max-w-2xl w-full relative shadow-2xl border border-cyan-400/30">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-cyan-300"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-cyan-400">{item.title}</h2>

        {/* Content: Image and Description */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <img
              src={item.img}
              alt={item.title}
              className="rounded-lg w-full h-auto object-cover shadow-md"
            />
          </div>

          {/* Right: Description */}
          <div className="w-full md:w-1/2">
            <p className="text-gray-300 mb-2">{item.description}</p>

            <div className="mt-4">
              <h3 className="text-cyan-300 text-sm font-semibold mb-1">Technologies used:</h3>
              <ul className="flex flex-wrap gap-2">
                {item.tech.map((tech, i) => (
                  <li
                    key={i}
                    className="bg-cyan-600/20 text-cyan-300 px-2 py-1 text-xs rounded-md border border-cyan-500/30"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupModal;
