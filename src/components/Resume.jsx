import React from 'react';

function Resume() {
  const resumePath = '/Resume_2026.pdf';

  return (
    <section id="resume" className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Resume</h2>
          <div className="w-20 h-1.5 bg-[#d4af37] mx-auto rounded-full mb-8"></div>
        </div>
        
        <div className="flex justify-center mb-10">
          <a 
            href={resumePath} 
            download="Srajan_Sohani_Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#d4af37] text-white font-bold text-lg rounded-full shadow-lg shadow-[#d4af37]/30 hover:bg-[#c29e2f] transition-all duration-300 transform hover:-translate-y-1"
          >
            Download PDF
          </a>
        </div>

        <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 p-2 lg:p-4" style={{ height: '85vh' }}>
           <iframe src={`${resumePath}#toolbar=0&navpanes=0`} width="100%" height="100%" title="Srajan Sohani's Resume" className="rounded-xl border border-gray-100" style={{ border: 'none' }}></iframe>
        </div>
      </div>
    </section>
  );
}

export default Resume;