import { motion } from "framer-motion";
import InteractiveCarousel from "./InteractiveCarousel";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
      className="min-h-screen flex flex-col items-center justify-start py-10 px-4 bg-transparent"
    >
      <div className="max-w-6xl w-full mx-auto p-6 mb-4">
        <h1 className="text-5xl text-cyan-400 font-extrabold mt-10 tracking-tight drop-shadow-lg">
          Projects
        </h1>
      </div>

      <div className="flex flex-col md:flex-row max-w-6xl w-full mx-auto p-6 gap-6 bg-[#121212]/60 backdrop-blur-sm rounded-2xl border border-gray-700 shadow-lg">
        <InteractiveCarousel />
      </div>
    </motion.div>
  );
}

export default Projects;
