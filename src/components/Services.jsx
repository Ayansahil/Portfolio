import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Palette,
  Smartphone,
  Server,
  Search,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive user interfaces that provide exceptional user experiences across all devices.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
      price: "Starting at $50",
      popular: false,
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Full-stack web applications using modern technologies like React, Node.js, and cloud platforms.",
      features: [
        "Responsive Design",
        "Database Integration",
        "API Development",
        "Performance Optimization",
      ],
      price: "Starting at $60",
      popular: true,
    },

    {
      icon: Server,
      title: "Backend Development",
      description:
        "Build powerful, secure, and scalable server-side applications using Node.js, Express.js, and cloud platforms integration.",
      features: [
        "API Design",
        "Database Optimization",
        "Cloud Deployment",
        "Security Implementation",
      ],
      price: "Starting at $70",
      popular: false,
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Speed up your existing applications and improve user experience with performance enhancements.",
      features: [
        "Code Optimization",
        "Image Compression",
        "Caching Strategies",
        "Loading Speed",
      ],
      price: "Starting at $59",
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional services to bring your digital ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border transition-all duration-300 hover:shadow-2xl ${
                  service.popular
                    ? "border-blue-500/50 ring-2 ring-blue-500/20"
                    : "border-gray-200/50 dark:border-gray-700/50"
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                    service.popular
                      ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                  }`}
                >
                  <Icon size={32} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <CheckCircle
                        size={16}
                        className="text-green-500 mr-3 flex-shrink-0"
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {service.price}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center ${
                      service.popular
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    Get Started
                    <ArrowRight size={16} className="ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl border border-blue-200/50 dark:border-blue-800/50"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Need Something Custom?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Every project is unique. Let's discuss your specific requirements
            and create a tailored solution that perfectly fits your needs and
            budget.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .querySelector("#contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-200"
          >
            Let's Talk
            <ArrowRight size={20} className="ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
