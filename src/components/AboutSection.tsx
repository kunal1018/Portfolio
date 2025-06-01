import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface SkillCardProps {
  name: string;
  icon: string;
  progress: number;
  level: string;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, progress, level, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1,
        y: [0, -10, 0],
        transition: {
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2
          },
          opacity: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
      className="bg-zinc-900/50 p-6 rounded-lg backdrop-blur-sm border border-zinc-800/50 transition-all duration-300 group"
      role="article"
      aria-label={`${name} skill card`}
    >
      <div className="flex items-center gap-4 mb-4">
        <img src={icon} alt={`${name} icon`} className="w-10 h-10" />
        <h3 className="text-lg font-medium">{name}</h3>
      </div>
      <div className="relative">
        <div className="h-1 bg-zinc-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ 
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
          />
        </div>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute -right-1 -top-6 text-sm text-gray-400"
        >
          {level}
        </motion.span>
      </div>
    </motion.div>
  );
};

const AboutSection: React.FC = () => {
  const [profileRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const skills = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', progress: 85, level: 'Proficient' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', progress: 80, level: 'Proficient' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', progress: 75, level: 'Proficient' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', progress: 80, level: 'Proficient' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', progress: 75, level: 'Proficient' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', progress: 90, level: 'Proficient' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', progress: 85, level: 'Proficient' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', progress: 85, level: 'Proficient' }
  ];

  const tools = [
    { name: 'Power BI', icon: 'https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg', progress: 70, level: 'Proficient' },
    { name: 'Tableau', icon: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg', progress: 70, level: 'Proficient' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', progress: 80, level: 'Proficient' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', progress: 85, level: 'Proficient' }
  ];

  const frameworks = [
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', progress: 70, level: 'Proficient' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', progress: 75, level: 'Proficient' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', progress: 85, level: 'Proficient' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', progress: 75, level: 'Proficient' }
  ];

  return (
    <div className="section-container bg-gradient-to-b from-black to-zinc-900">
      {/* Hero Banner */}
      <div 
        className="relative min-h-[70vh] bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url("https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Profile Image Column */}
            <div className="md:col-span-4 relative" ref={profileRef}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-[3/4] rounded-xl overflow-hidden bg-cover bg-center shadow-2xl border border-white/10"
                style={{ 
                  backgroundImage: 'url("https://images.pexels.com/photos/3799523/pexels-photo-3799523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
                }}
              >
                <div className="w-full h-full bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-bold">Kunal Gandhi</h3>
                    <p className="text-gray-300">Computer Science Student</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Content Column */}
            <div className="md:col-span-8">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl text-red-500 font-medium mb-4"
              >
                Hi, I'm Kunal Gandhi
              </motion.h2>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Computer Science Student
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-6 mb-8 text-lg text-gray-300"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="text-red-500" />
                  <span>Waterloo, ON</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="text-red-500" />
                  <span>Honours Computer Science Student @ WLU | Seeking Fall 2025 Internships</span>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex gap-4 mb-8"
              >
                <a 
                  href="https://www.linkedin.com/in/kunal-gandhi-9349852a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://github.com/kunal1018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a 
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors hover:scale-105 transform duration-200 shadow-md"
                  download
                >
                  <ExternalLink size={20} />
                  Download Resume
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-12"
        >
          Technical Skills
        </motion.h2>
        
        <div className="space-y-16">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-red-500">Programming Languages & Core Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <SkillCard key={index} {...skill} index={index} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-red-500">Frameworks & Libraries</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {frameworks.map((framework, index) => (
                <SkillCard key={index} {...framework} index={index} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-red-500">Development Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <SkillCard key={index} {...tool} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;