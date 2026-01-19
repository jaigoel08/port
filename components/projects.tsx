'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: 'Creating Dimensions',
      description:
        'Developed a MERN-based 3D content management web app with secure authentication and role-based access using JWT and bcrypt, ensuring scalability and data protection. Optimized MongoDB queries and built a responsive React frontend with hooks, delivering seamless performance across devices and improving user engagement.',
      tags: ['MERN', 'JWT', 'React', 'MongoDB', 'Hooks'],
      github: 'https://github.com',
      demo: 'https://creatingdimensions.onrender.com/',
      image: '/image1.png',
    },
    {
      title: 'Coding Buddy',
      description:
        'Built an AI-powered coding assistant using the OpenAI API to provide real-time code explanations and bug fixes, enhancing developer productivity.',
      tags: ['React', 'Node.js', 'OpenAI API'],
      github: 'https://github.com',
      demo: 'https://codingbuddy.onrender.com/',
      image: '/image2.png',
    },
    {
      title: 'Co Flow',
      description:
        'Created a collaborative whiteboard with Konva.js and Socket.IO, supporting real-time multi-user drawing and editing with minimal latency. Integrated Google OAuth 2.0 authentication and team access control, while designing an intuitive interface.',
      tags: ['React', 'Konva.js', 'Socket.IO', 'Google OAuth'],
      github: 'https://github.com',
      demo: 'https://coflow-7r11.onrender.com/',
      image: '/image3.png',
    },
    {
      title: 'MathMania VR Game',
      description:
        'Immersive VR game designed to make learning math fun and interactive. Features engaging puzzles, real-time feedback, and a dynamic 3D environment for students.',
      tags: ['VR', 'Unity', 'Game Development', 'Education'],
      github: 'https://github.com/jaigoel08/MathMania-College-VR-Game-Dev-Project',
      image: '/image4.jpeg',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="projects" className="py-20 px-6 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent -z-10"></div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section header */}
          <div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-balance"
            >
              Featured Projects
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-16 h-1 bg-gradient-to-r from-secondary to-accent mt-4"
            ></motion.div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-6 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-accent transition-all duration-300 overflow-hidden"
                whileHover={{ translateY: -4 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-secondary/0 group-hover:from-accent/10 group-hover:to-secondary/10 pointer-events-none transition-all duration-300"></div>

                {/* Project Image */}
                {project.image && (
                  <div className="mb-4">
                    <img
                      src={project.image}
                      alt={project.title + ' screenshot'}
                      className="w-full h-48 object-cover rounded-lg border border-border shadow-sm"
                    />
                  </div>
                )}

                <div className="relative z-10 space-y-4">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-secondary/20 text-secondary border border-secondary/30 group-hover:border-accent/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-border hover:bg-card rounded-lg font-medium transition-all duration-300 group"
            >
              View More on GitHub
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
