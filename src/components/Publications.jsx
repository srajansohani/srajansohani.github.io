import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Calendar } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

function Publications() {
  const { publications } = portfolioData;

  if (!publications || publications.length === 0) return null;

  return (
    <section id="publications" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Publications</h2>
          <div className="w-20 h-1.5 bg-[#d4af37] mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-6">
          {publications.map((pub, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                
                {/* File Icon Block */}
                <div className="hidden sm:flex flex-shrink-0 mt-1">
                   <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-sm text-[#d4af37]">
                      <FileText size={32} />
                   </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-[#d4af37] transition-colors leading-snug">
                     {pub.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    <span className="text-[#0ea5e9] bg-[#0ea5e9]/10 px-3 py-1 rounded-lg">{pub.conference}</span>
                    <span className="flex items-center"><Calendar size={14} className="mr-1.5"/> {pub.date}</span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {pub.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex-shrink-0 sm:pt-1">
                  <a href={pub.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-700 font-semibold text-sm rounded-xl border border-gray-200 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-sm">
                    Read Paper
                    <ExternalLink size={16} />
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

export default Publications;
