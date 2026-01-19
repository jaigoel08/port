'use client'

import { motion } from 'framer-motion'

export function Experience() {
  const experiences = [
    {
      type: 'work',
      title: 'Software Developer Intern',
      company: 'NCA IT SOLUTION',
      period: 'Jul 2025 – Sep 2025',
      description: [
        'Developed a complete student and admin dashboard for the company’s website, improving management efficiency.',
        'Collaborated on multiple client projects, contributing to design, development, and deployment.',
      ],
    },
    {
      type: 'work',
      title: 'IBM SkillsBuild Internship',
      company: 'IBM',
      period: 'June 2025 – July 2025',
      description: [
        'Completed a structured internship in Frontend Development, gaining hands-on experience with modern web technologies such as React, HTML5, and CSS.',
        'Developed a project using React: Plan-Scale, focusing on responsive design and reusable components.',
      ],
    },
    {
      type: 'education',
      title: 'B.Tech, Computer Science and Engineering',
      company: 'Guru Tegh Bahadur 4th Centenary Engineering College',
      period: 'Aug 2022 – Aug 2026',
      description: [
        'CGPA: 8.6/10.0',
      ],
    },
  ]

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="experience" className="py-20 px-6 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent -z-10"></div>

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
              Experience & Education
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-16 h-1 bg-gradient-to-r from-secondary to-accent mt-4"
            ></motion.div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline items (no vertical line) */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex gap-6 md:gap-12 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                  }`}
                >
                  {/* Dot */}
                  <div className="relative flex justify-center md:w-auto">
                    <div className="absolute left-0 md:left-auto md:right-0 top-0 w-4 h-4 bg-accent rounded-full border-4 border-background translate-y-3"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2 pl-8 md:pl-0 pb-4 md:pb-0">
                    <div
                      className={`p-6 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-accent transition-all duration-300 ${
                        index % 2 !== 0 ? 'md:text-right' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className={`flex-1 ${index % 2 !== 0 ? 'md:text-right' : ''}`}> 
                          <h3 className="text-lg font-bold text-foreground">{experience.title}</h3>
                          <p className="text-accent font-medium mt-1">{experience.company}</p>
                          <p className="text-sm text-muted-foreground mt-2">{experience.period}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary border border-secondary/30 whitespace-nowrap mt-1">
                          {experience.type === 'work' ? 'Work' : 'Education'}
                        </span>
                      </div>

                      {/* Description */}
                      <ul className="mt-4 space-y-2">
                        {experience.description.map((item, i) => (
                          <li
                            key={i}
                            className={`text-sm text-muted-foreground flex gap-2 ${
                              index % 2 !== 0 ? 'md:justify-end' : ''
                            }`}
                          >
                            <span className="text-accent min-w-fit">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
