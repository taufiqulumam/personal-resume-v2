import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-amber-500 p-[2px] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
      aria-label="Toggle theme"
    >
      <div className="flex items-center justify-center w-full h-full rounded-full bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="relative w-6 h-6">
          {/* Sun Icon */}
          <Sun
            className={`absolute inset-0 w-6 h-6 text-amber-500 transition-all duration-300 ${
              isDarkMode
                ? 'opacity-0 rotate-90 scale-0'
                : 'opacity-100 rotate-0 scale-100'
            }`}
          />
          {/* Moon Icon */}
          <Moon
            className={`absolute inset-0 w-6 h-6 text-purple-500 transition-all duration-300 ${
              isDarkMode
                ? 'opacity-100 rotate-0 scale-100'
                : 'opacity-0 -rotate-90 scale-0'
            }`}
          />
        </div>
      </div>
    </button>
  );
};
