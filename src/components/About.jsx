import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe,
  Music,
  Camera,
  Zap,
  Film,
  Dumbbell,
  Gamepad2,
  Plane,
  Code2,
  Server,
  Database,
  Terminal,
} from 'lucide-react';


const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    accent: 'blue',
    skills: [
      { name: 'HTML5', icon: '/assets/skills/html.svg' },
      { name: 'CSS3', icon: '/assets/skills/css.svg' },
      { name: 'JavaScript', icon: '/assets/skills/javascript.svg' },
      { name: 'Tailwind CSS', icon: '/assets/skills/tailwindcss.svg' },
      { name: 'React.js', icon: '/assets/skills/react.svg' },
      { name: 'Next.js', icon: '/assets/skills/nextjs.svg' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    accent: 'purple',
    skills: [
      { name: 'Node.js', icon: '/assets/skills/nodejs.svg' },
      { name: 'Express.js', icon: '/assets/skills/express.svg' },
      { name: 'Socket.io', icon: '/assets/skills/socketio.svg' },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    accent: 'emerald',
    skills: [
      { name: 'MongoDB', icon: '/assets/skills/mongodb.svg' },
      { name: 'PostgreSQL', icon: '/assets/skills/postgresql.svg' },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: Terminal,
    accent: 'cyan',
    skills: [
      { name: 'Docker', icon: '/assets/skills/docker.svg' },
      { name: 'Kubernetes', icon: '/assets/skills/kubernetes.svg' },
      { name: 'Git', icon: '/assets/skills/git.svg' },
      { name: 'GitHub', icon: '/assets/skills/github.svg' },
      { name: 'Postman', icon: '/assets/skills/postman.svg' },
    ],
  },
];

const accentClasses = {
  blue: {
    iconWrap: 'bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400',
    glow: 'bg-blue-500',
    pillHover:
      'hover:border-blue-400/40 hover:shadow-blue-500/20 dark:hover:border-blue-400/30',
    cardHover: 'hover:border-blue-300/50 dark:hover:border-blue-500/30',
  },
  purple: {
    iconWrap: 'bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400',
    glow: 'bg-purple-500',
    pillHover:
      'hover:border-purple-400/40 hover:shadow-purple-500/20 dark:hover:border-purple-400/30',
    cardHover: 'hover:border-purple-300/50 dark:hover:border-purple-500/30',
  },
  emerald: {
    iconWrap: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400',
    glow: 'bg-emerald-500',
    pillHover:
      'hover:border-emerald-400/40 hover:shadow-emerald-500/20 dark:hover:border-emerald-400/30',
    cardHover: 'hover:border-emerald-300/50 dark:hover:border-emerald-500/30',
  },
  cyan: {
    iconWrap: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400',
    glow: 'bg-cyan-500',
    pillHover:
      'hover:border-cyan-400/40 hover:shadow-cyan-500/20 dark:hover:border-cyan-400/30',
    cardHover: 'hover:border-cyan-300/50 dark:hover:border-cyan-500/30',
  },
};

// Kept for backward-compat export, in case other files import `skills`.
export const skills = skillCategories.flatMap((c) => c.skills);

const About = ({ isMainPage = false }) => {
  const HeadingTag = isMainPage ? 'h1' : 'h2';
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

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

  const interests = [
    { name: 'Movies', icon: Film, description: 'Cinema lover and film explorer' },
    { name: 'Fitness', icon: Dumbbell, description: 'Strength and stamina goals' },
    { name: 'Gaming', icon: Gamepad2, description: 'Relaxing with strategy and sports' },
    { name: 'Travel', icon: Plane, description: 'Exploring nature and cultures' },
    { name: 'Music', icon: Music, description: 'Coding soundtrack essentials' },
    { name: 'Photography', icon: Camera, description: 'Capturing creative moments' },
  ];

  return (
    <section id="about" className="py-20 lg:py-24 bg-white/50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <HeadingTag className="text-4xl lg:text-[2.75rem] leading-tight font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            About Me
          </HeadingTag>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-stretch">
          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <h3 className="text-2xl lg:text-[1.65rem] leading-[1.3] font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Hi there! I'm Ayan Sahil, a Full Stack Developer & Founder of <Link to="/services" className="text-blue-600 hover:underline">Ayan Web Solutions</Link>
            </h3>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-300 text-[1.05rem] leading-[1.8] max-w-[65ch]">
              <p>
                A passionate{' '}
                <span className="text-blue-500 dark:text-blue-400 font-medium">
                  Full-Stack Engineer
                </span>{' '}
                specializing in the MERN ecosystem. My journey began with React's component
                architecture, which ignited my passion for creating dynamic, interactive user
                interfaces. From there, I mastered Node.js and Express for robust backend
                development, while leveraging MongoDB for efficient data management.
              </p>
              <p>
                I excel at building{' '}
                <span className="text-purple-500 dark:text-purple-400 font-medium">
                  scalable web applications
                </span>{' '}
                that deliver seamless user experiences. Whether it's crafting responsive
                frontends, designing RESTful APIs, or optimizing database performance, I bring
                ideas to life through clean, maintainable code and modern development practices.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-auto pt-10 max-w-[65ch]">
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
                  className="flex flex-col items-center justify-center text-center group cursor-default"
                >
                  <div className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-blue-400">
                    {stat.number}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SECTION (SKILLS) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col h-full"
          >
            <div className="flex items-center justify-start gap-3 mb-6">
              <Zap className="w-5 h-5 text-yellow-500" />
              <h3 className="text-2xl lg:text-[1.65rem] leading-[1.3] font-bold tracking-tight text-gray-900 dark:text-white">
                MERN Stack Expertise
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 auto-rows-fr gap-5 flex-1">
              {skillCategories.map((category, catIndex) => {
                const CategoryIcon = category.icon;
                const accent = accentClasses[category.accent];

                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: 0.5 + catIndex * 0.1,
                      duration: 0.6,
                      ease: 'easeOut',
                    }}
                    className={`relative overflow-hidden flex flex-col h-full rounded-2xl p-6 border border-gray-200/60 dark:border-white/10 bg-gradient-to-br from-white/90 to-gray-50/60 dark:from-gray-800/70 dark:to-gray-900/70 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-500 ${accent.cardHover}`}
                  >
                    {/* soft inner glow, top-right */}
                    <div
                      className={`pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-[0.07] dark:opacity-[0.12] ${accent.glow}`}
                    />

                    <div className="relative z-10 flex items-center gap-3 mb-6">
                      <div
                        className={`flex items-center justify-center shrink-0 w-9 h-9 rounded-lg border ${accent.iconWrap}`}
                      >
                        <CategoryIcon size={18} strokeWidth={2} />
                      </div>
                      <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-800 dark:text-gray-200">
                        {category.title}
                      </h4>
                    </div>

                    <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                      {category.skills.map((skill, i) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 8 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{
                            delay: 0.6 + catIndex * 0.1 + i * 0.04,
                            duration: 0.4,
                          }}
                          whileHover={{ y: -2, scale: 1.02 }}
                          className={`inline-flex items-center justify-center gap-2 h-[34px] px-3.5 rounded-full border border-gray-200/70 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur-sm shadow-sm transition-all duration-300 cursor-default ${accent.pillHover} hover:shadow-md hover:bg-white/90 dark:hover:bg-white/[0.08]`}
                        >
                          <img
                            src={skill.icon}
                            alt={`${skill.name} skill icon`}
                            loading="lazy"
                            width="16"
                            height="16"
                            className="w-4 h-4 object-contain shrink-0"
                            onError={(e) => {
                              e.currentTarget.src = '/assets/skills/default.svg';
                            }}
                          />
                          <span className="text-[13px] font-medium tracking-wide leading-none text-gray-700 dark:text-gray-200">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
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
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
                    }}
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