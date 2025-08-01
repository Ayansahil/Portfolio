import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Database,
  Globe,
  Bot,
  CheckCircle,
  Film,
  Dumbbell,
  BookOpen,
  Sun,
} from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Virtual AI Assistant",
      description:
        "A cutting-edge virtual interface project showcasing modern UI/UX principles and interactive design patterns. Built with attention to detail and user experience optimization.",
      image: "./src/assets/virtual-ai.png",
      category: "frontend",
      technologies: ["HTML", "CSS3", "JavaScript"],
      features: [
        "Interactive UI",
        "Modern Design",
        "Responsive Layout",
        "Animation Effects",
      ],
      github: "https://github.com/Ayansahil/Virtual-AI-Assistant",
      live: "https://ayansahil.github.io/Virtual-AI-Assistant/",
      icon: Bot,
      hoverColor: "emerald",
    },
    {
      id: 2,
      title: "To-Do List App",
      description:
        "A sleek and intuitive task management application built with React and Tailwind CSS. Features smooth animations, visual feedback for completed tasks, and a clean interface for daily productivity tracking.",
      image: "./src/assets/todo.png",
      category: "frontend",
      technologies: ["React.js", "Tailwind CSS"],
      features: [
        "Add/Edit/Delete Tasks",
        "Toggle Complete",
        "Visual Feedback",
        "Responsive Design",
      ],
      github: "https://github.com/Ayansahil/TodoList",
      live: "https://ayansahil.github.io/TodoList/",
      icon: CheckCircle,
      hoverColor: "orange",
    },

    {
      id: 3,
      title: "Gym Website",
      description:
        "A comprehensive gym website featuring both frontend user experience and robust backend infrastructure. Includes dynamic contact forms, API integrations, and a fully responsive design optimized for fitness businesses.",
      image: "./src/assets/gym.png",
      category: "fullstack",
      technologies: [
        "React.js",
        "Vite",
        "Tailwind",
        "Node.js",
        "Express.js",
        "PostgreSQL",
      ],
      features: [
        "Contact Forms",
        "API Integration",
        "Dynamic Sections",
        "Database Management",
      ],
      github: "https://github.com/Ayansahil/Gym-web/tree/main/frontend",
      live: "https://gym-hu9ss7icx-ayan-sahils-projects.vercel.app/",
      icon: Dumbbell,
      hoverColor: "blue",
    },
    {
      id: 4,
      title: "Bookstore App",
      description:
        "A full-stack library management system with comprehensive book and subscriber management. Features real-time email notifications, file upload capabilities, and a complete admin panel for managing inventory and user interactions.",
      image:
        "https://images.adsttc.com/media/images/573c/90c0/e58e/ce1e/1600/0007/large_jpg/Here_is_a_theater_to_unfold_an_outstanding_drama__and_the_characters_are_book_lovers_sitting_on_the_soft_couch_or_standing_beside_the_bookshelves._0004.jpg?1463587001",
      category: "fullstack",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Nodemailer",
        "Multer",
        "Bootstrap",
      ],
      features: [
        "CRUD Operations",
        "File Uploads",
        "Email Confirmations",
        "Admin Panel",
      ],
      github: "https://github.com/Ayansahil/Bookstore",
      live: "",
      icon: BookOpen,
      hoverColor: "purple",
    },
    {
      id: 5,
      title: "Movie App",
      description:
        "A modern movie discovery platform that leverages the TMDB API to showcase trending films. Built with React Router for seamless navigation and Axios for efficient API data fetching and management.",
      image:
        "https://cdn.dribbble.com/userupload/43368123/file/original-87d43556d4fe0ac75f6c1f16636e69c0.png?resize=1024x768&vertical=center",
      category: "frontend",
      technologies: ["React.js", "Axios", "TMDB API", "React Router DOM"],
      features: [
        "Movie Data Fetching",
        "Dynamic Cards",
        "Routing System",
        "API Integration",
      ],
      github: "https://github.com/Ayansahil/movie-app",
      live: "",
      icon: Film,
      hoverColor: "cyan",
    },
    {
      id: 6,
      title: "Weather Forecast App",
      description:
        "A responsive weather forecasting application that uses the OpenWeather API to display real-time weather updates by city name. Built with HTML, CSS, and JavaScript for clean UI and fast API integration.",
      image:
        './src/assets/weather.png', // replace later if needed
      category: "frontend",
      technologies: ["HTML", "CSS3", "JavaScript", "OpenWeather API"],
      features: [
        "Real-time Weather Display",
        "City-based Search",
        "Clean and Responsive UI",
        "API Error Handling",
      ],
      github: "https://github.com/Ayansahil/WeatherApp",
      live: "",
      icon: Sun,
      hoverColor: "lime",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "fullstack",
      label: "Full Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "frontend",
      label: "Frontend",
      count: projects.filter((p) => p.category === "frontend").length,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"
          >
            <Globe className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of my recent work showcasing full-stack development,
            frontend expertise, and modern web technologies
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 p-1 bg-white/80 dark:bg-gray-800/80 rounded-2xl backdrop-blur-sm shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <span>{category.label}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    filter === category.id
                      ? "bg-white/20 text-white"
                      : "bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon;

              // Define hover color classes based on project hoverColor
              const getHoverClasses = (color) => {
                const colorMap = {
                  emerald: {
                    shadow: "hover:shadow-emerald-500/25",
                    border:
                      "hover:border-emerald-200 dark:hover:border-emerald-800",
                    backdrop: "group-hover:bg-emerald-500/10",
                    button: "hover:bg-emerald-500/30",
                    glow: "group-hover:shadow-emerald-500/20",
                  },
                  blue: {
                    shadow: "hover:shadow-blue-500/25",
                    border: "hover:border-blue-200 dark:hover:border-blue-800",
                    backdrop: "group-hover:bg-blue-500/10",
                    button: "hover:bg-blue-500/30",
                    glow: "group-hover:shadow-blue-500/20",
                  },
                  purple: {
                    shadow: "hover:shadow-purple-500/25",
                    border:
                      "hover:border-purple-200 dark:hover:border-purple-800",
                    backdrop: "group-hover:bg-purple-500/10",
                    button: "hover:bg-purple-500/30",
                    glow: "group-hover:shadow-purple-500/20",
                  },
                  orange: {
                    shadow: "hover:shadow-orange-500/25",
                    border:
                      "hover:border-orange-200 dark:hover:border-orange-800",
                    backdrop: "group-hover:bg-orange-500/10",
                    button: "hover:bg-orange-500/30",
                    glow: "group-hover:shadow-orange-500/20",
                  },
                  cyan: {
                    shadow: "hover:shadow-cyan-500/25",
                    border: "hover:border-cyan-200 dark:hover:border-cyan-800",
                    backdrop: "group-hover:bg-cyan-500/10",
                    button: "hover:bg-cyan-500/30",
                    glow: "group-hover:shadow-cyan-500/20",
                  },
                  lime: {
                    shadow: "hover:shadow-lime-500/25",
                    border: "hover:border-lime-200 dark:hover:border-lime-800",
                    backdrop: "group-hover:bg-lime-500/10",
                    button: "hover:bg-lime-500/30",
                    glow: "group-hover:shadow-lime-500/20",
                  },
                };
                return colorMap[color] || colorMap.blue;
              };

              const hoverClasses = getHoverClasses(project.hoverColor);

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -50 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                    type: "spring",
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl ${hoverClasses.border} ${hoverClasses.shadow} transition-all duration-500`}
                >
                  {/* Background blur effect on hover */}
                  <div
                    className={`absolute inset-0 backdrop-blur-sm opacity-0 ${hoverClasses.backdrop} transition-all duration-500 rounded-2xl`}
                  ></div>

                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={`${project.title} - Screenshot showing the user interface and design`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                      <div className="absolute top-4 left-4">
                        <div
                          className={`flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300 ${hoverClasses.glow}`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-2">
                            {project.github && (
                              <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className={`p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white ${hoverClasses.button} transition-colors duration-200 group/btn`}
                                title="View GitHub Repository"
                              >
                                <Github size={18} />
                              </motion.a>
                            )}
                            {project.live && (
                              <motion.a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className={`p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white ${hoverClasses.button} transition-colors duration-200 group/btn`}
                                title="View Live Demo"
                              >
                                <ExternalLink size={18} />
                              </motion.a>
                            )}
                          </div>

                          {/* Project Status Badge */}
                          <div className="flex items-center space-x-2">
                            {project.live ? (
                              <span className="px-2 py-1 bg-green-500/80 text-white text-xs rounded-full backdrop-blur-sm">
                                Live
                              </span>
                            ) : (
                              <span className="px-2 py-1 bg-yellow-500/80 text-white text-xs rounded-full backdrop-blur-sm">
                                Code
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="relative p-6 z-10">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.category === "fullstack"
                            ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                            : "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                        }`}
                      >
                        {project.category === "fullstack"
                          ? "Full Stack"
                          : "Frontend"}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center text-xs text-gray-600 dark:text-gray-400"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900 dark:hover:to-purple-900 transition-all duration-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 text-sm font-medium"
                        >
                          <Github size={16} className="mr-2" />
                          Code
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* GitHub CTA */}
        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Ayansahil"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 group"
          >
            <Github
              size={22}
              className="mr-3 group-hover:rotate-12 transition-transform duration-300"
            />
            View All Projects on GitHub
            <ExternalLink
              size={18}
              className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
