'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="hero" className="pt-32 pb-20 px-6 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main heading with photograph */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
            {/* Left: Profile photo and info */}
            <div className="flex flex-col items-center gap-4 md:order-1">
              <motion.img
                variants={itemVariants}
                src="/Jaiprofile.png"
                alt="Jai Goyal Photograph"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-accent"
                style={{ background: '#eee' }}
              />
            </div>
            {/* Main heading and intro */}
            <div className="flex-1 md:order-2">
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold text-balance leading-tight"
              >
                Hey, I&apos;m{' '}
                <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                  Jai Goyal
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-muted-foreground mt-6"
              >
                Full Stack Developer crafting modern web experiences
              </motion.p>
            </div>
            {/* Right: Resume PDF embedded */}
            <div className="flex flex-col items-center gap-3 md:order-3 md:ml-auto w-full md:w-56">
              <motion.div
                variants={itemVariants}
                className="w-full h-64 md:h-80 rounded-lg shadow-md border-2 border-accent overflow-hidden bg-white"
              >
                <iframe
                  src="/JaiGoyal_Resume.pdf"
                  title="Resume PDF"
                  className="w-full h-full"
                  style={{ minHeight: '16rem', border: 'none' }}
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Computer Science student with hands-on experience in full-stack web development (MERN). Skilled in JavaScript,
React.js, Node.js, and cloud integrations. Experienced in building scalable, user-focused applications. Eager to
contribute innovative solutions in dynamic software environments
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a
              href="#projects"
              className="group px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-border hover:bg-card rounded-lg font-medium transition-all duration-300 w-full sm:w-auto text-center"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 pt-4"
          >
            <a
              href="https://github.com/jaigoel08"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:bg-card hover:border-accent hover:text-accent transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/jai-goyal-80ba17254"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:bg-card hover:border-accent hover:text-accent transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:jaigoel14@gmail.com"
              className="p-3 rounded-lg border border-border hover:bg-card hover:border-accent hover:text-accent transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 mt-16"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 text-muted-foreground opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
