import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Heart, ArrowUp, Github, Linkedin, Mail, Code, Instagram, FileText } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "/", type: "route" },
      { name: "About", href: "/about", type: "route" },
      { name: "Projects", href: "/projects", type: "route" },
      { name: "Contact", href: "/contact", type: "route" },
    ],
    Services: [
      { name: "Web Development", href: "/services/web-development", type: "route" },
      { name: "UI/UX Design", href: "/services/ui-ux-design", type: "route" },
      { name: "Backend Development", href: "/services/backend-development", type: "route" },
      { name: "Performance Optimization", href: "/services/performance", type: "route" },
    ],
    Resources: [
      { name: "Blog", href: "/blog", type: "route" },
      { name: "Portfolio", href: "/portfolio", type: "route" },
      { name: "Resume", href: "https://resume-pdf-zeta.vercel.app/Ayan%20Professional%20Cv.pdf", type: "external" },
      { name: "Contact", href: "/contact", type: "route" },
    ],
  };

  // Updated social links with your actual URLs
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/Ayansahil/", 
      label: "GitHub",
      color: "hover:from-gray-700 hover:to-gray-600"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ayan-sahil-81aa04249/",
      label: "LinkedIn",
      color: "hover:from-blue-600 hover:to-blue-500"
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/ayan_sahil7", 
      label: "Instagram",
      color: "hover:from-pink-600 hover:to-purple-600"
    },
    { 
      icon: FileText, 
      href: "https://resume-pdf-zeta.vercel.app/Ayan%20Professional%20Cv.pdf", 
      label: "Resume",
      color: "hover:from-green-600 hover:to-green-500"
    },
    { 
      icon: Mail, 
      href: "mailto:ayans8557@gmail.com", 
      label: "Email",
      color: "hover:from-red-600 hover:to-red-500"
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (link) => {
    if (link.type === "external") {
      // External links - open in new tab
      window.open(link.href, '_blank', 'noopener,noreferrer');
    } else if (link.type === "route") {
      // Internal routes - use React Router
      navigate(link.href);
      scrollToTop();
    }
  };

  const handleSocialClick = (href) => {
    if (href.startsWith('mailto:')) {
      // For email, use default behavior
      window.location.href = href;
    } else {
      // For all other social links, open in new tab
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="relative bg-gray-900 dark:bg-gray-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/90"></div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1 md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <Link 
                    to="/" 
                    className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all duration-300"
                  >
                    Ayan
                  </Link>
                  <p className="text-gray-400 mt-2 max-w-md">
                    Full-stack developer passionate about creating beautiful,
                    functional, and user-centered digital experiences.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.button
                        key={index}
                        onClick={() => handleSocialClick(social.href)}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 bg-gray-800 hover:bg-gradient-to-r ${social.color} rounded-lg text-gray-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl`}
                        title={social.label}
                        aria-label={`Visit ${social.label}`}
                      >
                        <Icon size={20} />
                      </motion.button>
                    );
                  })}
                </div>

                {/* Call to Action for Social */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-gray-500 text-sm mt-4"
                >
                  Let's connect and build something amazing together!
                </motion.p>
              </motion.div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(
              ([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-white font-semibold mb-4 text-lg">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        {link.type === "route" ? (
                          <Link
                            to={link.href}
                            className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block hover:translate-x-1 transform"
                            onClick={scrollToTop}
                          >
                            {link.name}
                          </Link>
                        ) : (
                          <button
                            onClick={() => handleLinkClick(link)}
                            className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block hover:translate-x-1 transform"
                          >
                            {link.name}
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            )}
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <div className="text-center">
              <h4 className="text-white font-semibold mb-4 text-lg">Stay Updated</h4>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                Get notified about new projects, blog posts, and tech insights.
              </p>
              <div className="max-w-md mx-auto flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-lg hover:shadow-lg transition-all duration-200 font-medium"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center text-gray-400 text-sm"
              >
                <span>© {currentYear} Ayan. Made with</span>
                <Heart size={16} className="mx-2 text-red-500 animate-pulse" />
                <span>and</span>
                <Code size={16} className="mx-2 text-blue-400" />
                <span>All rights reserved.</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6 mt-4 md:mt-0"
              >
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;