import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft, Code, BookOpen } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import portfolioData from '../data/portfolio.json';

function ProjectDetail() {
  const { slug } = useParams();
  const { projects } = portfolioData;

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const projectIndex = projects.findIndex(p => p.title.toLowerCase().replace(/\s+/g, '-') === slug);
  const project = projects[projectIndex];
  
  // Basic Next Project logic
  const nextProject = projects[(projectIndex + 1) % projects.length];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-500 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <Link to="/#projects" className="text-[#d4af37] hover:underline font-medium">← Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Huge Hero Header */}
      <section 
        className={`pt-32 pb-16 md:pt-48 md:pb-24 border-b border-gray-100 relative overflow-hidden transition-colors duration-500 ${project.image ? 'text-white bg-gray-900' : 'bg-gray-50'}`}
        style={project.image ? { 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${project.image})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        } : {}}
      >
        {/* Subtle decorative background - only show if no image */}
        {!project.image && (
          <>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 w-72 h-72 bg-[#0ea5e9]/5 rounded-full blur-3xl"></div>
          </>
        )}

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <Link to="/#projects" className={`inline-flex items-center transition-colors mb-10 font-bold text-xs uppercase tracking-widest group ${project.image ? 'text-gray-300 hover:text-[#d4af37]' : 'text-gray-500 hover:text-[#d4af37]'}`}>
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            All Projects
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={`text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-8 ${project.image ? 'text-white' : 'text-gray-900'}`}>
              {project.title}
            </h1>

            <div className={`grid md:grid-cols-4 gap-8 md:border-l-2 md:pl-8 ${project.image ? 'border-white/20' : 'border-gray-200'}`}>
              <div className={`md:col-span-3 text-lg md:text-xl font-medium leading-relaxed ${project.image ? 'text-gray-200' : 'text-gray-600'}`}>
                 {project.description}
              </div>
              <div className="md:col-span-1 flex flex-col gap-4 justify-center">
                 {project.hasLiveSite !== false && project.link && (
                   <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#d4af37] text-white font-bold rounded-2xl hover:bg-[#c29e2f] transition-all duration-300 shadow-xl shadow-[#d4af37]/20 transform hover:-translate-y-1">
                    Live Site
                    <ExternalLink size={18} />
                   </a>
                 )}
                 {project.setupLink && (
                    <a href={project.setupLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0ea5e9] text-white font-bold rounded-2xl hover:bg-[#0284c7] transition-all duration-300 shadow-xl shadow-[#0ea5e9]/20 transform hover:-translate-y-1">
                      <BookOpen size={18} />
                      Setup Guide
                    </a>
                  )}
                 <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-xl transform hover:-translate-y-1">
                  <Github size={18} />
                  GitHub
                 </a>
                 {project.video && (
                    <button 
                      onClick={() => document.getElementById('demo-video')?.scrollIntoView({ behavior: 'smooth' })}
                      className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#d4af37] font-bold rounded-2xl border-2 border-[#d4af37]/20 hover:border-[#d4af37] hover:bg-[#d4af37]/5 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                    >
                      Watch Demo
                    </button>
                  )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Detail */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-5 py-2.5 bg-gray-50 text-gray-700 text-sm font-bold uppercase tracking-wider rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Demo Video Section */}
          {project.video && (
            <motion.div 
              id="demo-video"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                <span className="w-8 h-1 bg-[#d4af37] rounded-full"></span>
                Product Demo
              </h2>
              <div className="bg-black rounded-3xl overflow-hidden shadow-2xl border border-gray-800 aspect-video relative group">
                {project.video.includes('drive.google.com') || project.video.includes('loom.com') || project.video.includes('youtube.com') ? (
                  <iframe 
                    src={project.video.replace('/view', '/preview').replace('loom.com/share/', 'loom.com/embed/')}
                    className="w-full h-full border-0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video 
                    src={project.video} 
                    controls 
                    className="w-full h-full object-contain"
                    poster={project.videoPoster || ""}
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </motion.div>
          )}

          {/* Expansive Project Visuals & Case Study */}
          {/* Cover Image removed from here as it's now the Hero Background */}

          {project.caseStudy ? (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full bg-white rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm"
            >
              <div className="markdown-content">
                <ReactMarkdown>{project.caseStudy}</ReactMarkdown>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full aspect-video bg-gray-50 rounded-3xl border border-gray-100 flex items-center justify-center shadow-inner overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-[#d4af37]/5 group-hover:bg-[#d4af37]/10 transition-colors duration-700"></div>
              <div className="text-gray-300 flex flex-col items-center">
                <Code size={80} strokeWidth={1} className="mb-4 text-gray-200" />
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">Detailed Case Study Coming Soon</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Next Project Bottom Navigation */}
      {nextProject && (
        <section className="border-t border-gray-100 pt-16">
           <div className="container mx-auto px-4 max-w-5xl text-center">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Next Project</p>
              <Link to={`/project/${nextProject.title.toLowerCase().replace(/\s+/g, '-')}`} className="group inline-block">
                 <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 group-hover:text-[#d4af37] transition-colors tracking-tight">
                    {nextProject.title}
                 </h2>
              </Link>
           </div>
        </section>
      )}

    </div>
  );
}

export default ProjectDetail;
