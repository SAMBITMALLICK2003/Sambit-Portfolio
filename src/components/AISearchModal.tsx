import { useState, useEffect } from 'react';
import { X, Bot, Sparkles, ArrowRight } from 'lucide-react';

interface AISearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  response: string;
  query: string;
  isNavigating?: boolean;
}

const AISearchModal = ({ isOpen, onClose, response, query, isNavigating = false }: AISearchModalProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isOpen && response) {
      setDisplayedText('');
      setIsTyping(true);
      
      // Clean the response from navigation instructions
      const cleanResponse = response.replace(/NAVIGATE_TO_\w+/g, '').trim();
      
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < cleanResponse.length) {
          setDisplayedText(cleanResponse.substring(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
        }
      }, 20); // Typing speed

      return () => clearInterval(typingInterval);
    }
  }, [isOpen, response]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-3xl border border-gray-600 shadow-2xl shadow-cyan-400/20 animate-in fade-in duration-300 zoom-in-95">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-600">
          <div className="flex items-center">
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl mr-4">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Sam's AI Assistant</h3>
              <p className="text-sm text-gray-400">Powered by Gemini AI</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-96 overflow-y-auto">
          {/* User Query */}
          <div className="mb-6">
            <div className="flex items-start justify-end mb-2">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-xs">
                <p className="text-sm">{query}</p>
              </div>
            </div>
          </div>

          {/* AI Response */}
          <div className="flex items-start">
            <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mr-3 mt-1">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <div className="bg-slate-700/50 text-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm">
                <div className="prose prose-invert prose-sm max-w-none">
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {displayedText}
                    {isTyping && (
                      <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse" />
                    )}
                  </p>
                </div>
              </div>
              
              {/* Navigation Status */}
              {isNavigating && !isTyping && (
                <div className="mt-3 flex items-center text-cyan-400 text-sm">
                  <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                  <span>Navigating to the relevant section...</span>
                  <ArrowRight className="w-4 h-4 ml-2 animate-bounce-horizontal" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              <span>AI Assistant is online</span>
            </div>
            
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:scale-105 transition-transform duration-200"
            >
              Got it!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISearchModal;