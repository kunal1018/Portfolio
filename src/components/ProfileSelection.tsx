import { motion } from 'framer-motion';
import { Film, Clapperboard, PlayCircle, Tv, MessageCircle } from 'lucide-react';

interface ProfileSelectionProps {
  onProfileSelect: (section: string) => void;
}

const ProfileSelection = ({ onProfileSelect }: ProfileSelectionProps) => {
  const profiles = [
    { 
      id: 1, 
      name: 'About Me', 
      color: 'from-[#8B5CF6] to-[#C4B5FD]',
      icon: Film,
      section: 'about',
      strokeWidth: 1.5
    },
    { 
      id: 2, 
      name: 'Experience', 
      color: 'from-[#EF4444] to-[#F87171]',
      icon: Clapperboard,
      section: 'experience',
      strokeWidth: 1.5
    },
    { 
      id: 3, 
      name: 'Projects', 
      color: 'from-[#3B82F6] to-[#93C5FD]',
      icon: PlayCircle,
      section: 'projects',
      strokeWidth: 1.5
    },
    { 
      id: 4, 
      name: 'Education', 
      color: 'from-[#10B981] to-[#5EEAD4]',
      icon: Tv,
      section: 'education',
      strokeWidth: 1.5
    },
    { 
      id: 5, 
      name: 'Contact', 
      color: 'from-[#F59E0B] to-[#FCD34D]',
      icon: MessageCircle,
      section: 'contact',
      strokeWidth: 1.5
    }
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 overflow-y-auto scrollbar-netflix">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-300 mb-12">Who's Browsing?</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {profiles.map((profile) => (
          <motion.button
            key={profile.id}
            onClick={() => onProfileSelect(profile.section)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group w-full"
          >
            <motion.div 
              className={`aspect-square rounded-xl mb-4 flex items-center justify-center transition-all duration-300 bg-gradient-to-br ${profile.color} relative overflow-hidden`}
              style={{
                boxShadow: `
                  inset -2px -2px 4px rgba(255, 255, 255, 0.1),
                  inset 2px 2px 4px rgba(0, 0, 0, 0.2),
                  0 4px 8px rgba(0, 0, 0, 0.2)
                `
              }}
            >
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10">
                <profile.icon 
                  size={48} 
                  strokeWidth={profile.strokeWidth} 
                  className="text-white transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
            <span className="text-gray-400 text-lg md:text-xl group-hover:text-white transition-colors duration-300 font-medium block text-center">
              {profile.name}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ProfileSelection;