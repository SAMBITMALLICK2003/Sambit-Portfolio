
import { useState } from 'react';
import { Bot, Sparkles } from 'lucide-react';

const ColorModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const toggleColorMode = () => {
    setIsDarkMode(!isDarkMode);
    // Apply color mode changes to the document
    document.documentElement.classList.toggle('light-mode');
  };

  return (
    <div className="fixed top-24 right-6 z-40">
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          onClick={toggleColorMode}
          className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full p-3 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
        >
          {isDarkMode ? (
            <Sparkles className="w-5 h-5 text-cyan-400" />
          ) : (
            <Bot className="w-5 h-5 text-purple-400" />
          )}
        </button>
        
        {isHovered && (
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800/95 backdrop-blur-sm rounded-lg px-3 py-2 text-sm text-white whitespace-nowrap border border-gray-700">
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-slate-800"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorModeToggle;
