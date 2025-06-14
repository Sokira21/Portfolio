// src/components/LogoMarquee.jsx
import React from 'react';
import './LogoMarquee.css';

const logos = [
  './images/skills/html_logo.png',
  './images/skills/css_logo.png',
  './images/skills/js_logo.webp',
  './images/skills/react_logo.png',
  './images/skills/tailwind_logo.png',
  './images/skills/php_logo.jpg',
  './images/skills/mysql_logo.png',
  './images/skills/laravel_logo.png',
  './images/skills/github_logo.png',
];

export default function LogoMarquee() {
  return (
    <div className="logo-marquee-container mt-10">
      <div className="logo-marquee-track">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className="logo-image"
          />
        ))}
      </div>
    </div>
  );
}
