import React from 'react';
import portfolioData from '../data/portfolio.json';
import { Heart } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-gray-200 py-8 text-center text-gray-500">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <p className="flex items-center justify-center gap-1.5 mb-2">
          Built with <Heart size={16} fill="#ef4444" className="text-red-500" /> by {portfolioData.personalInfo.name}
        </p>
        <p className="text-sm">
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
