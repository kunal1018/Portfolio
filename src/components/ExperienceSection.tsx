import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Building2, ArrowRight, GraduationCap, Briefcase, Users, Award } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  category: 'professional' | 'extracurricular';
  description: string[];
  skills?: string[];
  link?: string;
}

const ExperienceSection: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<'professional' | 'extracurricular'>('professional');

  const experiences: Experience[] = [
    // Professional Experience
    {
      id: 1,
      title: "Customer Experience Associate",
      company: "TD Canada Trust",
      location: "Hamilton, ON",
      period: "May 2025 - Present",
      category: "professional",
      description: [
        "Leveraged customer data to identify trends and recommend personalized banking solutions, enhancing product adoption and user engagement.",
        "Advocated for digital tools and self-service platforms to drive financial literacy, streamline operations, and ensure data accuracy and compliance."
      ],
      skills: ["Data Analysis", "Customer Service", "Digital Banking", "Financial Services"],
      link: "https://www.td.com"
    },
    {
      id: 2,
      title: "Software Development Engineer",
      company: "Volunteer Position",
      location: "Vancouver, BC",
      period: "May 2025 - Present",
      category: "professional",
      description: [
        "Engineering scalable backend functionality for a volunteer engagement platform using Django (Python), including ORM-based data modeling, RESTful API development, and business logic abstraction.",
        "Collaborating in an Agile environment to contribute to end-to-end software design, technical documentation, and version-controlled development via GitHub and pull request workflows.",
        "Applying software architecture principles to enhance maintainability and system performance while coordinating cross-functionally with product and design teams."
      ],
      skills: ["Python", "Django", "REST APIs", "Git", "Agile", "Software Architecture"],
    },
    {
      id: 3,
      title: "Fundraiser Lead",
      company: "NDP Campaign",
      location: "Vancouver, BC",
      period: "August 2024 - December 2024",
      category: "professional",
      description: [
        "Led data-driven outreach campaigns targeting over 5,000 NDP members, using analytics tools to segment audiences and enhance engagement strategies.",
        "Analyzed campaign metrics and member feedback, increasing participation by 20% and delivering actionable insights to refine strategies."
      ],
      skills: ["Data Analytics", "Campaign Management", "Stakeholder Engagement", "Strategic Planning"],
    },
    
    // Extracurricular Activities
    {
      id: 4,
      title: "Development Volunteer",
      company: "Hack the 6ix",
      location: "Toronto, ON",
      period: "August 2024",
      category: "extracurricular",
      description: [
        "Played an active role in supporting event logistics and participant coordination at Toronto's premier hackathon.",
        "Assisted with registration, technical troubleshooting, and on-site support for over 100 participants.",
        "Collaborated with teams to ensure smooth operations and an engaging experience for attendees."
      ],
      skills: ["Event Management", "Technical Support", "Team Collaboration", "Problem Solving"],
      link: "https://hackthe6ix.com"
    },
    {
      id: 5,
      title: "Community Development Volunteer",
      company: "Downtown Hamilton Business Improvement Area",
      location: "Hamilton, ON",
      period: "July 2019 - August 2022",
      category: "extracurricular",
      description: [
        "Organized seating arrangements for events and engaged with community members attending a non-profit organization.",
        "Focused on understanding and advocating for the wants and needs within the city through direct communication with community members.",
        "Bridged understanding between Hamilton citizens and the city administration, striving for better communal relationships.",
        "Effectively addressed local concerns and contributed to community improvement initiatives."
      ],
      skills: ["Event Planning", "Community Engagement", "Advocacy", "Communication"],
    },
    {
      id: 6,
      title: "Community Volunteer",
      company: "Hindu Samaj Temple",
      location: "Hamilton, ON",
      period: "August 2020 - February 2023",
      category: "extracurricular",
      description: [
        "Instrumental in bridging the gap between tradition and the new generation through dynamic youth engagement events.",
        "Created meaningful experiences that resonated with young attendees, fostering a sense of community and belonging.",
        "Planned and executed events that encouraged active participation from youth members.",
        "Nurtured a vibrant, inclusive environment that celebrated cultural and spiritual values."
      ],
      skills: ["Youth Engagement", "Event Planning", "Cultural Programming", "Community Building"],
    },
    {
      id: 7,
      title: "Director of Corporate Relations",
      company: "The GoldenHack",
      location: "Waterloo, ON",
      period: "October 2024 - Present",
      category: "extracurricular",
      description: [
        "Secured over $5,000 in sponsorships from industry partners to support a hackathon with 100+ participants, ensuring successful event delivery and brand engagement.",
        "Maintained relationships with 6+ sponsors, contributing to improved partner retention and long-term collaboration."
      ],
      skills: ["Sponsorship", "Event Management", "Relationship Building", "Negotiation"],
      link: "https://thegoldenhack.ca"
    },
    {
      id: 8,
      title: "Director of Outreach",
      company: "Virtual Reality Laurier",
      location: "Waterloo, ON",
      period: "July 2024 - Present",
      category: "extracurricular",
      description: [
        "Helped establish a new student organization, growing to 25+ active members through targeted outreach and clear value-driven messaging.",
        "Used feedback and data from past campus events to shape programming, leading to a 20% increase in turnout and stronger student interest."
      ],
      skills: ["Leadership", "Event Planning", "Community Building", "Data Analysis"],
      link: "https://students.wlu.ca"
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

  const filteredExperiences = experiences.filter(exp => exp.category === activeCategory);

  return (
    <div className="section-container bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-netflix-red/20 via-black to-black">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-netflix bg-clip-text text-transparent bg-gradient-to-r from-netflix-red via-red-500 to-netflix-red animate-gradient mb-8">
            Experience
          </h1>

          <div className="flex justify-center gap-4 mb-12">
            <motion.button
              onClick={() => setActiveCategory('professional')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeCategory === 'professional'
                  ? 'bg-netflix-red text-white'
                  : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Briefcase size={20} />
              Professional
            </motion.button>
            <motion.button
              onClick={() => setActiveCategory('extracurricular')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeCategory === 'extracurricular'
                  ? 'bg-netflix-red text-white'
                  : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Award size={20} />
              Extracurricular
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6"
        >
          {filteredExperiences.map((exp) => (
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
                        {exp.category === 'extracurricular' ? (
                          <Users className="text-white\" size={24} />
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
                      <div className="space-y-2">
                        <h4 className="text-white font-semibold">Key Achievements & Responsibilities:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          {exp.description.map((desc, index) => (
                            <li key={index} className="leading-relaxed">{desc}</li>
                          ))}
                        </ul>
                      </div>

                      {exp.skills && (
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
                      )}

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