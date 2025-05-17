import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

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

          {/* Courses Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
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
        </div>
      </div>
    </div>
  );
};

export default EducationSection;