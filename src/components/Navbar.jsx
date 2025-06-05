import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-10 top-0 left-0 py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <HashLink to="/#" className="text-xl md:text-2xl font-bold text-gray-800 hover:text-blue-600 transition">Srajan Sohani</HashLink>
        <ul className="flex space-x-4 md:space-x-6 items-center text-gray-600 text-sm md:text-base">
          <li><HashLink to="/#about" className="hover:text-blue-600 transition">About</HashLink></li>
          <li><HashLink to="/#projects" className="hover:text-blue-600 transition">Projects</HashLink></li>
          <li><HashLink to="/#blog" className="hover:text-blue-600 transition">Blog</HashLink></li>
          <li><Link to="/resume" className="hover:text-blue-600 transition">Resume</Link></li>
          <li><HashLink to="/#contact" className="hover:text-blue-600 transition">Contact</HashLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 