import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronDown, User2, Menu, X } from 'lucide-react';

interface NavbarProps {
  onBackClick: () => void;
  selectedSection: string;
  onProfileSelect: (section: string) => void;
}

const Navbar = ({ onBackClick, selectedSection, onProfileSelect }: NavbarProps) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const profiles = [
    { id: 'about', name: 'About Me', color: 'bg-gradient-to-br from-purple-600 to-purple-400' },
    { id: 'experience', name: 'Experience', color: 'bg-gradient-to-br from-red-600 to-red-400' },
    { id: 'projects', name: 'Projects', color: 'bg-gradient-to-br from-blue-600 to-blue-400' },
    { id: 'education', name: 'Education', color: 'bg-gradient-to-br from-green-600 to-green-400' },
    { id: 'contact', name: 'Contact', color: 'bg-gradient-to-br from-yellow-600 to-yellow-400' }
  ];

  const getCurrentProfile = () => {
    return profiles.find(p => p.id === selectedSection) || profiles[0];
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -10,
      scale: 0.95,
      transformOrigin: 'top right'
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
    exit: { 
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: '100%',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const handleProfileSelect = (section: string) => {
    onProfileSelect(section);
    setIsProfileMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black via-black/80 to-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <motion.button 
            onClick={onBackClick}
            className="text-white hover:text-red-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Go back"
          >
            <ArrowLeft size={24} />
          </motion.button>
          
          <div className="flex items-center gap-3">
            <motion.a 
              href="#" 
              className="text-red-600 font-bold text-xl md:text-2xl tracking-wider font-netflix"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
              whileHover={{ scale: 1.05 }}
            >
              PORTFOLIO
            </motion.a>
            <span className="hidden md:inline text-gray-400 text-sm">|</span>
            <span className="hidden md:inline text-gray-300 text-sm font-medium">Hi, I'm Kunal Gandhi</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block relative">
          <motion.button
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors bg-black/20 rounded-full px-3 py-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className={`w-8 h-8 ${getCurrentProfile().color} rounded-full flex items-center justify-center shadow-lg`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <User2 size={16} className="text-white drop-shadow" />
            </motion.div>
            <motion.div
              animate={{ rotate: isProfileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={16} className="text-white" />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {isProfileMenuOpen && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute right-0 mt-2 w-64 origin-top-right"
              >
                <div className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                  <div className="relative py-2">
                    {profiles.map((profile) => (
                      <motion.button
                        key={profile.id}
                        variants={itemVariants}
                        onClick={() => handleProfileSelect(profile.id)}
                        className={`flex items-center w-full px-4 py-3 text-sm transition-all duration-300 ${
                          selectedSection === profile.id 
                            ? 'bg-white/10 text-white' 
                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <motion.div 
                          className={`w-10 h-10 ${profile.color} rounded-lg flex items-center justify-center mr-3 shadow-lg`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <User2 size={20} className="text-white drop-shadow" />
                        </motion.div>
                        <span className="font-medium">{profile.name}</span>
                        
                        {selectedSection === profile.id && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="ml-auto w-2 h-2 rounded-full bg-red-600"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 top-16 bg-black/95 backdrop-blur-xl md:hidden z-50"
            >
              <div className="p-4 space-y-4">
                {profiles.map((profile) => (
                  <motion.button
                    key={profile.id}
                    variants={itemVariants}
                    onClick={() => handleProfileSelect(profile.id)}
                    className={`flex items-center w-full p-4 rounded-lg transition-all duration-300 ${
                      selectedSection === profile.id 
                        ? 'bg-white/10 text-white' 
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <motion.div 
                      className={`w-12 h-12 ${profile.color} rounded-lg flex items-center justify-center mr-4 shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <User2 size={24} className="text-white drop-shadow" />
                    </motion.div>
                    <span className="text-lg font-medium">{profile.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;