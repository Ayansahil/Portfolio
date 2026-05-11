import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Globe } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

// --- MAIN EXPORTED COMPONENT ---
const Projects = () => {
  return (
    <>
      <MobileProjects />
      <DesktopProjects />
    </>
  );
};

export default Projects;

const MobileProjects = () => {
  const [filter, setFilter] = useState("all");

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
      id="projects-mobile"
      className="lg:hidden py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"
          >
            <Globe className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of my recent work showcasing full-stack development,
            frontend expertise, and modern web technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="flex flex-wrap justify-center gap-2 p-1 bg-white/80 dark:bg-gray-800/80 rounded-2xl backdrop-blur-sm shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 text-sm ${
                  filter === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <span>{category.label}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
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

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -50 }}
                  transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                  className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-200/50 dark:border-gray-700/50"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg text-sm font-medium"
                        >
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// --- DESKTOP: GSAP ScrollTrigger pinned, stacked-deck showcase ---

const CARD_Y_OFFSET = 5; // % vertical offset per card waiting behind the active one
const CARD_SCALE_STEP = 0.06; // scale reduction per card waiting behind the active one
const EXIT_Y = -140; // yPercent the active card travels to as it clears out
const EXIT_SCALE = 0.9;
const EXIT_ROTATION = -18;

const DesktopProjects = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = projects.length;

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    if (!cards.length) return;

    gsap.ticker.lagSmoothing(0);

    cards.forEach((card, index) => {
      gsap.set(card, {
        xPercent: -50,
        yPercent: -50 + index * CARD_Y_OFFSET,
        scale: 1 - index * CARD_SCALE_STEP,
        opacity: 1,
        rotationX: 0,
        force3D: true,
      });
    });

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${window.innerHeight * Math.max(total - 1, 1)}`,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const segment = 1 / Math.max(total - 1, 1);
        const idx = Math.min(Math.floor(progress / segment), total - 1);
        const segProgress =
          total > 1 ? (progress - idx * segment) / segment : 0;

        setActiveIndex(idx);

        cards.forEach((card, index) => {
          if (index < idx) {
            // Already viewed — fully cleared out
            gsap.set(card, {
              yPercent: EXIT_Y,
              scale: EXIT_SCALE,
              opacity: 0,
              rotationX: EXIT_ROTATION,
            });
          } else if (index === idx) {
            if (index === total - 1) {
              // Last card just rests in place
              gsap.set(card, { yPercent: -50, scale: 1, opacity: 1, rotationX: 0 });
            } else {
              gsap.set(card, {
                yPercent: gsap.utils.interpolate(-50, EXIT_Y, segProgress),
                scale: gsap.utils.interpolate(1, EXIT_SCALE, segProgress),
                opacity: gsap.utils.interpolate(1, 0, segProgress),
                rotationX: gsap.utils.interpolate(0, EXIT_ROTATION, segProgress),
              });
            }
          } else {
            // Waiting in the stack behind
            const behind = index - idx - segProgress;
            gsap.set(card, {
              yPercent: -50 + behind * CARD_Y_OFFSET,
              scale: 1 - behind * CARD_SCALE_STEP,
              opacity: 1,
              rotationX: 0,
            });
          }
        });
      },
    });

    return () => st.kill();
  }, [total]);

  return (
    <section
      ref={sectionRef}
      id="projects-desktop"
      className="hidden lg:block relative w-full h-screen overflow-hidden bg-gray-50 dark:bg-gray-950"
      style={{ perspective: "1400px", transformStyle: "preserve-3d" }}
    >
      {/* Header */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-40 text-center pointer-events-none select-none">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
          Selected Works
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4" />
      </div>

      {/* Left-side progress indicator */}
      <div className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4 pointer-events-none select-none">
        {projects.map((p, i) => (
          <div key={p.id} className="flex items-center gap-3">
            <div
              className={`h-px transition-all duration-500 ${
                i === activeIndex
                  ? "w-8 bg-gradient-to-r from-blue-600 to-purple-600"
                  : "w-4 bg-gray-300 dark:bg-gray-700"
              }`}
            />
            <span
              className={`text-xs font-mono tracking-wider transition-colors duration-500 ${
                i === activeIndex
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-400 dark:text-gray-600"
              }`}
            >
              0{i + 1}
            </span>
          </div>
        ))}
      </div>

      {/* Stacked project cards */}
      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => {
            if (el) cardRefs.current[index] = el;
          }}
          style={{
            zIndex: total - index,
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
          }}
          className="absolute top-1/2 left-1/2 w-[90%] max-w-6xl origin-top cursor-pointer"
        >
          <DesktopCard project={project} index={index} />
        </div>
      ))}
    </section>
  );
};

const DesktopCard = ({ project, index }) => {
  const Icon = project.icon;

  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 p-8 lg:p-12 rounded-[0.5rem] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
      {/* Image */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="w-full aspect-square relative rounded-[1rem] overflow-hidden bg-gray-100 dark:bg-gray-800/50 p-6 border border-gray-200 dark:border-gray-700/50">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain drop-shadow-2xl"
          />
          <div className="absolute top-6 right-6">
            {project.live ? (
              <span className="px-3 py-1 bg-green-500/90 text-white text-xs font-semibold uppercase tracking-wider rounded-full backdrop-blur-sm shadow-sm">
                Live
              </span>
            ) : (
              <span className="px-3 py-1 bg-yellow-500/90 text-white text-xs font-semibold uppercase tracking-wider rounded-full backdrop-blur-sm shadow-sm">
                Code
              </span>
            )}
          </div>
          {Icon && (
            <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg border border-white/50 dark:border-white/10">
              <Icon className="w-6 h-6 text-gray-900 dark:text-white" />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
        <span className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-4">
          Project 0{index + 1}
        </span>

        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed max-w-xl">
          {project.description}
        </p>

        <div className="mb-10">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
            Tech Stack:
          </h4>
          <div className="flex flex-wrap gap-2 max-w-xl">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium shadow-sm transition-all duration-200 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900 dark:hover:to-purple-900"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center px-4 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 text-sm font-medium shadow-md"
            >
              <Github size={18} className="mr-2" />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 text-sm font-medium shadow-md"
            >
              <ExternalLink size={18} className="mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};