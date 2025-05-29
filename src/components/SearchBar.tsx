
import { useState } from 'react';
import { Search, Sparkles, MessageCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({ onSearch, placeholder = "Ask Sam about his work, research, or achievements..." }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setQuery('');
      toast({
        title: "Sam is thinking...",
        description: "I'll help you find what you're looking for!",
      });
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className={`relative bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm border rounded-2xl transition-all duration-300 ${
          isActive ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/20' : 'border-gray-600'
        }`}>
          <div className="flex items-center px-6 py-4">
            <div className="flex items-center mr-4">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mr-3">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-cyan-400 font-semibold text-sm">Sam AI</span>
            </div>
            
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsActive(true)}
              onBlur={() => setIsActive(false)}
              placeholder={placeholder}
              className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
            />
            
            <button
              type="submit"
              disabled={!query.trim()}
              className="ml-4 p-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </form>
      
      {/* Sam's personality indicator */}
      <div className="absolute -top-2 -right-2 z-10">
        <div className="relative">
          <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute top-0 left-0 w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-ping opacity-20"></div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
