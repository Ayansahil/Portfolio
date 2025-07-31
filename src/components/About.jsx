import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Globe, Music, Camera, Zap, Film, Dumbbell, Gamepad2, Plane } from 'lucide-react';

const About = () => {
  const [inView, setInView] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef(null);
  const skillsBoxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!skillsBoxRef.current) return;
    
    const rect = skillsBoxRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);
    
    setMousePosition({ x: deltaX * 20, y: deltaY * 20 });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const interests = [
    { name: 'Movies', icon: Film, description: 'Cinema lover and film explorer' },
    { name: 'Fitness', icon: Dumbbell, description: 'Strength and stamina goals' },
    { name: 'Gaming', icon: Gamepad2, description: 'Relaxing with strategy and sports' },
    { name: 'Travel', icon: Plane, description: 'Exploring nature and cultures' },
    { name: 'Music', icon: Music, description: 'Coding soundtrack essentials' },
    { name: 'Photography', icon: Camera, description: 'Capturing creative moments' },
  ];

  const skills = [
    { name: "HTML5", icon: "🌐", color: "from-orange-500 to-red-500" },
    { name: "CSS3", icon: "🎨", color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", icon: "⚡", color: "from-yellow-500 to-orange-500" },
    { name: "Tailwind CSS", icon: "🎯", color: "from-cyan-500 to-blue-500" },
    { name: "Bootstrap", icon: "🅱️", color: "from-purple-500 to-indigo-500" },
    { name: "React.js", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
    { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-500" },
    { name: "Express.js", icon: "🚀", color: "from-gray-600 to-gray-800" },
    { name: "MongoDB", icon: "🍃", color: "from-green-600 to-green-800" },
    { name: "MySQL", icon: "🐬", color: "from-blue-600 to-blue-800" },
    { name: "PostgreSQL", icon: "🐘", color: "from-blue-700 to-indigo-700" },
    { name: "Git", icon: "📦", color: "from-orange-600 to-red-600" },
    { name: "GitHub", icon: "🐙", color: "from-gray-800 to-black" },
    { name: "Postman", icon: "📮", color: "from-orange-500 to-yellow-500" }
  ];

  return (
    <section id="about" className="py-20 bg-white/50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Hi there! I'm a MERN Stack Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                A passionate <span className="text-blue-600 dark:text-blue-400 font-semibold">Full-Stack Engineer</span> specializing
                in the MERN ecosystem. My journey began with React's component architecture, which ignited my passion for
                creating dynamic, interactive user interfaces. From there, I mastered Node.js and Express for robust
                backend development, while leveraging MongoDB for efficient data management.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I excel at building <span className="text-purple-600 dark:text-purple-400 font-semibold">scalable web applications</span> that
                deliver seamless user experiences. Whether it's crafting responsive frontends, designing RESTful APIs,
                or optimizing database performance, I bring ideas to life through clean, maintainable code and
                modern development practices.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { number: '20+', label: 'MERN Projects' },
                { number: '2+', label: 'Years Experience' },
                { number: '15+', label: 'APIs Built' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center gap-2 mb-6 w-full">
              <Zap className="w-6 h-6 text-yellow-500" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                MERN Stack Expertise
              </h3>
            </div>

            {/* Skills Box with Tilt Effect */}
            <motion.div
              ref={skillsBoxRef}
              className="relative p-8 rounded-2xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border-2 border-gray-200/60 dark:border-gray-600/60 hover:border-blue-400/60 dark:hover:border-purple-400/60 shadow-xl hover:shadow-2xl transition-all duration-500"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
              animate={{
                rotateX: isHovering ? -mousePosition.y : 0,
                rotateY: isHovering ? mousePosition.x : 0,
                scale: isHovering ? 1.02 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 800,
                damping: 15,
                duration: 0.1
              }}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Gradient Border Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              
              {/* Skills Grid */}
              <div className="grid grid-cols-3 gap-4 relative z-10">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center p-4 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500"
                    whileHover={{ scale: 1.08, y: -8 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: 0.6 + index * 0.05,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isHovering ? 'translateZ(20px)' : 'translateZ(0px)'
                    }}
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center text-white text-xl font-bold mb-3 shadow-lg relative overflow-hidden`}
                      style={{
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                      }}
                      whileHover={{
                        scale: 1.3,
                        boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                        rotateY: [0, 180, 360]
                      }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 80,
                        damping: 10
                      }}
                    >
                      <motion.span
                        className="text-xl font-bold relative"
                        whileHover={{
                          filter: 'brightness(1.3) drop-shadow(0 0 10px rgba(255,255,255,0.8))',
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 1.5,
                          ease: "easeInOut"
                        }}
                        style={{
                          backfaceVisibility: 'hidden',
                          transformStyle: 'preserve-3d'
                        }}
                      >
                        {skill.icon}
                      </motion.span>

                      <motion.div
                        className="absolute inset-0 rounded-lg border-2 border-white/30"
                        whileHover={{
                          rotate: 360,
                          borderColor: ['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0.3)']
                        }}
                        transition={{
                          duration: 2,
                          ease: "linear",
                          repeat: Infinity
                        }}
                      />
                    </motion.div>

                    <motion.span
                      className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill.name}
                    </motion.span>

                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-b-xl" />
                  </motion.div>
                ))}
              </div>

              {/* Floating Particles Effect */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: isHovering ? [1, 1.5, 1] : 1,
                      opacity: isHovering ? [0.3, 0.7, 0.3] : 0.3,
                      y: isHovering ? [0, -20, 0] : 0,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20"
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <Globe className="w-6 h-6 text-green-500" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
              Beyond the Code
            </h3>
            <Globe className="w-6 h-6 text-green-500" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.08, y: -8, rotateY: 5, rotateX: 5 }}
                  className="group text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-purple-500/20 transition-all duration-500 cursor-pointer overflow-hidden relative"
                  style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white relative z-10"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0], boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)' }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={24} />
                  </motion.div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 relative z-10">
                    {interest.name}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                    {interest.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;