import { motion } from "framer-motion";

function MainContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
      className="min-h-screen flex items-center justify-center bg-transparent px-4"
    >
      <div className="flex flex-col md:flex-row max-w-6xl w-full mx-auto p-6 gap-6 bg-[#0e0e0e]/60 backdrop-blur-md rounded-2xl border border-gray-700 shadow-xl">
        {/* LEFT: Picture */}
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <img
            src="/pic1.jpg"
            alt="Your picture"
            className="w-full max-h-[500px] object-cover object-bottom rounded-2xl border-4 border-cyan-400 shadow-md hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* RIGHT: Text */}
        <div className="md:w-1/2 w-full flex flex-col justify-center text-white p-6">
          <h2 className="text-4xl font-extrabold mb-6 text-cyan-300 drop-shadow-lg">
            It's me, <span className="text-white">Jake</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            Welcome to my digital space! Here you can explore my latest projects, see what I’m working on, and reach out for collaborations. Feel free to scroll and discover.
          </p>
          <a
            href="#about"
            className="self-start px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-black font-semibold shadow-md transition-all duration-300"
          >
            Learn more ↓
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default MainContent;
