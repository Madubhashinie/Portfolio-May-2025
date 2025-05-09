
import { motion } from 'framer-motion'
import { useState } from 'react'
import villaImg from './assets/villa.jpg'
import ecommerceImg from './assets/ecommerce.jpg'
import legalImg from './assets/legal.jpg'
import healthcareImg from './assets/healthcare.jpg'
import ticketImg from './assets/ticket.jpg'
import lawImg from './assets/law-web.jpg'
import ezuiteImg from './assets/ezuite.jpg'
import sdgsImg from './assets/sdgs.jpg'
import portfolio from './assets/portfolio.jpg'
import estore from './assets/estore.jpg'

const projects = [
  {
    title: 'Small Villa Website Project',
    description: 'A fully responsive website developed to showcase a small hotel or villa, featuring dedicated pages for Home, About Us, Services, and Contact Us with an embedded Google Map. The design emphasizes a modern user experience across mobile, tablet, and desktop devices. Visual highlights include luxury rooms, private pools, and nature views to engage potential guests.',
    githubLink: 'https://github.com/Madubhashinie/villa-website',
    websiteLink: 'https://sea-beach-villa.netlify.app/',
    technologies: 'Vite, React.js, Tailwind CSS, Netlify',
    backgroundImage: villaImg,
  },
  {
    title: 'Full-Stack E-Commerce Website',
    description: 'This full-stack e-commerce website provides a seamless shopping experience for electronic products, featuring secure authentication, efficient order management, and a user-friendly interface.',
    githubLink: 'https://github.com/Madubhashinie/Full-Stack_Project_01',
    websiteLink: '',
    technologies: 'React.js, ShadCN, Node.js, MongoDB, Clerk',
    backgroundImage: ecommerceImg,
  },
  {
    title: 'Legal Guidance Mobile App',
    description: 'Law Way is a team-developed mobile app providing accessible legal guidance for civil law issues. It simplifies legal procedures, offers step-by-step legal advice, and helps users find suitable lawyers. Key features include a chatbot, lawyer booking, and categorized legal pathways, ensuring easy-to-understand legal assistance for marginalized and low-income individuals.',
    githubLink: '',
    websiteLink: '',
    technologies: 'React Native, Spring Boot, MongoDB Atlas, Firebase, RESTful APIs',
    backgroundImage: legalImg,
  },
  {
    title: 'Healthcare Application',
    description: 'This application is used to manage doctor availability and appointment slots, book doctors, and get doctor and patient information.',
    githubLink: 'https://github.com/Madubhashinie/Healthcare-Application',
    websiteLink: '',
    technologies: 'Java, SQLite',
    backgroundImage: healthcareImg,
  },
  {
    title: 'Ticket Booking Application',
    description: 'This application serves as a Real-Time Event Ticketing System, enabling customers to purchase tickets from Ticketpool and allowing vendors to add tickets to the Ticketpool.',
    githubLink: 'https://github.com/Madubhashinie/OOP-CW_w2051854_20231033',
    websiteLink: '',
    technologies: 'React, Spring Boot, Java, MySQL',
    backgroundImage: ticketImg,
  },
  {
    title: 'Marketing website for Law Way Mobile application',
    description: 'The marketing website for the Law Way legal guide mobile app created for the SDGP group project at the University of Westminster.',
    githubLink: 'https://github.com/Madubhashinie/Marketing-website-for-Law-Way-Mobile-application',
    websiteLink: 'https://lawway.netlify.app/',
    technologies: 'Vite, React.js',
    backgroundImage: lawImg,
  },
  {
    title: 'eZuite Dashboard',
    description: 'eZuite Dashboard is a modern, responsive admin dashboard interface designed for enterprise resource planning (ERP) systems. It provides a clean, intuitive user interface for managing various business modules including admin, core, procurement, inventory, manufacturing, sales, finance, assets, services, CRM, and analytics.',
    githubLink: 'https://github.com/Madubhashinie/UI-UX-Developer-Intern-Trainee---Assignment',
    websiteLink: '',
    technologies: 'HTML, CSS, JavaScript',
    backgroundImage: ezuiteImg,
  },
  {
    title: 'Webpage for SDGs Goal-14',
    description: 'A webpage with home page, shop page, image gallery, sitemap created for web development module at university of Westminster (IIT)',
    githubLink: 'https://github.com/Madubhashinie/Webpage-for-SDG-s-Goal14',
    websiteLink: '',
    technologies: 'HTML, CSS, JavaScript',
    backgroundImage: sdgsImg,
  },
  {
    title: 'Portfolio Website',
    description: 'This is my personal portfolio website, showcasing my projects and skills.',
    githubLink: 'https://github.com/Madubhashinie/Portfolio-May-2025',
    websiteLink: 'https://Tharushi-Madubhashinie-Portfolio.netlify.app/',
    technologies: 'Vite, React.js, Tailwind CSS, Netlify',
    backgroundImage: portfolio,
  },
  {
    title: 'E-Store',
    description: 'An electronic goods e-commerce website built using PHP, MongoDB Atlas, Node.js, and Express.js.',
    githubLink: 'https://github.com/Madubhashinie/E-Store',
    websiteLink: '',
    technologies: 'PHP, MongoDB Atlas, Node.js, Express.js',
    backgroundImage: estore,
  },
]

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleClick = (index) => {
    setSelectedProject(selectedProject === index ? null : index)
  }

  return (
    <motion.section
      key="projects"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gradient-to-b from-[#212A31] to-[#124E66]"
    >
      <h2 className="text-5xl font-extrabold text-center mb-12 text-[#D3D9D4] md:text-4xl sm:text-3xl">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 sm:gap-4 sm:px-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            onClick={() => handleClick(index)}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(18, 78, 102, 0.4)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative bg-[#2E3944]/20 backdrop-blur-md border border-[#748D92]/30 rounded-2xl p-6 hover:bg-[#124E66]/30 transition-all duration-300 ease-out transform hover:-translate-y-2 shadow-lg hover:shadow-xl cursor-pointer overflow-hidden sm:p-4"
            style={{
              backgroundImage: `url(${project.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className={`absolute inset-0 transition-opacity duration-300 ${selectedProject === index ? 'bg-[#212A31]/60' : 'bg-[#212A31]/40'}`}></div> {/* Dynamic overlay */}
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-3 text-[#D3D9D4] md:text-xl sm:text-lg"> 
                {project.title}
              </h3>
              <div className="flex space-x-4 mb-3 sm:space-x-2">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D3D9D4] hover:text-[#748D92] transition-colors duration-200 text-sm font-medium sm:text-xs"
                    style={{ textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}
                  >
                    GitHub
                  </a>
                )}
                {project.websiteLink && (
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D3D9D4] hover:text-[#748D92] transition-colors duration-200 text-sm font-medium sm:text-xs"
                    style={{ textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}
                  >
                    Visit Website
                  </a>
                )}
              </div>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={selectedProject === index ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-[#D3D9D4] mb-4 text-sm leading-relaxed md:text-base sm:text-xs">{project.description}</p>
                <p className="text-[#748D92] mb-4 text-xs italic md:text-sm sm:text-xs">Technologies: {project.technologies}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects
