import React from 'react';

const DUMMY_IMAGE = 'https://randomuser.me/api/portraits/men/75.jpg';

function Hero() {
  return (
    <section id="home" className="relative bg-white py-20 md:py-24 lg:py-32 flex items-center min-h-screen">
      {/* Optional: Add a subtle background pattern or gradient if needed */}
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <img src={DUMMY_IMAGE} alt="Profile" className="w-36 h-36 md:w-44 md:h-44 rounded-full shadow-xl mb-8 mx-auto object-cover border-4 border-blue-100 animate-fade-in-down" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 text-gray-800 leading-tight">Hi, I'm <span className="text-blue-600">Srajan Sohani</span></h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 font-medium">Software Developer</p>
        <a href="#projects" className="inline-block px-10 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">View My Work</a>
      </div>
    </section>
  );
}

export default Hero; 