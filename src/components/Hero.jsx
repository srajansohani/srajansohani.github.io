import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowRight, Download } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Typewriter = ({ phrases, period = 2000 }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let ticker = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting]);

  const handleType = () => {
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

    setTypingSpeed(isDeleting ? 30 : 150);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), period);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  return <span className="border-r-2 border-[#d4af37] pr-1">{text}</span>;
}

function Hero() {
  const { name, image, email } = portfolioData.personalInfo;
  
  // Taglines based on prompt
  const taglines = ["Software Engineer", "ML Enthusiast", "MS Applicant"];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center min-h-[90vh] overflow-hidden container mx-auto px-4 max-w-6xl">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between relative z-10 w-full gap-12">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", staggerChildren: 0.15 }}
          className="text-center lg:text-left lg:w-3/5"
        >
          {/* Status Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start"
          >
            <span className="inline-flex items-center px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] text-xs sm:text-sm font-semibold rounded-full border border-[#d4af37]/20 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mr-2 animate-pulse"></span>
              Open to MS 2025–26
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-[#0ea5e9]/10 text-[#0ea5e9] text-xs sm:text-sm font-semibold rounded-full border border-[#0ea5e9]/20 uppercase tracking-widest">
              Available for Internships
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-500 font-medium text-lg sm:text-xl mb-2"
          >
            Hello, it's me
          </motion.h2>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 text-gray-900 tracking-tight"
          >
            {name}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-6 font-semibold h-10"
          >
             I'm a <span className="text-[#d4af37]"><Typewriter phrases={taglines} /></span>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Applying to top MS CS/ML programs in the US. Passionate about building robust systems and exploring machine learning architectures. Let's create something extraordinary.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
          >
            <a href="#projects" className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-[#d4af37] text-white font-semibold rounded-full shadow-lg shadow-[#d4af37]/30 hover:bg-[#c29e2f] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/resume" className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-white text-gray-800 font-semibold rounded-full shadow-sm hover:shadow-md border border-gray-200 transition-all duration-300 transform hover:-translate-y-1">
              Download Resume
              <Download size={18} className="text-gray-500 group-hover:text-gray-900" />
            </a>
          </motion.div>

          {/* Social Icons floating */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex gap-4 justify-center lg:justify-start"
          >
            <a href="https://github.com/srajansohani" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white shadow-sm hover:shadow-md flex items-center justify-center text-gray-600 hover:text-black border border-gray-100 transition-all hover:-translate-y-1">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/srajan-sohani-589448223" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white shadow-sm hover:shadow-md flex items-center justify-center text-gray-600 hover:text-[#0A66C2] border border-gray-100 transition-all hover:-translate-y-1">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${email}`} className="w-12 h-12 rounded-full bg-white shadow-sm hover:shadow-md flex items-center justify-center text-gray-600 hover:text-red-500 border border-gray-100 transition-all hover:-translate-y-1">
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:w-2/5 flex justify-center lg:justify-end relative"
        >
          {/* Animated decorative ring */}
          <div className="absolute inset-0 m-auto w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-2 border-dashed border-[#d4af37]/30 animate-[spin_30s_linear_infinite]"></div>
          
          <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-gradient-to-tr from-[#d4af37] to-[#e0f2fe] shadow-2xl">
             <div className="w-full h-full rounded-full overflow-hidden bg-white">
                {/* Fallback image if /my-photo.jpeg fails or is absent initially */}
                <img 
                  src={image || "/placeholder.jpg"} 
                  alt={name} 
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400" }}
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;