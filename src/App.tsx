import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import emailjs from "emailjs-com"; // or "@emailjs/browser" depending on your setup
import { FormEvent } from "react";
import pics from "./assets/profilepic.jpg";
import pjtimg from "./assets/download.jpg";
import resume from "./assets/INDRAJIT_ATS_RESUME.pdf";
import { 
  Sun, 
  Moon, 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Send,
  Code2,
  User,
  Home,
  Briefcase,
  MessageSquare,
  GraduationCap,
  Trophy,
  Heart,
  Calendar
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  emailjs
    .sendForm(
      import.meta.env.VITE_SERVICE_ID as string,
      import.meta.env.VITE_TEMPLATE_ID as string,
      e.currentTarget,
      import.meta.env.VITE_PUBLIC_KEY as string
    )
    .then((result) => {
      alert("Message Sent!");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch(() => alert("Oops! Something went wrong. Please try again."));
};

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navbar */}
      <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">Portfolio</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="home" smooth={true} duration={500} className="nav-link cursor-pointer">
                <Home size={20} className="inline mr-1" /> Home
              </Link>
              <Link to="about" smooth={true} duration={500} className="nav-link cursor-pointer">
                <User size={20} className="inline mr-1" /> About
              </Link>
              <Link to="education" smooth={true} duration={500} className="nav-link cursor-pointer">
                <GraduationCap size={20} className="inline mr-1" /> Education
              </Link>
              <Link to="projects" smooth={true} duration={500} className="nav-link cursor-pointer">
                <Briefcase size={20} className="inline mr-1" /> Projects
              </Link>
              <Link to="skills" smooth={true} duration={500} className="nav-link cursor-pointer">
                <Code2 size={20} className="inline mr-1" /> Skills
              </Link>
              <Link to="achievements" smooth={true} duration={500} className="nav-link cursor-pointer">
                <Trophy size={20} className="inline mr-1" /> Achievements
              </Link>
              <Link to="hobbies" smooth={true} duration={500} className="nav-link cursor-pointer">
                <Heart size={20} className="inline mr-1" /> Hobbies
              </Link>
              <Link to="contact" smooth={true} duration={500} className="nav-link cursor-pointer">
                <MessageSquare size={20} className="inline mr-1" /> Contact
              </Link>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-8">
            <img
              src= {pics}
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-indigo-500"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">INDRAJIT KS</h1>
          <p className="text-xl md:text-2xl text-indigo-500 mb-8">MCA Student & Aspiring Software Developer</p>
          <div className="flex justify-center space-x-4">
            <a href="#contact" className="bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition-colors">
              Get in Touch
            </a>
            <a href={resume} download className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-300 transition-colors">
              Download CV
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="space-y-6 text-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
                  <ul className="space-y-3">
                    <li>
                      <span className="font-medium">Name:</span> Indrajit KS
                    </li>
                    <li>
                      <span className="font-medium">Date of Birth:</span> November 7, 2002
                    </li>
                    <li>
                      <span className="font-medium">Location:</span> Avinashi, Tirupur.
                    </li>
                    <li>
                      <span className="font-medium">Email:</span> indrajitksofficial@gmail.com
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Career Objectives</h3>
                  <p>
                  Aspiring software developer with a strong foundation in computer science, holding a 
                  B.Sc. in Information Technology and currently pursuing an MCA. Passionate about problem
                  solving, software development, and emerging technologies. Seeking an opportunity to apply my 
                  technical skills and analytical mindset in a dynamic environment to contribute effectively to 
                  projects while continuously learning and growing.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="space-y-8">
            {[
              {
                degree: "Master of Computer Applications (MCA)",
                institution: "Kumaraguru College Of Technology",
                year: "2024 - Present",
                grade: "7.21 CGPA"
              },
              {
                degree: "Bachelor of Science in Information Technology",
                institution: "Dr NGP Arts and Science College",
                year: "2020 - 2023",
                grade: "7.37 CGPA"
              },
              {
                degree: "Higher Secondary",
                institution: "Sri Hayakgrevar Vidhyalaya Matric Higher Secondary School ",
                year: "2020",
                grade: "71%"
              }
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-md`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-indigo-500">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{edu.year}</p>
                    <p className="font-medium">{edu.grade}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Utility Tool for Offline Steganography and Cyber Forensics',
                description: 'Developed a tool to securely hide and extract data within digital images using steganography techniques.',
                image: pjtimg,
                tech: ['React', 'Node.js', 'MongoDB']
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                  { /*  <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-500 hover:text-indigo-600"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-500 hover:text-indigo-600"
                    >
                      Demo
                    </a>*/ }
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: 'HTML', level: 90 },
              { name: 'CSS', level: 85 },
              { name: 'JavaScript', level: 85 },
              { name: 'React', level: 70 },
              { name: 'Node.js', level: 70 },
              { name: 'MongoDB', level: 70 },
              { name: 'Python', level: 65 },
              { name: 'Git', level: 60 },
              { name: 'C', level: 75 }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}
              >
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Achievements & Certifications</h2>
          <div className="space-y-8">
            {[
              {
                title: "Automation Techniques in RPA",
                organization: "Coursera",
                date: "2025",
                description: " an online non-credit course authorized by UiPath"
              },
              {
                title: " Digital Product Management: Modern Fundamentals",
                organization: "Coursera",
                date: "2025",
                description: "an online non-credit course authorized by University of Virginia"
              }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{achievement.title}</h3>
                    <p className="text-indigo-500">{achievement.organization}</p>
                    <p className="mt-2">{achievement.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{achievement.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hobbies & Interests</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Photography",
                icon: "📸",
                description: "Capturing moments and landscapes"
              },
              {
                name: "Traveling",
                icon: "✈️",
                description: "Exploring new places and cultures"
              },
              {
                name: "Gaming",
                icon: "🎮",
                description: "Strategy and Shooting games"
              },
              {
                name: "Cricket",
                icon: "🏏",
                description: "Aspiring professional cricketer"
              }
            ].map((hobby, index) => (
              <motion.div
                key={hobby.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md text-center`}
              >
                <div className="text-4xl mb-4">{hobby.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{hobby.name}</h3>
                <p className="text-sm text-gray-500">{hobby.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6" onSubmit={handleSubmit} >
                <div>
                  <label className="block mb-2">Name</label>
                  <input
                    type="text" name="name"
                    className={`w-full px-4 py-2 rounded-lg ${
                      darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
                    } border focus:ring-2 focus:ring-indigo-500`}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block mb-2">Email</label>
                  <input
                    type="email" name="email"
                    className={`w-full px-4 py-2 rounded-lg ${
                      darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
                    } border focus:ring-2 focus:ring-indigo-500`}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  
                </div>
                <div>
                  <label className="block mb-2">Message</label>
                  <textarea
                    rows={4} 
                    className={`w-full px-4 py-2 rounded-lg ${
                      darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
                    } border focus:ring-2 focus:ring-indigo-500`}
                    name="message"
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form> 
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <Mail size={24} className="text-indigo-500" />
                <a href="mailto:indrajitksofficial@gmail.com">indrajitksofficial@gmail.com</a>
              </div>
              <div className="flex items-center space-x-4">
                <Github size={24} className="text-indigo-500" />
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  github.com/Indra9078
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Linkedin size={24} className="text-indigo-500" />
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/indrajit-ks-84818a215 
                </a>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <p>Avinashi, Tirupur</p>
                <p className="mt-2">Available for remote work worldwide</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Indrajit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;