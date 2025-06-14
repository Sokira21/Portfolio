// src/components/LogoMarquee.jsx
import React from 'react';
import './LogoMarquee.css';

const logos = [
  '/skills/html_logo.png',
  '/skills/css_logo.png',
  '/skills/js_logo.webp',
  '/skills/react_logo.png',
  '/skills/tailwind_logo.png',
  '/skills/php_logo.jpg',
  '/skills/mysql_logo.png',
  '/skills/laravel_logo.png',
  '/skills/github_logo.png',
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
