import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ThumbsUp, Github, Play, Info, Filter, Search } from 'lucide-react';
import ProjectDetailModal from './ProjectDetailModal';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  longDescription: string;
  features: string[];
  match: number;
  category: string;
  customBackground?: boolean;
  demoUrl?: string;
  githubUrl?: string;
}

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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
      category: 'Full Stack',
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
      match: 95,
      category: 'Data Analysis'
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
      match: 92,
      category: 'Machine Learning'
    }
  ];

  const categories = ['all', ...new Set(projects.map(project => project.category))];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-netflix-red transition-colors"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-netflix">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-netflix-red text-white'
                    : 'bg-zinc-900/50 text-gray-300 hover:bg-zinc-800'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[16/9] rounded-xl overflow-hidden"
              >
                {/* Project Image */}
                <img 
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="space-y-3">
                    {/* Match Score */}
                    <div className="flex items-center gap-2 text-green-500">
                      <ThumbsUp size={16} className="drop-shadow" />
                      <span className="font-semibold text-sm">{project.match}% Match</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-white group-hover:text-netflix-red transition-colors">
                      {project.title}
                    </h2>

                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 rounded-full text-sm bg-netflix-red/20 text-netflix-red border border-netflix-red/20">
                      {project.category}
                    </span>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span 
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4">
                      <motion.button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-2 bg-netflix-red hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Info size={16} />
                        Details
                      </motion.button>

                      {project.demoUrl && (
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Play size={16} />
                          Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 text-gray-400"
          >
            No projects found matching your criteria.
          </motion.div>
        )}

        {/* Project Detail Modal */}
        <ProjectDetailModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      </div>
    </div>
  );
};

export default ProjectsSection;