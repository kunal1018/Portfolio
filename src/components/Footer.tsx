import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-black border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-red-600 font-bold text-2xl">PORTFOLIO</a>
          </div>
          
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; {currentYear} Developer Name. All rights reserved.
            </p>
          </div>
          
          <div>
            <nav className="flex items-center space-x-6">
              <a href="#hero" className="text-gray-400 hover:text-red-600 transition-colors text-sm">Home</a>
              <a href="#projects" className="text-gray-400 hover:text-red-600 transition-colors text-sm">Projects</a>
              <a href="#about" className="text-gray-400 hover:text-red-600 transition-colors text-sm">About</a>
              <a href="#contact" className="text-gray-400 hover:text-red-600 transition-colors text-sm">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;