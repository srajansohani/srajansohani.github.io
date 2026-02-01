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
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           variants={fadeIn}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">About Me</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
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
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600 mr-4">
                    <Briefcase size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Work Experience</h3>
            </div>
            
            <div className="space-y-8 border-l-2 border-gray-100 ml-5 pl-8 relative">
              {experience.map((job, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <span className="absolute -left-[41px] top-1 px-2.5 py-1 bg-white border-2 border-blue-600 rounded-full text-blue-600 font-bold text-xs ring-4 ring-white">
                      {index + 1}
                  </span>
                  
                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 border border-gray-100">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{job.role}</h4>
                    <p className="text-lg text-blue-700 font-semibold mb-2">{job.company}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center"><Calendar size={14} className="mr-1.5"/> {job.duration}</div>
                        <div className="flex items-center"><MapPin size={14} className="mr-1.5"/> {job.location}</div>
                    </div>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-gray-700 leading-relaxed">
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
                <div className="p-3 bg-green-100 rounded-lg text-green-600 mr-4">
                    <GraduationCap size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Education</h3>
            </div>

            <div className="space-y-8 border-l-2 border-gray-100 ml-5 pl-8">
              {education.map((edu, index) => (
                 <div key={index} className="relative">
                     <span className="absolute -left-[39px] top-1.5 w-5 h-5 bg-green-600 rounded-full ring-4 ring-white"></span>
                    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 border border-gray-100">
                        <h4 className="text-xl font-bold text-gray-900 mb-1">{edu.school}</h4>
                        <p className="text-lg text-gray-700 font-medium mb-2">{edu.degree}</p>
                         <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                             <div className="flex items-center"><Calendar size={14} className="mr-1.5"/> {edu.duration}</div>
                             <div className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-bold">{edu.grade}</div>
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