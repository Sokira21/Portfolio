import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // You can use any icon library

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center text-white">
        <div className="text-xl font-bold">My Portfolio</div>

        {/* Hamburger for small screens */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Links for medium+ screens */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><a href="#" className="hover:text-blue-300">Home</a></li>
          <li><a href="#about" className="hover:text-blue-300">About</a></li>
          <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
        </ul>
      </nav>

      {/* Dropdown for small screens */}
      {isOpen && (
        <ul className="md:hidden bg-[#0e0e0e]/90 px-4 py-4 space-y-3 text-center text-sm font-medium text-white">
          <li><a href="#" className="block hover:text-blue-300" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" className="block hover:text-blue-300" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#contact" className="block hover:text-blue-300" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </header>
  );
}

export default Header;
