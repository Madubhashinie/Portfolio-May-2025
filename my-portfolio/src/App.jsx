
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import { FaLinkedin, FaGithub, FaTwitter, FaDownload } from 'react-icons/fa'

const navItems = ['Home', 'Skills', 'Projects', 'Contact']

function App() {
  const [activeSection, setActiveSection] = useState('Home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Create refs for each section
  const sectionRefs = {
    Home: useRef(null),
    Skills: useRef(null),
    Projects: useRef(null),
    Contact: useRef(null),
  }

  // Smooth scroll to section
  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(section)
    setIsMenuOpen(false)
  }

  // Intersection Observer to update active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is in view
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          setActiveSection(sectionId.charAt(0).toUpperCase() + sectionId.slice(1)) // Capitalize first letter
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe each section
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    // Cleanup observer on unmount
    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current)
      })
    }
  }, [])

  return (
    <div className="bg-gradient-to-br from-[#212A31] to-[#124E66] text-[#D3D9D4]">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-[#2E3944]/10 backdrop-blur-md border-b border-[#D3D9D4]/20 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#748D92] sm:text-xl">Portfolio</span>
            </div>
            {/* Hamburger Menu Button for Mobile */}
            <div className="sm:flex sm:items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="sm:block md:hidden p-2 text-[#748D92] hover:text-[#D3D9D4] focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
              {/* Nav Items */}
              <div className="hidden sm:flex sm:items-center space-x-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item)}
                    className={`px-4 py-2 rounded-md text-sm font-medium text-[#D3D9D4] ${
                      activeSection === item ? 'bg-[#124E66]' : 'hover:bg-[#748D92]/50'
                    } transition-colors duration-200`}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
              {/* Mobile Menu */}
              <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 right-2 bg-[#2E3944]/10 backdrop-blur-md p-2 rounded-md shadow-lg`}>
                {navItems.map((item) => (
                  <motion.button
                    key={item}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item)}
                    className={`w-full text-left px-3 py-1 rounded-md text-xs font-medium text-[#D3D9D4] ${
                      activeSection === item ? 'bg-[#124E66]' : 'hover:bg-[#748D92]/50'
                    } transition-colors duration-200 mb-1`}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 pt-20 pb-10 sm:pt-16 sm:pb-6">
        <div id="home" ref={sectionRefs.Home}>
          <Home scrollToSection={scrollToSection} />
        </div>
        <div id="skills" ref={sectionRefs.Skills}>
          <Skills />
        </div>
        <div id="projects" ref={sectionRefs.Projects}>
          <Projects />
        </div>
        <div id="contact" ref={sectionRefs.Contact}>
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#212A31] to-[#2E3944] py-8 sm:py-6 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-8 sm:space-x-6">
            <a href="https://www.linkedin.com/in/tharushi-madubhashinie-0630b1295/" target="_blank" rel="noopener noreferrer" className="text-[#748D92] hover:text-[#D3D9D4] transition-all duration-200 transform hover:scale-110">
              <FaLinkedin className="w-8 h-8 sm:w-6 sm:h-6" />
            </a>
            <a href="https://github.com/Madubhashinie" target="_blank" rel="noopener noreferrer" className="text-[#748D92] hover:text-[#D3D9D4] transition-all duration-200 transform hover:scale-110">
              <FaGithub className="w-8 h-8 sm:w-6 sm:h-6" />
            </a>
            <a href="https://x.com/T_Madubhashinie" target="_blank" rel="noopener noreferrer" className="text-[#748D92] hover:text-[#D3D9D4] transition-all duration-200 transform hover:scale-110">
              <FaTwitter className="w-8 h-8 sm:w-6 sm:h-6" />
            </a>
          </div>
          <a
            href="/src/assets/Tharushi_Madubhashinie_CV.pdf"
            download="Tharushi_Madubhashinie_CV.pdf"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#124E66] to-[#2E3944] text-[#D3D9D4] rounded-lg shadow-md hover:from-[#748D92] hover:to-[#2E3944] transition-all duration-200 transform hover:scale-105 sm:px-4 sm:py-2 sm:text-sm"
          >
            <FaDownload className="mr-2 w-5 h-5 sm:w-4 sm:h-4" />
            Download CV
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
