import { MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface ChatBannerProps {
  onOpenChat: () => void;
}

const ChatBanner = ({ onOpenChat }: ChatBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-6 z-40 max-w-sm">
      <div className="bg-gradient-to-r from-cyan-500/90 to-purple-500/90 backdrop-blur-sm text-white p-4 rounded-xl shadow-lg border border-cyan-400/30 animate-slide-in">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-white/70 hover:text-white"
        >
          ×
        </button>
        
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-white/20 rounded-full flex-shrink-0">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h4 className="font-semibold text-sm">Chat with Sam's AI!</h4>
              <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
            </div>
            <p className="text-xs text-white/90 mb-3">
              Ask me anything about Sambit's projects, experience, research, or achievements!
            </p>
            <button
              onClick={() => {
                onOpenChat();
                setIsVisible(false);
              }}
              className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg text-xs transition-colors"
            >
              <span>Start Chatting</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBanner;