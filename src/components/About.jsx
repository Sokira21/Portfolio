import { motion } from "framer-motion";
import {useState, useEffect} from "react";

const images = [
  "./images/catc_logo.png",
  "./images/catc_main.png",
  "./images/catc_ext.png"
]

function About() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section id="about">
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
      className="min-h-screen flex flex-col items-center justify-center bg-transparent px-4"
    >
      {/* Heading */}
      <div className="max-w-6xl w-full mx-auto p-6 mb-4">
        <h1 className="text-5xl text-cyan-400 font-extrabold mt-10 tracking-tight drop-shadow-lg">
          About Me
        </h1>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row max-w-6xl w-full mx-auto p-6 gap-6 bg-[#121212]/60 backdrop-blur-sm rounded-2xl border border-gray-700 shadow-lg">
        {/* LEFT: Intro Text */}
        <div className="md:w-1/2 w-full flex flex-col text-white p-4">
          <p className="text-lg leading-relaxed text-gray-300">
            I am <span className="text-cyan-400 font-semibold">Jake Aldrin Robosa</span>, seeking an entry-level position in Information Technology (IT) with a focus on web development. I'm committed to continuous growth and eager to build a long-term career in the tech industry.
          </p>
          <p className="text-lg leading-relaxed text-gray-300 mt-5">I’m primarily based in <span className="text-cyan-400 font-semibold">Legazpi City</span>, but I’m very open to exploring opportunities in other locations. I have a strong passion for adventure and discovering new places.</p>
        </div>

        {/* RIGHT: Personal Touch */}
        <div className="md:w-1/2 w-full flex flex-col justify-start text-white p-4">
          <h2 className="text-3xl font-bold mb-6 text-cyan-300">
            My Education
          </h2>
          <p className="text-lg leading-relaxed text-gray-400">
            I graduated at Computer Arts Techonological College Inc, with a degree of Bachelor of Science in Computer Science (BSCS) on 2024. 
          </p>
          <div className="w-full h-90 rounded-xl overflow-hidden border-4 border-cyan-500 shadow-md mt-4">
            <img 
              src={images[currentImage]} 
              alt="Slideshow"
              className="w-full h-full object-cover object-center transition-opacity duration-500" 
            />
          </div>
          
        </div>
      </div>
    </motion.div>
    </section>

    
  );
}

export default About;
