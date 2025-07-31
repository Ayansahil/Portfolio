import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

// Enhanced Theme Toggle Component with Skiper UI Animations
const ThemeToggle = ({ darkMode, toggleTheme, className = "" }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    toggleTheme();
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleToggle}
      className={`relative overflow-hidden p-3 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-purple-500/25 ${className}`}
      disabled={isAnimating}
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 dark:from-blue-600/20 dark:to-purple-600/20"
        animate={{
          scale: darkMode ? [1, 1.2, 1] : [1, 1.1, 1],
          rotate: darkMode ? [0, 180, 360] : [0, -180, -360],
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      />

      {/* Icon Container */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {darkMode ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ 
                rotate: 0, 
                scale: 1, 
                opacity: 1,
              }}
              exit={{ 
                rotate: 90, 
                scale: 0, 
                opacity: 0,
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <Sun 
                size={20} 
                className="text-yellow-600 dark:text-yellow-400 drop-shadow-sm" 
              />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ 
                rotate: 0, 
                scale: 1, 
                opacity: 1,
              }}
              exit={{ 
                rotate: -90, 
                scale: 0, 
                opacity: 0,
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <Moon 
                size={20} 
                className="text-blue-600 dark:text-blue-400 drop-shadow-sm" 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Ripple Effect */}
      {isAnimating && (
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            background: darkMode 
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, transparent 70%)'
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 pointer-events-none"
        style={{
          background: darkMode
            ? 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, transparent 70%)',
        }}
        animate={{
          opacity: isAnimating ? [0, 0.8, 0] : 0,
        }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  );
};

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'About', href: '/about', type: 'route' },
    { name: 'Experience', href: '/experience', type: 'route' },
    { name: 'Projects', href: '/projects', type: 'route' },
    { name: 'Services', href: '/services', type: 'route' },
    { name: 'Contact', href: '/contact', type: 'route' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    setIsMobileMenuOpen(false);
    
    if (item.type === 'route') {
      // Router navigation
      navigate(item.href);
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      // Scroll to section (for single page navigation)
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActiveRoute = (href) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgba(147, 51, 234, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold font-sans bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer transition-all duration-200"
            >
              &lt;Ayan/&gt;
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(item)}
                className={`relative transition-colors duration-200 ${
                  isActiveRoute(item.href)
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.name}
                {isActiveRoute(item.href) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            
            {/* Enhanced Theme Toggle */}
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle 
              darkMode={darkMode} 
              toggleTheme={toggleTheme}
              className="p-2"
            />
            
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg mt-2 py-4 shadow-xl border border-gray-200/50 dark:border-gray-700/50"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left px-4 py-3 transition-all duration-200 ${
                    isActiveRoute(item.href)
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 font-semibold border-r-2 border-blue-500'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:pl-6'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;