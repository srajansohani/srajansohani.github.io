import React from 'react';

function Resume() {
  // The path to the resume file in the public directory
  const resumePath = '/Resume_2025 (2).pdf';

  return (
    <section id="resume" className="py-16 md:py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">Resume</h2>
        
        <div className="flex justify-center mb-8">
          <a 
            href={resumePath} 
            download="Resume_Srajan_Sohani.pdf" // Suggest a user-friendly download filename
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>

        {/* Optional: Embed the PDF. Note: PDF embedding can be inconsistent across browsers and devices. */}
        <div className="w-full" style={{ height: '80vh' }}>
           <iframe src={`${resumePath}#toolbar=0`} width="100%" height="100%" title="Srajan Sohani's Resume" style={{ border: 'none' }}></iframe>
        </div>
      </div>
    </section>
  );
}

export default Resume; 