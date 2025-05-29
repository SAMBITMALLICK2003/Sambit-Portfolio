
import { useState, useEffect } from 'react';
import { Menu, X, Search, Bot } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Publications', href: '#publications' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('AI Search:', searchQuery);
      toast({
        title: "Sam's AI Assistant",
        description: "Processing your query with Gemini AI...",
      });
      // This will be handled by the AI Assistant component
      setSearchQuery('');
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-white">
            Sambit Mallick
          </a>
          
          {/* Compact AI Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <div className="relative bg-slate-800/60 backdrop-blur-sm border border-gray-600 rounded-lg transition-all duration-300 hover:border-cyan-400/50 focus-within:border-cyan-400/50">
                <div className="flex items-center px-4 py-2">
                  <Bot className="w-4 h-4 text-cyan-400 mr-2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Ask Sam's AI anything..."
                    className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
                  />
                  <button
                    type="submit"
                    disabled={!searchQuery.trim()}
                    className="ml-2 p-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded hover:scale-105 transition-transform duration-200 disabled:opacity-50"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </form>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-sm border-t border-gray-700">
            <div className="flex flex-col space-y-4 px-6 py-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <div className="relative bg-slate-800/60 backdrop-blur-sm border border-gray-600 rounded-lg">
                  <div className="flex items-center px-4 py-3">
                    <Bot className="w-4 h-4 text-cyan-400 mr-2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Ask Sam's AI anything..."
                      className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
                    />
                    <button
                      type="submit"
                      disabled={!searchQuery.trim()}
                      className="ml-2 p-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded hover:scale-105 transition-transform duration-200 disabled:opacity-50"
                    >
                      <Search className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </form>
              
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
