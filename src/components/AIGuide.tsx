
import { useState, useEffect } from 'react';
import { Bot, X, Lightbulb, ArrowRight } from 'lucide-react';

interface Suggestion {
  text: string;
  action: () => void;
}

const AIGuide = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSuggestion, setCurrentSuggestion] = useState(0);

  const suggestions: Suggestion[] = [
    {
      text: "👋 Hi! I'm Sam's AI assistant. Ask me about his ISRO work!",
      action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      text: "🏆 Want to know about his Presidential award? Click here!",
      action: () => document.getElementById('awards')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      text: "📚 Explore his 6+ research publications in AI/ML",
      action: () => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      text: "🤖 Check out his Computer Vision projects",
      action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSuggestion((prev) => (prev + 1) % suggestions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [suggestions.length]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-32 left-6 z-30 max-w-xs">
      <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm rounded-2xl border border-cyan-400/30 shadow-xl shadow-cyan-400/20 p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center">
            <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mr-3">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-semibold text-sm">Sam AI</span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="mb-3">
          <p className="text-gray-300 text-sm leading-relaxed">
            {suggestions[currentSuggestion].text}
          </p>
        </div>
        
        <button
          onClick={suggestions[currentSuggestion].action}
          className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
        >
          <Lightbulb className="w-4 h-4 mr-2" />
          Explore
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default AIGuide;
