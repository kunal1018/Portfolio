import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ThumbsUp, Github, Play, Info } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  longDescription: string;
  features: string[];
  match: number;
  customBackground?: boolean;
  demoUrl?: string;
  githubUrl?: string;
}

const ProjectsSection: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: 'Keeper — AI-Powered Finance Tracker',
      description: 'Building an AI-powered personal finance platform helping users track expenses, categorize spending, and gain real-time insights to improve financial literacy.',
      longDescription: 'Keeper is a cutting-edge personal finance platform that leverages artificial intelligence to help users better understand and manage their finances. The platform combines advanced AI capabilities with intuitive design to deliver personalized financial insights and recommendations.',
      features: [
        'Developing backend with Python, Flask, and Supabase for secure data storage and authentication',
        'Designing intuitive frontend using React.js for seamless user experience',
        'Integrating OpenAI\'s GPT models for personalized financial insights',
        'Implementing AI/ML for automated expense classification',
        'Architecting for scalability using Supabase and AWS infrastructure',
        'Building CI/CD pipelines for continuous delivery'
      ],
      techStack: ['Python', 'Flask', 'React.js', 'Supabase', 'OpenAI GPT', 'AWS', 'CI/CD'],
      image: 'https://images.pexels.com/photos/7567473/pexels-photo-7567473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      match: 99,
      customBackground: true,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Sales Data Analysis Dashboard',
      description: 'Analyzed a retail company\'s sales dataset to identify trends in revenue, product performance, and customer behavior.',
      longDescription: 'An interactive dashboard that transforms complex sales data into actionable insights. Features include real-time sales tracking, customer segmentation analysis, and predictive analytics for future sales trends.',
      features: [
        'Real-time sales monitoring',
        'Customer behavior analysis',
        'Product performance metrics',
        'Predictive sales forecasting'
      ],
      techStack: ['Python', 'Power BI', 'Matplotlib', 'Pandas'],
      image: 'https://images.pexels.com/photos/7567473/pexels-photo-7567473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      match: 95
    },
    {
      title: 'Customer Churn Analysis',
      description: 'Analyzed customer data to identify factors contributing to churn for a subscription-based service.',
      longDescription: 'A machine learning-powered system that predicts customer churn risk and provides recommendations for retention strategies. The platform analyzes customer interaction patterns, service usage, and feedback to identify at-risk customers.',
      features: [
        'Churn prediction modeling',
        'Customer sentiment analysis',
        'Automated risk alerts',
        'Retention strategy recommendations'
      ],
      techStack: ['Python', 'Scikit-Learn', 'Seaborn', 'NumPy'],
      image: 'https://images.pexels.com/photos/7567558/pexels-photo-7567558.jpeg?auto=compress&cs=tintsrgb&w=1260&h=750&dpr=1',
      match: 92
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-netflix-red/20 via-black to-black">
      <div className="container mx-auto px-4 py-12 h-[calc(100vh-5rem)] flex flex-col">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-8 font-netflix gradient-text">Featured Projects</h1>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 overflow-y-auto pr-4 -mr-4 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-zinc-800/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className={`relative group perspective ${
                  expandedProject === index ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                onMouseEnter={() => setExpandedProject(index)}
                onMouseLeave={() => setExpandedProject(null)}
              >
                <motion.div 
                  className="relative h-full rounded-xl overflow-hidden shadow-2xl transition-all duration-300 transform-gpu bg-zinc-900/50 backdrop-blur-sm border border-white/5"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {!project.customBackground && (
                    <div 
                      className="aspect-video bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                  )}
                  
                  {/* Content overlay */}
                  <AnimatePresence>
                    {expandedProject === index ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 p-6 flex flex-col bg-gradient-to-t from-black via-black/90 to-black/70"
                      >
                        <div className="space-y-4">
                          <div className="flex items-start justify-between">
                            <motion.h2 
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-2xl font-bold text-white"
                            >
                              {project.title}
                            </motion.h2>
                            <motion.span 
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="text-green-500 font-semibold flex items-center gap-2"
                            >
                              <ThumbsUp size={16} />
                              {project.match}% Match
                            </motion.span>
                          </div>
                          
                          <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-gray-300"
                          >
                            {project.longDescription}
                          </motion.p>
                          
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-wrap gap-2"
                          >
                            {project.techStack.map((tech, i) => (
                              <span 
                                key={i} 
                                className="text-sm px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </motion.div>

                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-2"
                          >
                            {project.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2 text-gray-300">
                                <Plus size={16} className="text-red-500" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </motion.div>
                        </div>

                        <div className="mt-auto pt-6 flex items-center gap-4">
                          {project.demoUrl && (
                            <motion.a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Play size={16} />
                              Live Demo
                            </motion.a>
                          )}
                          
                          {project.githubUrl && (
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Github size={16} />
                              View Code
                            </motion.a>
                          )}
                          
                          <motion.button
                            className="ml-auto text-gray-400 hover:text-red-500 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Info size={20} />
                          </motion.button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 flex flex-col justify-end"
                      >
                        <h2 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                          {project.title}
                        </h2>
                        <p className="text-gray-400 mt-2 line-clamp-2">{project.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;