
import { motion } from 'framer-motion'

const skills = [
  { name: "Java", icon: "https://www.vectorlogo.zone/logos/java/java-icon.svg", type: "image" },
  { name: "Python", icon: "https://www.vectorlogo.zone/logos/python/python-icon.svg", type: "image" },
  { name: "HTML", icon: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg", type: "image" },
  { name: "CSS", icon: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg", type: "image" },
  { name: "JavaScript", icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg", type: "image" },
  { name: "PHP", icon: "https://www.vectorlogo.zone/logos/php/php-icon.svg", type: "image" },
  { name: "MySQL", icon: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg", type: "image" },
  { name: "SQLite", icon: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg", type: "image" },
  { name: "MongoDB", icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg", type: "image" },
  { name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", type: "image" },
  { name: "GitHub", icon: "https://www.vectorlogo.zone/logos/github/github-icon.svg", type: "image" },
  { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", type: "image" },
  { name: "Figma", icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg", type: "image" },
  { name: "VS Code", icon: "https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg", type: "image" },
  { name: "IntelliJ", icon: "https://www.vectorlogo.zone/logos/jetbrains/jetbrains-icon.svg", type: "image" },
  { name: "React", icon: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg", type: "image" },
  { name: "Vite", icon: "https://vitejs.dev/logo.svg", type: "image" },
  { name: "Node.js", icon: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg", type: "image" },
  { name: "Spring Boot", icon: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg", type: "image" },
]

function Skills() {
  return (
    <motion.section
      key="skills"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gradient-to-b from-[#212A31] to-[#124E66]"
    >
      <h2 className="text-5xl font-extrabold text-center mb-12 text-[#D3D9D4] md:text-4xl sm:text-3xl">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto px-4 sm:gap-4 sm:px-2">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.15, rotate: 5, boxShadow: "0 10px 20px rgba(18, 78, 102, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: skills.indexOf(skill) * 0.1 }}
            className="flex flex-col items-center p-6 rounded-2xl bg-[#2E3944]/20 backdrop-blur-md border border-[#748D92]/30 hover:bg-[#124E66]/30 transition-all duration-300 ease-out transform hover:-translate-y-2 sm:p-4"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 mb-4 object-contain sm:w-12 sm:h-12 sm:mb-2"
            />
            <span className="text-lg font-semibold text-center text-[#D3D9D4] bg-gradient-to-r from-[#748D92] to-[#D3D9D4] bg-clip-text sm:text-base">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills
