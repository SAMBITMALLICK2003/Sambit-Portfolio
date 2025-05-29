
import { useState } from 'react';
import { Bot, ChevronRight } from 'lucide-react';

interface AIQuestionSuggestionsProps {
  onQuestionSelect: (question: string) => void;
}

const AIQuestionSuggestions = ({ onQuestionSelect }: AIQuestionSuggestionsProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const suggestions = [
    "Tell me about the SHAKTI algorithm for lunar crater detection",
    "What is Sambit's role at ISRO?",
    "Explain his quantum computing research",
    "What awards has Sambit received?",
    "How does his work bridge research and real-world applications?",
    "What are his main publications in AI/ML?"
  ];

  return (
    <div className="mb-8 animate-slide-up delay-450">
      <div className="mb-4">
        <div className="flex items-center justify-center mb-3">
          <Bot className="w-5 h-5 text-cyan-400 mr-2" />
          <h4 className="text-white font-semibold">Quick AI Questions</h4>
        </div>
        <p className="text-gray-400 text-sm">Click any question to get instant AI-powered answers</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onQuestionSelect(suggestion)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group text-left p-4 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-gray-600 rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/10"
          >
            <div className="flex items-start justify-between">
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                {suggestion}
              </p>
              <ChevronRight 
                className={`w-4 h-4 text-cyan-400 ml-2 mt-0.5 transition-transform duration-300 ${
                  hoveredIndex === index ? 'translate-x-1' : ''
                }`} 
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AIQuestionSuggestions;
