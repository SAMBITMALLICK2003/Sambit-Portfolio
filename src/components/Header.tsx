import { useState } from 'react';
import { Menu, X, Search, Bot, MessageCircle } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  onSearchQuery?: (query: string) => void;
  onOpenChat?: () => void;
}

const Header = ({ isMenuOpen, setIsMenuOpen, onSearchQuery, onOpenChat }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Header search submitted:', searchQuery);
    
    if (searchQuery.trim()) {
      // If there's an onSearchQuery prop, use it (for AI chat)
      if (onSearchQuery) {
        onSearchQuery(searchQuery);
        setSearchQuery(''); // Clear the search field
        return;
      }
      
      // Otherwise, handle navigation (existing logic)
      handleNavigation(searchQuery);
    }
  };

  const handleNavigation = (query: string) => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('project') || lowerQuery.includes('work') || lowerQuery.includes('portfolio')) {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else if (lowerQuery.includes('experience') || lowerQuery.includes('job') || lowerQuery.includes('career')) {
      document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
    } else if (lowerQuery.includes('publication') || lowerQuery.includes('paper') || lowerQuery.includes('research')) {
      document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' });
    } else if (lowerQuery.includes('award') || lowerQuery.includes('achievement') || lowerQuery.includes('recognition')) {
      document.getElementById('awards')?.scrollIntoView({ behavior: 'smooth' });
    } else if (lowerQuery.includes('about') || lowerQuery.includes('skill') || lowerQuery.includes('background')) {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    } else if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('reach')) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Publications', href: '#publications' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-sm border-b border-gray-700">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Sambit
            </span>
          </div>

          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full">
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
          </div>

          {/* Desktop Navigation with Chat Button */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            
            {/* Desktop AI Chat Button */}
            <button
              onClick={() => {
                console.log('Desktop chat button clicked');
                onOpenChat?.();
              }}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Chat with AI</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-gray-700">
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
              
              {/* Mobile AI Chat Button */}
              <button
                onClick={() => {
                  console.log('Mobile chat button clicked');
                  onOpenChat?.();
                  setIsMenuOpen(false);
                }}
                className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Chat with Sam's AI</span>
              </button>
              
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2"
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
