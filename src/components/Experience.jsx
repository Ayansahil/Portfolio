import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      title: 'Full-Stack Web Developer (MERN Stack)',
      company: 'Freelance / Self Projects',
      location: 'Remote',
      period: 'Ongoing',
      type: 'Freelance',
      logo: '🧑‍💻',
      description: 'Building dynamic web applications using the MERN stack with focus on modern development practices and user experience.',
      achievements: [
        'Built Bookstore App with CRUD functionality, file uploads, and email notifications via Nodemailer',
        'Created interactive To-Do List App with real-time editing and completion features using React & Tailwind',
        'Developed complete Gym Website with Vite + Tailwind frontend and PostgreSQL + Express.js backend',
        'Built Color Shade Generator that accepts hex codes and returns dynamic color variations',
        'Integrated TMDB REST API for Movie App using Axios and React Router DOM',
        'Created responsive landing pages with animations using Framer Motion and Lucide Icons'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Axios', 'Tailwind CSS', 'JavaScript', 'Framer Motion']
    },
    {
      title: 'Web Development Intern',
      company: 'Zidio Development',
      location: 'Remote',
      period: '3 Months',
      type: 'Internship',
      logo: '🧪',
      description: 'Gained practical experience in full-stack development while working on real-time projects in a startup environment.',
      achievements: [
        'Participated in real-time projects and enhanced practical full-stack development skills',
        'Gained valuable exposure to startup environments and agile development methodologies',
        'Learned industry-standard version control practices using Git',
        'Developed strong teamwork and collaboration skills working with distributed teams',
        'Applied modern web development technologies in production-level projects'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Git', 'Agile Methodology']
    },
    {
      title: 'Customer Service Associate',
      company: 'Amazon India',
      location: 'India',
      period: '6 Months',
      type: 'Part-time',
      logo: '🛍',
      description: 'Handled customer support operations via chat and call, developing strong communication and problem-solving skills.',
      achievements: [
        'Successfully handled customer queries and complaints through multiple communication channels',
        'Maintained high service quality standards while working under pressure',
        'Developed excellent time management skills in fast-paced environment',
        'Enhanced communication skills focusing on clarity, empathy, and customer satisfaction',
        'Gained experience in conflict resolution and customer relationship management'
      ],
      technologies: ['Customer Support Tools', 'Communication Systems', 'Time Management', 'Problem Solving']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience 
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey in web development and the projects that shaped my expertise
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{exp.logo}</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                      </motion.button>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'Part-time' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : exp.type === 'Freelance'
                          ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                      }`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                            <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1.5 w-1 h-1 bg-current rounded-full flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;