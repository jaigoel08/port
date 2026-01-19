'use client'

import { motion } from 'framer-motion'
import { Code2, Zap, Target } from 'lucide-react'

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Building complete applications from frontend to backend with React, Node.js, and MongoDB',
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Creating fast, efficient, and scalable applications with optimal user experience',
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Passionate about DSA, system design, and solving complex technical challenges',
    },
  ]

  return (
    <section id="about" className="py-20 px-6 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent -z-10"></div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Section header */}
          <div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-balance"
            >
              About Me
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-16 h-1 bg-gradient-to-r from-secondary to-accent mt-2"
            ></motion.div>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I&apos;m a passionate Full Stack Developer currently pursuing my B.Tech degree. With a strong foundation
                in JavaScript, React, and backend technologies, I&apos;m committed to building scalable and user-centric
                web applications.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                My journey in tech has been driven by curiosity and a desire to understand how systems work at scale.
                I actively participate in competitive programming and enjoy solving algorithmic challenges on platforms
                like LeetCode and CodeChef.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Currently seeking opportunities to contribute to impactful projects and grow as a developer through
                challenging roles in internships and full-time positions.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={itemVariants} className="space-y-4">
              {highlights.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-accent transition-all duration-300 group cursor-pointer"
                    whileHover={{ translateY: -4 }}
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                          <Icon size={24} className="text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-3">Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                'JavaScript',
                'React',
                'Node.js',
                'Express',
                'MongoDB',
                'HTML/CSS',
                'REST APIs',
                'Git',
              ].map((tech) => (
                <div
                  key={tech}
                  className="p-4 rounded-lg bg-card border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300 text-center font-medium text-sm text-muted-foreground hover:text-foreground"
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
