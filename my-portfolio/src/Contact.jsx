
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

function Contact() {
  return (
    <motion.section
      key="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gradient-to-br from-[#212A31] to-[#124E66]"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-[#D3D9D4] lg:text-5xl md:text-3xl sm:text-2xl">Get in Touch</h2>
      <div className="max-w-lg mx-auto bg-[#2E3944]/10 p-8 rounded-lg shadow-lg lg:max-w-2xl lg:p-10 md:max-w-md md:p-6 sm:max-w-[90%] sm:p-4">
        <div className="space-y-6 lg:space-y-8 md:space-y-5 sm:space-y-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 lg:space-x-4"
          >
            <FaEnvelope className="text-2xl text-[#748D92] lg:text-3xl md:text-xl sm:text-lg" />
            <a href="mailto:madubhashinietharushi@gmail.com" className="text-lg text-[#D3D9D4] hover:text-[#748D92] transition-colors duration-200 lg:text-xl md:text-base sm:text-sm">madubhashinietharushi@gmail.com</a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 lg:space-x-4"
          >
            <FaPhone className="text-2xl text-[#748D92] lg:text-3xl md:text-xl sm:text-lg" />
            <a href="tel:+94760223687" className="text-lg text-[#D3D9D4] hover:text-[#748D92] transition-colors duration-200 lg:text-xl md:text-base sm:text-sm">+94760223687</a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 lg:space-x-4"
          >
            <FaGithub className="text-2xl text-[#748D92] lg:text-3xl md:text-xl sm:text-lg" />
            <a href="https://github.com/Madubhashinie" target="_blank" rel="noopener noreferrer" className="text-lg text-[#D3D9D4] hover:text-[#748D92] transition-colors duration-200 lg:text-xl md:text-base sm:text-sm">github.com/Madubhashinie</a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 lg:space-x-4"
          >
            <FaLinkedin className="text-2xl text-[#748D92] lg:text-3xl md:text-xl sm:text-lg" />
            <a href="https://www.linkedin.com/in/tharushi-madubhashinie-0630b1295/" target="_blank" rel="noopener noreferrer" className="text-lg text-[#D3D9D4] hover:text-[#748D92] transition-colors duration-200 lg:text-xl md:text-base sm:text-sm">linkedin.com/in/tharushi-madubhashinie-0630b1295/</a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
