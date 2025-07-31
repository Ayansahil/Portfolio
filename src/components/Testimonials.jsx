// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// const Testimonials = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const testimonials = [
//     {
//       id: 1,
//       name: 'Sarah Johnson',
//       role: 'CEO, TechStart Inc.',
//       avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
//       content: 'Ayan delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise made our project a huge success.',
//       rating: 5,
//       project: 'E-commerce Platform'
//     },
//     {
//       id: 2,
//       name: 'Michael Chen',
//       role: 'Product Manager, InnovateLab',
//       avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
//       content: 'Working with Ayan was a pleasure. He understood our vision perfectly and translated it into a beautiful, functional application. Highly recommended!',
//       rating: 5,
//       project: 'Task Management App'
//     },
//     {
//       id: 3,
//       name: 'Emily Rodriguez',
//       role: 'Marketing Director, Creative Agency',
//       avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
//       content: 'The website Ayan created for us not only looks amazing but also performs incredibly well. Our conversion rate increased by 40% after the launch.',
//       rating: 5,
//       project: 'Portfolio Website'
//     },
//     {
//       id: 4,
//       name: 'David Park',
//       role: 'Founder, StartupHub',
//       avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
//       content: 'Ayan\'s technical skills are top-notch, but what sets him apart is his ability to communicate complex ideas clearly and his commitment to deadlines.',
//       rating: 5,
//       project: 'API Development'
//     },
//     {
//       id: 5,
//       name: 'Lisa Thompson',
//       role: 'CTO, FinanceFlow',
//       avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
//       content: 'We needed a complex financial dashboard, and Ayan delivered exactly what we envisioned. The user experience is intuitive and the performance is excellent.',
//       rating: 5,
//       project: 'Dashboard Application'
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   const goToTestimonial = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <section id="testimonials" className="py-20 bg-white/50 dark:bg-gray-800/50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//             Client Testimonials
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
//           <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//             What clients say about working with me
//           </p>
//         </motion.div>

//         <div className="relative max-w-4xl mx-auto">
//           {/* Main Testimonial */}
//           <div className="relative h-96 mb-8">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentIndex}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 0.5 }}
//                 className="absolute inset-0"
//               >
//                 <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-200/50 dark:border-gray-700/50 h-full flex flex-col justify-center">
//                   {/* Quote Icon */}
//                   <div className="text-blue-600 dark:text-blue-400 mb-6">
//                     <Quote size={48} />
//                   </div>

//                   {/* Testimonial Content */}
//                   <blockquote className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-medium">
//                     "{testimonials[currentIndex].content}"
//                   </blockquote>

//                   {/* Rating */}
//                   <div className="flex items-center mb-6">
//                     {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
//                       <Star
//                         key={i}
//                         size={20}
//                         className="text-yellow-400 fill-current"
//                       />
//                     ))}
//                   </div>

//                   {/* Client Info */}
//                   <div className="flex items-center">
//                     <img
//                       src={testimonials[currentIndex].avatar}
//                       alt={testimonials[currentIndex].name}
//                       className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-gray-200 dark:border-gray-600"
//                     />
//                     <div>
//                       <h4 className="text-lg font-bold text-gray-900 dark:text-white">
//                         {testimonials[currentIndex].name}
//                       </h4>
//                       <p className="text-gray-600 dark:text-gray-400">
//                         {testimonials[currentIndex].role}
//                       </p>
//                       <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
//                         {testimonials[currentIndex].project}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Navigation Controls */}
//           <div className="flex items-center justify-center space-x-4 mb-8">
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={prevTestimonial}
//               className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
//             >
//               <ChevronLeft size={24} />
//             </motion.button>

//             {/* Dots Indicator */}
//             <div className="flex space-x-2">
//               {testimonials.map((_, index) => (
//                 <motion.button
//                   key={index}
//                   whileHover={{ scale: 1.2 }}
//                   whileTap={{ scale: 0.8 }}
//                   onClick={() => goToTestimonial(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     index === currentIndex
//                       ? 'bg-blue-600 dark:bg-blue-400'
//                       : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
//                   }`}
//                 />
//               ))}
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={nextTestimonial}
//               className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
//             >
//               <ChevronRight size={24} />
//             </motion.button>
//           </div>

//           {/* Testimonial Thumbnails */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.4, duration: 0.8 }}
//             className="flex justify-center space-x-4 overflow-x-auto pb-4"
//           >
//             {testimonials.map((testimonial, index) => (
//               <motion.button
//                 key={testimonial.id}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={() => goToTestimonial(index)}
//                 className={`flex-shrink-0 p-3 rounded-xl transition-all duration-300 ${
//                   index === currentIndex
//                     ? 'bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-500/50'
//                     : 'bg-white/60 dark:bg-gray-800/60 border border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700/60'
//                 }`}
//               >
//                 <img
//                   src={testimonial.avatar}
//                   alt={testimonial.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//               </motion.button>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;