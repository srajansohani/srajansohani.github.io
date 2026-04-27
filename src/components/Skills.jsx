import React from 'react';
import { motion } from 'framer-motion';
import { Code, Trophy, Cpu } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

function Skills() {
  const { skills } = portfolioData;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Skills & Achievements</h2>
          <div className="w-20 h-1.5 bg-[#d4af37] mx-auto rounded-full"></div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Technical Skills - Main Group */}
          <motion.div variants={item} className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-shadow duration-300 col-span-1">
             <div className="flex items-center mb-6 pb-4 border-b border-gray-100">
                <div className="p-2.5 bg-[#d4af37]/10 rounded-xl text-[#d4af37] mr-4">
                    <Code size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Technical Stack</h3>
            </div>
            <div className="space-y-6">
                {skills["Technical Skills"].map((category, idx) => (
                    <div key={idx}>
                        <h4 className="font-semibold text-gray-500 text-xs uppercase tracking-wider mb-3">{category.category}</h4>
                        <div className="flex flex-wrap gap-2">
                            {category.items.map((skill, i) => (
                                <span key={i} className="px-3 py-1.5 bg-[#0ea5e9]/10 text-[#0ea5e9] text-xs rounded-lg font-semibold border border-[#0ea5e9]/10">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
          </motion.div>
          
           {/* Others / Tools */}
           <motion.div variants={item} className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-shadow duration-300 col-span-1">
             <div className="flex items-center mb-6 pb-4 border-b border-gray-100">
                <div className="p-2.5 bg-purple-100 rounded-xl text-purple-600 mr-4">
                    <Cpu size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Tools & DevOps</h3>
            </div>
            <div className="space-y-6">
                {skills["Others"].map((category, idx) => (
                    <div key={idx}>
                        <h4 className="font-semibold text-gray-500 text-xs uppercase tracking-wider mb-3">{category.category}</h4>
                         <div className="flex flex-wrap gap-2">
                             {category.items.map((skill, i) => (
                                <span key={i} className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-lg font-semibold border border-gray-200 inline-block w-max">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
          </motion.div>

          {/* Achievements (Deep Dark Hybrid card) */}
          <motion.div variants={item} className="bg-[#0f0f1a] rounded-2xl shadow-xl p-8 text-white col-span-1 border border-gray-800">
            <div className="flex items-center mb-6 pb-4 border-b border-gray-800">
                <div className="p-2.5 bg-[#d4af37]/20 border border-[#d4af37]/30 rounded-xl text-[#d4af37] mr-4">
                    <Trophy size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-100">Achievements</h3>
            </div>
            <ul className="space-y-4">
                {skills["Achievements"].map((achievement, idx) => (
                    <li key={idx} className="flex items-start text-gray-300 text-sm leading-relaxed group">
                        <span className="mr-3 mt-1.5 flex-shrink-0 relative">
                             <span className="absolute inset-0 bg-[#d4af37] blur-sm opacity-50 group-hover:opacity-100 transition-opacity"></span>
                             <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full block relative z-10"></span>
                        </span>
                        <span>{achievement}</span>
                    </li>
                ))}
            </ul>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
