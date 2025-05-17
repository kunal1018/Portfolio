import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  tags,
  demoUrl,
  codeUrl
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative overflow-hidden rounded-md transition-all duration-300 transform cursor-pointer"
      style={{ 
        aspectRatio: '16/9',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
        style={{ 
          backgroundImage: `url(${image})`,
          transform: isHovered ? 'scale(1.1)' : 'scale(1)'
        }}
      />

      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-95' : 'opacity-80'
        }`}
      />
      
      {/* Content */}
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        <h3 className="text-white font-bold text-xl md:text-2xl mb-2">{title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs bg-red-600/80 text-white px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <p className={`text-gray-300 text-sm mb-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 max-h-24' : 'opacity-0 max-h-0'
        } overflow-hidden`}>
          {description}
        </p>
        
        <div className={`flex gap-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {demoUrl && (
            <a 
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white text-sm py-1 px-3 rounded transition-colors"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          
          {codeUrl && (
            <a 
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 text-white text-sm py-1 px-3 rounded transition-colors"
            >
              <ExternalLink size={14} />
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;