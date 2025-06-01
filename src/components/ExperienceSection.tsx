import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Building2, ArrowRight, GraduationCap, Briefcase } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  link?: string;
}

const ExperienceSection: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Software Developer Co-op",
      company: "TD Bank",
      location: "Toronto, ON",
      period: "May 2024 - Aug 2024",
      type: "Upcoming Internship",
      description: "Joining TD's Technology Solutions team to work on full-stack development projects.",
      responsibilities: [
        "Will be working on developing and maintaining enterprise-level applications",
        "Collaborating with cross-functional teams on financial technology solutions",
        "Contributing to the bank's digital transformation initiatives"
      ],
      skills: ["Java", "Spring Boot", "React", "TypeScript", "AWS"],
      link: "https://www.td.com"
    },
    {
      id: 2,
      title: "Teaching Assistant",
      company: "Wilfrid Laurier University",
      location: "Waterloo, ON",
      period: "Jan 2024 - Present",
      type: "Part-time",
      description: "Teaching Assistant for CP164: Data Structures I, supporting students in learning fundamental programming concepts.",
      responsibilities: [
        "Conducting weekly lab sessions and tutorial classes",
        "Assisting students with programming assignments and projects",
        "Grading assignments and providing constructive feedback",
        "Holding office hours for one-on-one student support"
      ],
      skills: ["Python", "Data Structures", "Algorithms", "Teaching", "Mentoring"],
      link: "https://www.wlu.ca"
    },
    {
      id: 3,
      title: "Web Development Lead",
      company: "Laurier Computing Society",
      location: "Waterloo, ON",
      period: "Sep 2023 - Present",
      type: "Volunteer",
      description: "Leading web development initiatives for the Laurier Computing Society, enhancing the organization's online presence.",
      responsibilities: [
        "Managing the development of the society's website",
        "Organizing web development workshops for members",
        "Collaborating with the design team on UI/UX improvements",
        "Mentoring junior developers in the society"
      ],
      skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Git"],
      link: "https://www.wlu.ca"
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

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="section-container bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-netflix-red/20 via-black to-black">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-netflix bg-clip-text text-transparent bg-gradient-to-r from-netflix-red via-red-500 to-netflix-red animate-gradient">
            Professional Experience
          </h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`group relative rounded-xl overflow-hidden transition-all duration-300 ${
                selectedExperience === exp.id ? 'bg-zinc-900/90' : 'bg-zinc-900/50'
              } backdrop-blur-sm hover:bg-zinc-900/90 border border-white/5`}
              onClick={() => setSelectedExperience(selectedExperience === exp.id ? null : exp.id)}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-netflix-red to-red-700 flex items-center justify-center shadow-lg">
                        {exp.type.toLowerCase().includes('internship') ? (
                          <GraduationCap className="text-white\" size={24} />
                        ) : (
                          <Briefcase className="text-white" size={24} />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-netflix-red transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-gray-400">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-netflix-red" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-netflix-red" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 size={16} className="text-netflix-red" />
                        <span>{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    className="text-netflix-red"
                    animate={{ rotate: selectedExperience === exp.id ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight size={24} />
                  </motion.button>
                </div>

                <AnimatePresence>
                  {selectedExperience === exp.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 space-y-4 overflow-hidden"
                    >
                      <p className="text-gray-300">{exp.description}</p>

                      <div className="space-y-2">
                        <h4 className="text-white font-semibold">Key Responsibilities:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                          {exp.responsibilities.map((resp, index) => (
                            <li key={index}>{resp}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full text-sm bg-netflix-red/20 text-netflix-red border border-netflix-red/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {exp.link && (
                        <motion.a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-netflix-red hover:text-red-400 transition-colors mt-4"
                          whileHover={{ x: 5 }}
                        >
                          <span>Visit Website</span>
                          <ExternalLink size={16} />
                        </motion.a>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceSection;