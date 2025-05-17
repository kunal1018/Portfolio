import React from 'react';
import { Play, Info } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
      style={{ 
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url("https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto md:mx-0 md:ml-16 lg:ml-24 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Full-Stack Developer & Designer
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Creating digital experiences that blend creativity with functionality.
            Specialized in modern web technologies and intuitive user interfaces.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded transition-colors"
            >
              <Play size={20} />
              View Projects
            </a>
            <a 
              href="#about" 
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded transition-colors"
            >
              <Info size={20} />
              More Info
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;