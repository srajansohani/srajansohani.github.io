import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Menu, X } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    { name: 'Publications', to: '/#publications' },
    { name: 'Blog', to: '/blog', isRouterLink: true },
    { name: 'Resume', to: '/resume', isRouterLink: true },
    { name: 'Contact', to: '/#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 pt-6 px-4 flex justify-center">
      {/* Pill-shaped container */}
      <div className={`flex justify-between items-center px-6 py-3 rounded-full transition-all duration-300 w-full max-w-4xl border border-gray-100 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg shadow-gray-200/50' : 'bg-white/50 backdrop-blur-sm'}`}>
        
        <HashLink to="/#" className="text-xl font-bold text-gray-900 hover:text-[#d4af37] transition tracking-tight flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#d4af37] text-white flex items-center justify-center font-bold text-sm">
            SS
          </div>
          <span className="hidden sm:block">{portfolioData.personalInfo.name}</span>
        </HashLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-1 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname + location.hash === link.to;
            const linkClasses = `px-4 py-2 rounded-full font-medium transition-all duration-200 ${isActive ? 'bg-[#d4af37] text-white shadow-md' : 'text-gray-600 hover:text-[#d4af37] hover:bg-gray-50'}`;
            
            return (
              <li key={link.name}>
                {link.isRouterLink ? (
                  <Link to={link.to} className={linkClasses}>{link.name}</Link>
                ) : (
                  <HashLink to={link.to} className={linkClasses} smooth>{link.name}</HashLink>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 bg-gray-50 p-2 rounded-full hover:bg-gray-100 transition" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform origin-top">
          <ul className="flex flex-col py-2 px-2 space-y-1">
            {navLinks.map((link) => {
               const isActive = location.pathname + location.hash === link.to;
               const linkClasses = `block px-4 py-3 rounded-xl font-medium transition-colors ${isActive ? 'bg-[#d4af37]/10 text-[#d4af37]' : 'text-gray-700 hover:bg-gray-50'}`;
               return (
                <li key={link.name}>
                  {link.isRouterLink ? (
                    <Link to={link.to} onClick={() => setIsMenuOpen(false)} className={linkClasses}>
                      {link.name}
                    </Link>
                  ) : (
                    <HashLink to={link.to} smooth onClick={() => setIsMenuOpen(false)} className={linkClasses}>
                      {link.name}
                    </HashLink>
                  )}
                </li>
               );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;