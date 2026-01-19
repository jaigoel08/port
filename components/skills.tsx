'use client'

import { motion } from 'framer-motion'

export function Skills() {
  const skillsData = [
    {
      category: 'Languages',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 88 },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 75 },
      ],
    },
    {
      category: 'Frameworks',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Socket.IO', level: 75 },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 90 },
        { name: 'Render', level: 80 },
        { name: 'Google OAuth', level: 75 },
        { name: 'Azure', level: 70 },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="skills" className="py-20 px-6 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent -z-10"></div>

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
              Skills & Expertise
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-16 h-1 bg-gradient-to-r from-secondary to-accent mt-4"
            ></motion.div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillsData.map((category) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="space-y-6 p-6 rounded-lg border border-border bg-card/50 hover:bg-card transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-foreground">{category.category}</h3>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-accent font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications / Achievements */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6">Achievements & Activities</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Achieved 99.27 percentile in Young Turks Skills Assessment Test (Naukri Campus)',
                'Participated in Google Cloud Arcade and achieved Legend Tier, focusing on core cloud skills, BigQuery, Firebase, Kubernetes, and hands-on monthly cloud challenges.',
                'Member, Code Geeeks (2022–23)',
                'Member, E-Cell GTB4CEC (2024–25)',
                'MERN Stack Certification',
              ].map((achievement) => (
                <div
                  key={achievement}
                  className="p-4 rounded-lg border border-border bg-card/50 hover:border-accent hover:bg-accent/5 transition-all duration-300 flex items-start gap-3"
                >
                  <span className="text-accent text-xl mt-1">✓</span>
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
