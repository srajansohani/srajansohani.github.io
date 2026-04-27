import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

function About() {
  const { education, experience } = portfolioData;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           variants={fadeIn}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">About Me</h2>
          <div className="w-20 h-1.5 bg-[#d4af37] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Work Experience */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
          >
            <div className="flex items-center mb-8">
                <div className="p-3 bg-[#d4af37]/10 rounded-lg text-[#d4af37] mr-4">
                    <Briefcase size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Experience</h3>
            </div>
            
            <div className="space-y-8 border-l-2 border-gray-200 ml-5 pl-8 relative">
              {experience.map((job, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <span className="absolute -left-[41px] top-1 px-2.5 py-1 bg-white border-2 border-[#d4af37] rounded-full text-[#d4af37] font-bold text-xs ring-4 ring-[#fafaf9]">
                      {index + 1}
                  </span>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{job.role}</h4>
                    <p className="text-lg text-[#d4af37] font-semibold mb-2">{job.company}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center"><Calendar size={14} className="mr-1.5 text-gray-400"/> {job.duration}</div>
                        <div className="flex items-center"><MapPin size={14} className="mr-1.5 text-gray-400"/> {job.location}</div>
                    </div>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600 leading-relaxed text-sm">
                        {job.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.4 }}
             variants={fadeIn}
          >
             <div className="flex items-center mb-8">
                <div className="p-3 bg-[#0ea5e9]/10 rounded-lg text-[#0ea5e9] mr-4">
                    <GraduationCap size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Education</h3>
            </div>

            <div className="space-y-8 border-l-2 border-gray-200 ml-5 pl-8 relative">
              {education.map((edu, index) => (
                 <div key={index} className="relative">
                     <span className="absolute -left-[39px] top-1.5 w-5 h-5 bg-[#0ea5e9] rounded-full ring-4 ring-[#fafaf9]"></span>
                    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                        <h4 className="text-xl font-bold text-gray-900 mb-1">{edu.school}</h4>
                        <p className="text-lg text-gray-700 font-medium mb-3">{edu.degree}</p>
                         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm text-gray-500">
                             <div className="flex items-center"><Calendar size={14} className="mr-1.5 text-gray-400"/> {edu.duration}</div>
                             <div className="px-3 py-1 bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-full text-xs font-bold inline-block w-max border border-[#0ea5e9]/20">{edu.grade}</div>
                        </div>
                    </div>
                 </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;