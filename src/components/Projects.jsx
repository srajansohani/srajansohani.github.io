import React from 'react';
import { motion } from 'framer-motion';
import { Github, Play, Code, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolio.json';

function Projects() {
  const { projects } = portfolioData;

  const generateSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <section id="projects" className="py-20 relative bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-[#d4af37] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image Preview Area */}
              <div className="h-56 bg-gray-50 relative overflow-hidden flex-shrink-0 group-hover:bg-[#f6f0dd] transition-colors duration-500">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-300 group-hover:text-[#d4af37]/50 transition-colors duration-500">
                      <Code size={64} strokeWidth={1} />
                    </div>
                  )}
                  
                  {/* Status Badge */}
                  {project.status === 'in-progress' && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/20">
                        In Progress
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/5 to-transparent"></div>
              </div>
              
              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#d4af37] transition-colors">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-sm line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-[#0ea5e9]/10 text-[#0ea5e9] text-xs font-semibold rounded-lg border border-[#0ea5e9]/10">
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded-lg">
                            +{project.technologies.length - 3}
                        </span>
                    )}
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  {project.hasLiveSite !== false && project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 px-4 py-2.5 bg-[#d4af37] text-white font-semibold rounded-xl hover:bg-[#c29e2f] transition-all duration-300 shadow-md shadow-[#d4af37]/20">
                      <Play size={16} fill="currentColor"/>
                      Try It
                    </a>
                  )}
                  {project.hasLiveSite === false && project.setupLink && (
                    <a href={project.setupLink} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 px-4 py-2.5 bg-[#0ea5e9] text-white font-semibold rounded-xl hover:bg-[#0284c7] transition-all duration-300 shadow-md shadow-[#0ea5e9]/20">
                      <BookOpen size={16} />
                      Setup
                    </a>
                  )}
                  <Link to={`/project/${generateSlug(project.title)}`} className={`flex-1 flex justify-center items-center gap-2 px-4 py-2.5 bg-white text-gray-700 font-semibold rounded-xl border border-gray-300 hover:bg-gray-50 hover:text-gray-900 transition-all duration-300 ${(!project.link || project.hasLiveSite === false) && !project.setupLink ? 'w-full' : ''}`}>
                    Know More
                  </Link>
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
