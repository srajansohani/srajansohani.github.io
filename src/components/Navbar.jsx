import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Menu, X } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: '/#about' },
    { name: 'Projects', to: '/#projects' },
    { name: 'Blog', to: '/#blog' },
    { name: 'Resume', to: '/resume', isRouterLink: true }, // Special case for pure router link
    { name: 'Contact', to: '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <HashLink to="/#" className="text-xl md:text-2xl font-bold text-gray-900 hover:text-blue-600 transition tracking-tight">
          {portfolioData.personalInfo.name}
        </HashLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
                {link.isRouterLink ? (
                     <Link to={link.to} className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">{link.name}</Link>
                ) : (
                    <HashLink to={link.to} className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">{link.name}</HashLink>
                )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg absolute top-full left-0 w-full shadow-lg border-t border-gray-100">
          <ul className="flex flex-col py-4 px-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                  {link.isRouterLink ? (
                      <Link to={link.to} onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 font-medium">
                          {link.name}
                      </Link>
                  ) : (
                    <HashLink to={link.to} onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 font-medium">
                      {link.name}
                    </HashLink>
                  )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 