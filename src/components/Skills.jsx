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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Skills & Achievements</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Technical Skills - Main Group */}
          <motion.div variants={item} className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300 col-span-1 lg:col-span-1">
             <div className="flex items-center mb-6">
                <div className="p-2.5 bg-blue-100 rounded-lg text-blue-600 mr-3">
                    <Code size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Technical Stack</h3>
            </div>
            <div className="space-y-4">
                {skills["Technical Skills"].map((category, idx) => (
                    <div key={idx}>
                        <h4 className="font-semibold text-gray-800 text-sm mb-1">{category.category}</h4>
                        <div className="flex flex-wrap gap-2">
                            {category.items.map((skill, i) => (
                                <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium border border-gray-200">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
          </motion.div>
          
           {/* Others / Tools */}
           <motion.div variants={item} className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300 col-span-1 lg:col-span-1">
             <div className="flex items-center mb-6">
                <div className="p-2.5 bg-purple-100 rounded-lg text-purple-600 mr-3">
                    <Cpu size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Tools & DevOps</h3>
            </div>
            <div className="space-y-4">
                {skills["Others"].map((category, idx) => (
                    <div key={idx}>
                        <h4 className="font-semibold text-gray-800 text-sm mb-1">{category.category}</h4>
                         <div className="flex flex-wrap gap-2">
                             {category.items.map((skill, i) => (
                                <span key={i} className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-md font-medium border border-purple-100">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div variants={item} className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg p-8 text-white col-span-1 lg:col-span-1">
            <div className="flex items-center mb-6">
                <div className="p-2.5 bg-white/20 rounded-lg text-white mr-3">
                    <Trophy size={24} />
                </div>
                <h3 className="text-xl font-bold">Achievements</h3>
            </div>
            <ul className="space-y-3">
                {skills["Achievements"].map((achievement, idx) => (
                    <li key={idx} className="flex items-start text-blue-50 text-sm leading-relaxed">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0"></span>
                        {achievement}
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
