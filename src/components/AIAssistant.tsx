import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { GeminiService, getFallbackResponse } from '@/services/geminiService';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface AIAssistantRef {
  openChat: () => void;
  sendMessage: (message: string) => void;
}

interface AIAssistantProps {
  searchQuery?: string;
  onSearchQueryProcessed?: () => void;
}

const AIAssistant = forwardRef<AIAssistantRef, AIAssistantProps>(({ 
  searchQuery, 
  onSearchQueryProcessed 
}, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Sambit's AI assistant powered by Google's Gemini AI. I can help you learn about his work, achievements, and research in AI/ML. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const geminiService = useRef<GeminiService | null>(null);

  // Expose methods to parent components
  useImperativeHandle(ref, () => ({
    openChat: () => {
      console.log('openChat called via ref');
      setIsOpen(true);
    },
    sendMessage: (message: string) => {
      console.log('sendMessage called via ref:', message);
      if (message.trim()) {
        setIsOpen(true);
        setTimeout(() => handleSendMessage(message), 100);
      }
    }
  }));

  // Handle search queries from external components
  useEffect(() => {
    console.log('Search query effect triggered:', searchQuery);
    if (searchQuery && searchQuery.trim()) {
      setIsOpen(true);
      setTimeout(() => {
        handleSendMessage(searchQuery);
        onSearchQueryProcessed?.();
      }, 500);
    }
  }, [searchQuery, onSearchQueryProcessed]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initialize Gemini service
    try {
      geminiService.current = new GeminiService();
      console.log('Gemini service initialized');
    } catch (error) {
      console.warn('Gemini service initialization failed:', error);
    }
  }, []);

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputMessage;
    console.log('Sending message:', textToSend);
    
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    if (!messageText) setInputMessage('');
    setIsLoading(true);

    try {
      let responseText: string;

      if (geminiService.current) {
        // Use Gemini API
        const response = await geminiService.current.generateResponse(textToSend);
        responseText = response.text;
        
        if (response.error) {
          console.warn('Gemini API warning:', response.error);
        }
      } else {
        // Use fallback responses
        responseText = getFallbackResponse(textToSend);
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm having trouble processing your request right now. Please try again or contact Sambit directly at sambitmallick.soccer@gmail.com",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Debug effect to log state changes
  useEffect(() => {
    console.log('AIAssistant isOpen:', isOpen);
  }, [isOpen]);

  return (
    <>
      {/* Chat Toggle Button - Always visible for testing */}
      <button
        onClick={() => {
          console.log('Toggle button clicked, current isOpen:', isOpen);
          setIsOpen(!isOpen);
        }}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
        style={{ zIndex: 9999 }} // Ensure it's always on top
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center p-4"
          style={{ zIndex: 9998 }} // High z-index
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => {
              console.log('Backdrop clicked, closing chat');
              setIsOpen(false);
            }}
          ></div>
          
          {/* Chat Window */}
          <div className="relative w-full max-w-2xl h-[600px] bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm rounded-2xl border border-gray-700 shadow-2xl flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-gray-700 rounded-t-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mr-3">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Sam's AI Assistant</h3>
                    <p className="text-xs text-gray-400">Powered by Gemini AI</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    console.log('Header close button clicked');
                    setIsOpen(false);
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="flex items-start max-w-[80%]">
                    {!message.isUser && (
                      <div className="p-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mr-2 mt-1">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-lg ${
                        message.isUser
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                          : 'bg-slate-700/50 text-gray-100'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                    {message.isUser && (
                      <div className="p-1 bg-slate-600 rounded-full ml-2 mt-1">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start max-w-[80%]">
                    <div className="p-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mr-2 mt-1">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="p-3 rounded-lg bg-slate-700/50">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Sambit's work..."
                  className="flex-1 px-3 py-2 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none text-sm"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputMessage.trim() || isLoading}
                  className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

AIAssistant.displayName = 'AIAssistant';

export default AIAssistant;