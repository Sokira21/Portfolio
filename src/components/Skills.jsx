import { motion } from "framer-motion";
import CardCarousel from "./CardCarousel";
import LogoMarquee from "./LogoMarquee";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
      className="min-h-screen flex flex-col items-center justify-center bg-transparent px-4 mt-10"
    >
      {/* Heading */}
      <div className="max-w-6xl w-full mx-auto pt-10 pb-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 tracking-tight drop-shadow-lg">
          My Learning Journey Through Tech
        </h1>
        <p className="mt-2 text-gray-400 text-lg">
          The technologies and tools I've explored so far
        </p>
      </div>

      {/* Carousel Section */}
      <div className="flex flex-col md:flex-row max-w-6xl w-full mx-auto p-6 gap-6 bg-[#121212]/60 backdrop-blur-sm rounded-t-2xl border border-gray-700 border-b-0 shadow-xl">
        <CardCarousel />
      </div>

      {/* Logo Marquee Section */}
      <div className="max-w-6xl w-full mx-auto px-6 pb-10 pt-4 bg-[#121212]/60 backdrop-blur-sm rounded-b-2xl border border-gray-700 border-t-0 shadow-xl">
        <LogoMarquee />
      </div>
    </motion.div>
  );
}

export default Skills;
