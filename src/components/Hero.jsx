import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

function Hero() {
  const { name, role, bio, image } = portfolioData.personalInfo;

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-50/50 py-20 md:py-32 flex items-center min-h-screen overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between relative z-10 max-w-6xl">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left lg:w-1/2"
        >
          <div className="mb-4 inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm tracking-wide shadow-sm">
             Welcome to my portfolio
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium h-8">
             {role}
          </p>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
            {bio}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#projects" className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3.5 bg-white text-gray-700 border border-gray-300 font-semibold rounded-lg shadow hover:bg-gray-50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-center">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:w-1/2 mb-12 lg:mb-0 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-blue-200 rounded-full opacity-30 blur-2xl transform translate-x-4 translate-y-4"></div>
            <img 
              src={image} 
              alt={name} 
              className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white ring-4 ring-blue-50/50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero; 