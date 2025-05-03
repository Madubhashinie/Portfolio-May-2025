
import { motion } from 'framer-motion';
import profile from './assets/profile.jpeg';
import { useEffect, useRef } from 'react';

function Home({ setActiveSection }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(0);

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00ff00';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);

    // Resize canvas on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const newColumns = canvas.width / fontSize;
      drops.length = Math.floor(newColumns);
      drops.fill(0);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.section
      key="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="text-center py-24 relative overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{ opacity: 0.5 }}
      />
      <div className="flex flex-col items-center space-y-8 max-w-[90%] mx-auto relative z-10">
        <motion.img
          src={profile}
          alt="Tharushi Madubhashinie"
          className="w-48 h-48 rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 md:w-40 md:h-40 sm:w-32 sm:h-32"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h1
          className="text-5xl font-bold mb-6 text-white md:text-4xl sm:text-3xl"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Hi, I'm Tharushi Madubhashinie
        </motion.h1>
        <p className="text-xl mb-8 text-gray-200 md:text-lg sm:text-base">
          SOFTWARE ENGINEERING UNDERGRADUATE
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block"
        >
          <button
            onClick={() => setActiveSection('Contact')}
            className="bg-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-400 transition-colors duration-200 md:px-5 md:py-2 sm:px-4 sm:py-2"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Home;
