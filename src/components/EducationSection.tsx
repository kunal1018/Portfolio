import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, ExternalLink, Github, Code, FileCode } from 'lucide-react';

const EducationSection: React.FC = () => {
  const education = {
    degree: 'Honours Bachelor of Science in Computer Science',
    minor: 'Minor in Economics',
    institution: 'Wilfrid Laurier University',
    school: 'Lazaridis School of Business & Economics',
    location: 'Waterloo, ON',
    period: '2023 - 2027',
    courses: [
      { code: 'CP214', name: 'Discrete Structures' },
      { code: 'MA122', name: 'Linear Algebra I' },
      { code: 'MA103', name: 'Calculus I' },
      { code: 'CP164', name: 'Data Structures I' },
      { code: 'CP220', name: 'Digital Electronics' },
      { code: 'CP216', name: 'Intro to Microprocessors' },
      { code: 'CP104', name: 'Intro to Python' },
      { code: 'CP213', name: 'Object-Oriented Programming' }
    ]
  };

  const academicProjects = [
    {
      title: 'Object-Oriented Programming',
      courseCode: 'CP213',
      description: 'Comprehensive coursework focusing on Java programming and object-oriented concepts, including inheritance, polymorphism, interfaces, and GUI development with Swing.',
      instructor: 'Zara Hamid',
      semester: 'Fall 2024',
      technologies: ['Java', 'Eclipse IDE', 'Swing', 'JUnit'],
      topics: [
        'Classes and Objects',
        'Inheritance and Polymorphism',
        'Exception Handling',
        'File I/O',
        'GUI Development'
      ],
      githubUrl: 'https://github.com/kunal1018/CP213'
    },
    {
      title: 'Data Structures II',
      courseCode: 'CP264',
      description: 'Advanced exploration of data structures and algorithms in C, covering complex implementations of trees, graphs, and efficient sorting algorithms.',
      instructor: 'Bernard Chiu',
      semester: 'Winter 2025',
      technologies: ['C', 'GCC', 'Make', 'Valgrind'],
      topics: [
        'Advanced Arrays',
        'Linked Lists',
        'Trees (BST, AVL)',
        'Heaps',
        'Graph Algorithms'
      ],
      githubUrl: 'https://github.com/kunal1018/CP264'
    }
  ];

  const certifications = [
    {
      title: 'Introduction to Data Analytics',
      issuer: 'IBM',
      issuedDate: 'June 2024',
      credentialId: 'KDNHWBR2TB4F',
      link: 'https://coursera.org/share/37bfb8f7558e1784892f65a2e74e2b9c',
      logo: 'IBM'
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      issuedDate: 'August 2024',
      credentialId: 'fcc2e85812d-6c70-46fc-825a-8b1195a87fa9-rwd',
      link: 'https://www.freecodecamp.org/certification/fcc2e85812d-6c70-46fc-825a-8b1195a87fa9/responsive-web-design',
      logo: 'freeCodeCamp'
    },
    {
      title: 'KPMG Audit & Assurance Job Simulation',
      issuer: 'KPMG in Canada',
      issuedDate: 'April 2024',
      credentialId: 'ptYoX2NYoggh8236W',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/KPMG%20in%20Canada/bNotYLkg7a9SK42vB_KPMG%20in%20Canada_Qr4GaG6gujGTYyGta_1713666524381_completion_certificate.pdf',
      logo: 'KPMG'
    },
    {
      title: 'Leadership Certificate',
      issuer: 'Wilfrid Laurier University',
      issuedDate: 'May 2024',
      skills: ['Leadership', 'Team Leadership'],
      logo: 'WLU'
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
    hidden: { opacity: 0, y: 20 },
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
    <div className="min-h-screen pt-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-netflix-red/20 via-black to-black">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-6 mb-8"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-[#330072] to-[#4a0072] rounded-2xl p-3 flex items-center justify-center shadow-lg shadow-purple-900/20">
                <div className="text-white text-2xl font-bold text-center leading-tight font-netflix">
                  LAURIER
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold font-netflix text-white mb-2">
                  {education.institution}
                </h1>
                <p className="text-xl text-netflix-red">
                  {education.school}
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 border border-netflix-red/10 hover:border-netflix-red/30 transition-all duration-300 shadow-lg shadow-netflix-red/5">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="text-netflix-red" size={24} />
                  <h3 className="text-lg font-semibold text-white">Degree</h3>
                </div>
                <p className="text-gray-300">{education.degree}</p>
                <p className="text-gray-400 mt-1">{education.minor}</p>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 border border-netflix-red/10 hover:border-netflix-red/30 transition-all duration-300 shadow-lg shadow-netflix-red/5">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="text-netflix-red" size={24} />
                  <h3 className="text-lg font-semibold text-white">Duration</h3>
                </div>
                <p className="text-gray-300">{education.period}</p>
                <p className="text-gray-400 mt-1">Expected Graduation</p>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 border border-netflix-red/10 hover:border-netflix-red/30 transition-all duration-300 shadow-lg shadow-netflix-red/5">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="text-netflix-red" size={24} />
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                </div>
                <p className="text-gray-300">{education.location}</p>
                <p className="text-gray-400 mt-1">Campus</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Academic Projects Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 font-netflix">
                <Code className="text-netflix-red" size={24} />
                Academic Projects
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {academicProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-zinc-900/50 backdrop-blur-xl rounded-xl p-6 border border-netflix-red/10 hover:border-netflix-red/30 transition-all duration-300 group"
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="flex items-center gap-3 mb-3">
                          <FileCode className="text-netflix-red" size={24} />
                          <h3 className="text-xl font-semibold text-white">
                            {project.courseCode}
                          </h3>
                        </div>
                        <p className="text-gray-400 text-sm">{project.semester}</p>
                        <p className="text-gray-400 text-sm">Instructor: {project.instructor}</p>
                      </div>
                      
                      <div className="md:w-3/4">
                        <h3 className="text-xl font-semibold text-white mb-3">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-4">
                          {project.description}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Topics:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.topics.map((topic, i) => (
                              <span
                                key={i}
                                className="text-xs px-2 py-1 rounded-full bg-netflix-red/20 text-netflix-red border border-netflix-red/20"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-netflix-red hover:text-red-400 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <Github size={16} />
                          <span>View Repository</span>
                          <ExternalLink size={16} />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Courses Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 font-netflix">
                <BookOpen className="text-netflix-red" size={24} />
                Current Coursework
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {education.courses.map((course, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-zinc-900/50 backdrop-blur-xl rounded-xl p-4 border border-netflix-red/10 hover:border-netflix-red/30 transition-all duration-300 group shadow-lg shadow-netflix-red/5 floating-card"
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-white group-hover:text-netflix-red transition-colors">
                        {course.name}
                      </h3>
                      <span className="text-sm text-netflix-red font-medium">
                        {course.code}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 font-netflix">
                <Award className="text-netflix-red" size={24} />
                Certifications & Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-zinc-900/50 backdrop-blur-xl rounded-xl p-6 border border-netflix-red/10 hover:border-netflix-red/30 transition-all duration-300 group shadow-lg shadow-netflix-red/5"
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-netflix-red to-red-700 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Award className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-lg font-semibold text-white group-hover:text-netflix-red transition-colors">
                            {cert.title}
                          </h3>
                          {cert.link && (
                            <a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-netflix-red hover:text-red-400 transition-colors"
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                          <Calendar size={14} />
                          <span>{cert.issuedDate}</span>
                        </div>
                        {cert.credentialId && (
                          <p className="text-xs text-gray-500 mt-2">
                            Credential ID: {cert.credentialId}
                          </p>
                        )}
                        {cert.skills && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {cert.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="text-xs px-2 py-1 rounded-full bg-netflix-red/20 text-netflix-red border border-netflix-red/20"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;