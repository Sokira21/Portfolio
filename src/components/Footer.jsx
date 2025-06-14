// components/Footer.js
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter, FaEnvelope } from "react-icons/fa6";

function Footer() {
  return (

    <section id="contact">
    <footer className="bg-[#0e0e0e] text-white px-6 py-12 border-t border-cyan-400/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">Send me an email</h2>
          <form
            action="https://formspree.io/f/mdkzznga" 
            method="POST"
            className="space-y-4"
            >
            <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full bg-[#1a1a1a] border border-cyan-400/20 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full bg-[#1a1a1a] border border-cyan-400/20 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                required
            />
            <textarea
                name="message"
                rows="4"
                placeholder="Your message"
                className="w-full bg-[#1a1a1a] border border-cyan-400/20 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                required
            ></textarea>

            <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md shadow-md transition"
            >
                Send
            </button>
        </form>

        </div>

        {/* Social Links */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-cyan-400 mb-4">Follow me</h2>
            <div>
                <img
                    src="/pic1.jpg"
                    alt="Your picture"
                    className="w-50 h-50 object-cover object-bottom rounded-full border-4 border-cyan-400 shadow-md hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="flex gap-4 mt-5">
              <a href="https://www.facebook.com/aldrin.robosa.2024" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-cyan-300 hover:text-cyan-500 text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/jake-aldrin-robosa-91890b261/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-cyan-300 hover:text-cyan-500 text-xl" />
              </a>
              <a href="https://www.instagram.com/aglet_865/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-cyan-300 hover:text-cyan-500 text-xl" />
              </a>
              <a href="https://x.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="text-cyan-300 hover:text-cyan-500 text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Centered copyright */}
      <div className="mt-8 text-center">
        <p className="text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Jake Aldrin Robosa — robosajakealdrin@gmail.com. All rights reserved.
        </p>
      </div>
    </footer>
    </section>
    
  );
}

export default Footer;
