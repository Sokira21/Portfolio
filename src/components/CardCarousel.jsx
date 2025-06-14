import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';
import './CardCarousel.css';

const slides = [
  {
    title: 'HTML',
    description: 'Semantic and accessible markup, used to structure web content. ',
    image: '/skills/html_logo.png',
  },
  {
    title: 'CSS',
    description: 'Styling web content using Flexbox, Grid, and responsive design techniques.',
    image: '/skills/css_logo.png',
  },
  {
    title: 'JavaScript',
    description: 'Dynamic client-side programming, DOM manipulation, and ES6+ features. Also I am using JavaScript not just for the interactive design but also for the backend',
    image: '/skills/js_logo.webp',
  },
  {
    title: 'React',
    description: 'Component-based UI development, state management, and hooks. Especially with web based projects',
    image: '/skills/react_logo.png',
  },
  {
    title: 'Tailwind CSS',
    description: 'Utility-first CSS framework for fast UI development. Great tool to utilize with React',
    image: '/skills/tailwind_logo.png',
  },
  {
    title: 'PHP',
    description: 'Server-side scripting language for backend development. One of the first web programming language that I learned and had so much fun',
    image: '/skills/php_logo.jpg',
  },
  {
    title: 'MySQL',
    description: 'Relational database management and SQL querying.',
    image: '/skills/mysql_logo.png',
  },
  {
    title: 'Laravel',
    description: 'PHP framework for elegant backend solutions with MVC architecture.',
    image: '/skills/laravel_logo.png',
  },
  {
    title: 'Git & GitHub',
    description: 'Version control and collaboration using Git workflows and repositories.',
    image: '/skills/github_logo.png',
  },
];

export default function CardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center gap-6">
      {/* Swiper Carousel */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="bg-[#121212]/60 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-lg text-white flex flex-col items-center justify-center px-6 py-10"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-40 h-40 object-contain mb-6 rounded-xl shadow-md"
              />
              <span className="text-xl text-cyan-400 font-bold tracking-wide">{slide.title}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Slide Description */}
      <div className="w-full md:w-1/2 bg-[#121212]/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-white shadow-lg">
        <h2 className="text-3xl font-extrabold text-cyan-400 mb-4">{slides[activeIndex].title}</h2>
        <p className="text-lg text-gray-300 leading-relaxed">{slides[activeIndex].description}</p>
      </div>
    </div>
  );
}
