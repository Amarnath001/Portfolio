import dynamic from 'next/dynamic';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Helper to generate random stars
const stars = Array.from({ length: 100 }).map((_, i) => {
  const size = Math.random() * 2 + 1;
  const left = Math.random() * 100;
  const duration = Math.random() * 20 + 10;
  const delay = Math.random() * 20;
  return (
    <div
      key={i}
      className="star"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        animationDuration: `${duration}s`,
        animationDelay: `-${delay}s`,
        top: `-${size * 2}px`,
      }}
    />
  );
});

// Dynamically import the Hero component with no SSR
const Hero = dynamic(() => Promise.resolve(() => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white overflow-hidden">
      <div className="starfield-bg absolute inset-0 z-0">
        {stars}
      </div>
      <div className="z-above-bg w-full flex flex-col items-center">
      {/* Profile image */}
      <div className="mb-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <Image
              src="/profile.png"
              alt="Amarnath Kaushik"
              width={256}
              height={256}
              className="object-cover"
            />
          </div>
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
          Full Stack & Mobile Developer
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <p className="text-center max-w-xl text-gray-200 mt-4 font-medium z-above-bg" style={{ textShadow: '0 2px 8px #000' }}>
          Creating digital experiences through clean code and creative solutions. Specializing in building modern web applications with cutting edge technologies.
        </p>
      </motion.div>

      {/* Social icons */}
      <div className="flex space-x-6 mt-6 z-above-bg">
        <a href="https://github.com/Amarnath001" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-10 h-10 hover:text-blue-400 transition" />
        </a>
        <a href="https://linkedin.com/in/amarnathkaushik" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-10 h-10 hover:text-blue-400 transition" />
        </a>
      </div>

      {/* Game-style buttons */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-8 z-above-bg">
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
        <motion.div whileHover={{ scale: 1.08 }}>
          <a
            href="/Amarnath_Kaushik_Resume.pdf"
            download
            className="px-8 py-3 bg-green-600 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg text-white text-lg"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
      </div>
    </section>
  );
}), { ssr: false });

export default Hero; 