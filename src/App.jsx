import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LenisProvider from './components/LenisProvider';
import SEO from './components/SEO';
import { localBusinessSchema, personSchema, webSiteSchema, getPortfolioSchema, professionalServiceSchema } from './data/seoSchemas';

const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Services = React.lazy(() => import('./components/Services'));
const Contact = React.lazy(() => import('./components/Contact'));
const ScrollToTop = React.lazy(() => import('./components/ScrollToTop'));

// Individual Page Components
const HomePage = () => (
  <>
    <SEO 
      title="Ayan Web Solutions" 
      description="Ayan Web Solutions helps businesses build websites that create trust and generate more enquiries. Freelance Web Developer based in Bhopal."
      keywords="Full Stack Developer Bhopal, React Developer Bhopal, MERN Stack Developer Bhopal, Freelance Web Developer Bhopal"
      url="https://ayanportfolio.in"
      jsonLd={[localBusinessSchema, personSchema, webSiteSchema]}
    />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Services />
    <Contact />
  </>
);

const AboutPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="pt-20"
  >
    <SEO 
      title="About Ayan | Freelance Web Developer" 
      description="Learn more about Ayan, a Full Stack Developer from Bhopal specializing in React, Vite, Node.js, and technical SEO."
      url="https://ayanportfolio.in/about"
      jsonLd={personSchema}
    />
    <About />
  </motion.div>
);

const ExperiencePage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="pt-20"
  >
    <SEO 
      title="Experience | React & Node.js Developer" 
      description="My professional experience as a Web Developer, building scalable and performant web applications."
      url="https://ayanportfolio.in/experience"
    />
    <Experience />
  </motion.div>
);

const ProjectsPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="pt-20"
  >
    <SEO 
      title="Projects | Custom Web Development" 
      description="Explore my recent projects, including business websites, landing pages, and web applications built with React and Tailwind CSS."
      url="https://ayanportfolio.in/projects"
      jsonLd={getPortfolioSchema("https://ayanportfolio.in/projects")}
    />
    <Projects />
  </motion.div>
);

const ServicesPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="pt-20"
  >
    <SEO 
      title="Web Development Services | Bhopal" 
      description="We offer professional website development, UI/UX design, backend development, and performance optimization for local businesses."
      url="https://ayanportfolio.in/services"
      jsonLd={professionalServiceSchema}
    />
    <Services />
  </motion.div>
);

const ContactPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="pt-20"
  >
    <SEO 
      title="Contact | Ayan Web Solutions" 
      description="Get in touch to discuss your next web development project. We build fast, professional websites for businesses."
      url="https://ayanportfolio.in/contact"
    />
    <Contact />
  </motion.div>
);

const BlogPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="pt-20 min-h-screen flex items-center justify-center"
  >
    <SEO 
      title="Blog | Web Development & SEO" 
      description="Read our latest articles on React, technical SEO, and modern web development."
      url="https://ayanportfolio.in/blog"
    />
    <div className="text-center">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
        Blog Coming Soon
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        Working on amazing blog content for you!
      </p>
    </div>
  </motion.div>
);

const PortfolioPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="pt-20"
  >
    <SEO 
      title="Portfolio | Ayan Web Solutions" 
      description="View our portfolio of business websites, landing pages, and e-commerce stores."
      url="https://ayanportfolio.in/portfolio"
      jsonLd={getPortfolioSchema("https://ayanportfolio.in/portfolio")}
    />
    <Projects />
    <About />
  </motion.div>
);

// Privacy and Terms Pages
const PrivacyPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="pt-20 min-h-screen px-4 sm:px-6 lg:px-8"
  >
    <div className="max-w-4xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Privacy Policy
      </h1>
      <div className="prose prose-lg dark:prose-dark">
        <p className="text-gray-600 dark:text-gray-400">
          Privacy policy content will be updated soon...
        </p>
      </div>
    </div>
  </motion.div>
);

const TermsPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="pt-20 min-h-screen px-4 sm:px-6 lg:px-8"
  >
    <div className="max-w-4xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Terms of Service
      </h1>
      <div className="prose prose-lg dark:prose-dark">
        <p className="text-gray-600 dark:text-gray-400">
          Terms of service content will be updated soon...
        </p>
      </div>
    </div>
  </motion.div>
);

// Main App Component with Router Logic
const AppContent = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="relative">
        {/* Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        
        <main className="relative z-10">
          <Suspense fallback={<div className="flex h-screen items-center justify-center text-xl text-gray-500">Loading...</div>}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/web-development" element={<ServicesPage />} />
                <Route path="/services/ui-ux-design" element={<ServicesPage />} />
                <Route path="/services/backend-development" element={<ServicesPage />} />
                <Route path="/services/performance" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                {/* 404 Page */}
                <Route path="*" element={
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="pt-20 min-h-screen flex items-center justify-center"
                  >
                    <div className="text-center">
                      <h1 className="text-6xl font-bold text-gray-400 mb-4">404</h1>
                      <h2 className="text-2xl font-semibold mb-4 text-gray-600 dark:text-gray-300">
                        Page Not Found
                      </h2>
                      <p className="text-gray-500 dark:text-gray-400 mb-8">
                        The page you're looking for doesn't exist.
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.href = '/'}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                      >
                        Go Home
                      </motion.button>
                    </div>
                  </motion.div>
                } />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        className="z-50"
      />
    </div>
  );
};

// Main App Component with Router Wrapper
function App() {
  return (
    <HelmetProvider>
      <LenisProvider>
        <Router>
          <AppContent />
        </Router>
      </LenisProvider>
    </HelmetProvider>
  );
}

export default App;