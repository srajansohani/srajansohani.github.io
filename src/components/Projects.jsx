import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-48 bg-gray-100 relative overflow-hidden group-hover:bg-blue-50 transition-colors duration-500">
                  {/* Placeholder for project image if available, or a generic pattern */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                    <Code size={48} opacity={0.5} />
                  </div>
                   {/* Overlay */}
                   <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-300"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed h-20 overflow-hidden">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                  <a href={project.github} className="flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors">
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a href={project.link} className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
