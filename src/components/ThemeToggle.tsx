import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 bg-zinc-800/80 backdrop-blur-sm p-3 rounded-full hover:bg-zinc-700/80 transition-colors z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun size={24} className="text-yellow-500" />
      ) : (
        <Moon size={24} className="text-blue-500" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;