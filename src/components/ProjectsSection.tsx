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
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      match: 92
    }
  ];

  return (
    <div className="section-container bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-netflix-red/20 via-black to-black">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-netflix bg-clip-text text-transparent bg-gradient-to-r from-netflix-red via-red-500 to-netflix-red animate-gradient">
            Featured Projects
          </h1>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-full"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div 
                className={`relative rounded-xl overflow-hidden transition-all duration-500 ${
                  hoveredProject === index ? 'scale-[1.02] shadow-2xl shadow-netflix-red/20' : ''
                }`}
                style={{ 
                  transformOrigin: 'center center',
                  willChange: 'transform'
                }}
              >
                {/* Project Image with Aspect Ratio Container */}
                <div className="relative aspect-[16/9]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 scale-[1.01]"
                    style={{ 
                      willChange: 'transform',
                      transform: hoveredProject === index ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-100 transition-opacity duration-300"
                    style={{
                      background: hoveredProject === index 
                        ? 'linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.7), rgba(0,0,0,0.4))'
                        : 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5), transparent)'
                    }}
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="space-y-4">
                    {/* Match Score */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-green-500"
                    >
                      <ThumbsUp size={16} className="drop-shadow" />
                      <span className="font-semibold text-sm">{project.match}% Match</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h2 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xl md:text-2xl font-bold text-white group-hover:text-netflix-red transition-colors duration-300"
                    >
                      {project.title}
                    </motion.h2>

                    {/* Description */}
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: hoveredProject === index ? 1 : 0,
                        y: hoveredProject === index ? 0 : 10
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-sm md:text-base text-gray-300 line-clamp-3"
                    >
                      {project.description}
                    </motion.p>

                    {/* Tech Stack */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: hoveredProject === index ? 1 : 0,
                        y: hoveredProject === index ? 0 : 10
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="flex flex-wrap gap-2"
                    >
                      {project.techStack.map((tech, i) => (
                        <span 
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-netflix-red/20 text-netflix-red border border-netflix-red/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: hoveredProject === index ? 1 : 0,
                        y: hoveredProject === index ? 0 : 10
                      }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="flex gap-3 pt-2"
                    >
                      {project.demoUrl && (
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-netflix-red hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Play size={16} />
                          <span className="text-sm font-medium">Demo</span>
                        </motion.a>
                      )}
                      
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={16} />
                          <span className="text-sm font-medium">Code</span>
                        </motion.a>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;