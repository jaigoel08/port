'use client'

import React from "react"

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const socials = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/jaigoel08',
      color: 'hover:text-foreground',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/jai-goyal-80ba17254',
      color: 'hover:text-blue-500',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:jaigoel14@gmail.com',
      color: 'hover:text-red-500',
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
    <section id="contact" className="py-20 px-6 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent -z-10"></div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section header */}
          <div className="text-center">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-balance"
            >
              Let&apos;s Work Together
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto"
            >
              I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="w-16 h-1 bg-gradient-to-r from-secondary to-accent mt-6 mx-auto"
            ></motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-accent focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-accent focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-accent focus:outline-none transition-colors text-foreground placeholder-muted-foreground resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {submitted && (
                  <motion.div
                    className="p-4 rounded-lg bg-accent/10 border border-accent text-accent text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✓ Thanks for your message! I&apos;ll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Email */}
              <div className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-accent transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/20">
                    <Mail size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:jaigoel14@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      jaigoel14@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              {/* Social Links */}
              <div className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-accent transition-all duration-300">
                <h3 className="font-semibold text-foreground mb-4">Follow Me</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socials.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-lg border border-border hover:bg-card transition-all duration-300 flex items-center gap-2 text-muted-foreground ${social.color}`}
                        aria-label={social.label}
                      >
                        <Icon size={20} />
                        <span className="text-sm font-medium">{social.label}</span>
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Availability */}
              <div className="p-6 rounded-lg border border-border bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/20">
                <div className="flex items-start gap-3">
                  <span className="relative flex h-3 w-3 mt-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Currently Available</h3>
                    <p className="text-sm text-muted-foreground">
                      Open to internship and full-time opportunities
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
