import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import NetflixIntro from './components/NetflixIntro';
import ProfileSelection from './components/ProfileSelection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showProfiles, setShowProfiles] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntro(false);
      setShowProfiles(true);
    }, 3500);

    return () => clearTimeout(introTimer);
  }, []);

  const handleProfileSelect = (section: string) => {
    setShowProfiles(false);
    setTimeout(() => {
      setSelectedSection(section);
      setShowContent(true);
    }, 300);
  };

  const handleBackToProfiles = () => {
    setShowContent(false);
    setSelectedSection(null);
    setTimeout(() => {
      setShowProfiles(true);
    }, 300);
  };

  const pageTransition = {
    initial: { 
      opacity: 0,
      y: 20,
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="content-wrapper">
      <ParticleBackground />
      
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          >
            <NetflixIntro />
          </motion.div>
        )}

        {showProfiles && (
          <motion.div
            key="profiles"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
            className="fixed inset-0 z-40 bg-black overflow-y-auto scrollbar-netflix"
          >
            <div className="min-h-screen flex items-center justify-center py-10">
              <ProfileSelection onProfileSelect={handleProfileSelect} />
            </div>
          </motion.div>
        )}

        {showContent && selectedSection && (
          <motion.div
            key={selectedSection}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
            className="min-h-screen flex flex-col"
          >
            <Navbar 
              onBackClick={handleBackToProfiles}
              selectedSection={selectedSection}
              onProfileSelect={handleProfileSelect}
            />
            <main className="flex-1 overflow-y-auto scrollbar-netflix">
              <AnimatePresence mode="wait">
                {selectedSection === 'about' && <AboutSection key="about" />}
                {selectedSection === 'experience' && <ExperienceSection key="experience" />}
                {selectedSection === 'projects' && <ProjectsSection key="projects" />}
                {selectedSection === 'education' && <EducationSection key="education" />}
                {selectedSection === 'contact' && <Contact key="contact" />}
              </AnimatePresence>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;