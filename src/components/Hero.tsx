import dynamic from 'next/dynamic';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Dynamically import the Hero component with no SSR
const Hero = dynamic(() => Promise.resolve(() => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white overflow-hidden">
      {/* Animated background circles */}
      <div style={{ position: 'absolute', top: '-8rem', left: '-8rem', width: '24rem', height: '24rem' }} className="bg-blue-500/20 rounded-full blur-3xl">
        <motion.div
          style={{ width: '100%', height: '100%' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
      </div>
      <div style={{ position: 'absolute', bottom: '-8rem', right: '-8rem', width: '24rem', height: '24rem' }} className="bg-purple-500/20 rounded-full blur-3xl">
        <motion.div
          style={{ width: '100%', height: '100%' }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
      </div>

      {/* Profile image */}
      <div className="mb-6 z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/profile.png"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-400 shadow-lg object-cover"
          />
        </motion.div>
      </div>

      {/* Name and title */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
          Amarnath Kaushik
        </h1>
      </motion.div>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <h2 className="text-xl md:text-2xl font-semibold text-blue-300 mt-2">
          Full Stack Developer
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <p className="text-center max-w-xl text-gray-300 mt-4">
          Creating digital experiences through clean code and creative solutions. Specializing in building modern web applications with cutting edge technologies.
        </p>
      </motion.div>

      {/* Social icons */}
      <div className="flex space-x-6 mt-6 z-10">
        <a href="https://github.com/Amarnath001" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-10 h-10 hover:text-blue-400 transition" />
        </a>
        <a href="https://linkedin.com/in/amarnathkaushik" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-10 h-10 hover:text-blue-400 transition" />
        </a>
      </div>

      {/* Game-style buttons */}
      <div className="flex space-x-4 mt-8 z-10">
        <motion.div whileHover={{ scale: 1.08 }}>
          <a
            href="#about"
            className="px-8 py-3 bg-pink-500 rounded-lg font-semibold hover:bg-pink-600 transition shadow-lg text-white text-lg"
          >
            Start
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.08 }}>
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-700 rounded-lg font-semibold hover:bg-blue-800 transition shadow-lg text-white text-lg"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}), { ssr: false });

export default Hero; 