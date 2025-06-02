import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Github, CheckCircle } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  longDescription: string;
  features: string[];
  match: number;
  demoUrl?: string;
  githubUrl?: string;
}

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Add event listener when component mounts
    window.addEventListener('keydown', handleEscapeKey);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  if (!project) {
    return null;
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        duration: 0.5
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg overflow-y-auto scrollbar-netflix"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-zinc-900 rounded-lg shadow-2xl max-w-4xl w-full mx-auto my-8 border border-zinc-800 overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-black/80 text-white hover:bg-black/60 transition-colors shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close project details"
            >
              <X size={28} className="drop-shadow-lg" />
            </motion.button>

            {/* Project Image/Header */}
            <div className="relative h-64 md:h-96 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end p-6">
                <motion.h1 
                  className="text-3xl md:text-4xl font-bold text-white"
                  variants={contentVariants}
                >
                  {project.title}
                </motion.h1>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6 md:p-8 space-y-6 text-gray-300">
              <motion.p variants={contentVariants}>
                {project.longDescription}
              </motion.p>

              {/* Features */}
              <motion.div variants={contentVariants}>
                <h2 className="text-xl font-semibold text-white mb-3">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Tech Stack */}
              <motion.div variants={contentVariants}>
                <h2 className="text-xl font-semibold text-white mb-3">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 rounded-full bg-netflix-red/20 text-netflix-red border border-netflix-red/20 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={contentVariants} className="flex flex-wrap gap-4 pt-4">
                {project.demoUrl && (
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-netflix-red hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors text-lg font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play size={20} />
                    Live Demo
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg transition-colors text-lg font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    View Code
                  </motion.a>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;