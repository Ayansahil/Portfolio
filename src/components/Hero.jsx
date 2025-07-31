import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, ArrowDown } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import ReactTypingEffect from 'react-typing-effect';

const Hero = () => {
  const roles = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Tech Enthusiast'];

  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal Lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
            style={{ top: `${(i + 1) * 12.5}%` }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scaleX: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Vertical Lines */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"
            style={{ left: `${(i + 1) * 16.66}%` }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scaleY: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold text-gray-800 dark:text-white"
              >
                Hello, I'm
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent"
              >
                Ayan Sahil
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-200 h-16"
              >
                <ReactTypingEffect
                  text={roles}
                  speed={100}
                  eraseSpeed={50}
                  eraseDelay={2000}
                  typingDelay={500}
                  className="text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-200"
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed"
            >
              I craft beautiful, functional, and user-centered digital experiences.
              Passionate about creating innovative solutions that make a difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium transition-all duration-200 hover:shadow-lg"
                onClick={() => window.open("https://resume-pdf-zeta.vercel.app/Ayan%20Professional%20Cv.pdf", "_blank")}>
                <Download size={20} className="mr-2" />
                View Resume
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200"
              >
                <Mail size={20} className="mr-2" />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex space-x-4"
            >
              {[
                { icon: Github, href: 'https://github.com/Ayansahil/', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/ayan-sahil-81aa04249/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:ayans8557@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  title={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Animated Background Glow */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 rounded-full opacity-20 blur-xl"
              />

              {/* Grid Pattern Behind Image */}
              <div className="absolute inset-4 rounded-full opacity-30" style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }} />


              {/* Profile Image with Parallax Tilt Effect */}
              <Tilt
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1500}
                gyroscope={true}
                className="w-full h-full"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-white/20 dark:ring-gray-800/20">
                  {/* Replace with your actual image */}

                  <img
                    src="./src/assets/portfolio.jpeg"  // Yeh line change karo
                    alt="Ayan Sahil"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />


                  {/* Fallback display if image fails to load */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center text-white text-6xl font-bold rounded-full" style={{ display: 'none' }}>
                    A
                  </div>

                  {/* Overlay Grid Effect */}
                  <div className="absolute inset-0 rounded-full" style={{
                    background: `
                      linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%),
                      linear-gradient(-45deg, transparent 30%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)
                    `
                  }} />
                </div>
              </Tilt>

              {/* Floating Tech Elements */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 360]
                }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white shadow-lg backdrop-blur-sm"
              >
                &lt;/&gt;
              </motion.div>

              <motion.div
                animate={{
                  y: [10, -10, 10],
                  rotate: [360, 0]
                }}
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 6, repeat: Infinity, ease: "linear" }
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-green-500 rounded-lg flex items-center justify-center text-white shadow-lg backdrop-blur-sm"
              >
                ✨
              </motion.div>

              {/* Additional Grid Accent */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 right-8 w-6 h-6 border-2 border-blue-400 transform rotate-45"
              />

              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute top-1/4 left-8 w-4 h-4 border-2 border-purple-400 rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator with Grid Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 hover:text-blue-600 transition-colors duration-200 relative"
          >
            <div className="absolute -inset-2 bg-grid-pattern opacity-20 rounded-full" />
            <ArrowDown size={24} className="relative z-10" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;