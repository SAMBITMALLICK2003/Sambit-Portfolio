import { MessageCircle, Sparkles } from 'lucide-react';

interface QuickChatAccessProps {
  onOpenChat: () => void;
}

const QuickChatAccess = ({ onOpenChat }: QuickChatAccessProps) => {
  return (
    <div className="mt-8 flex justify-center">
      <button
        onClick={onOpenChat}
        className="group relative px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-400 rounded-lg hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
      >
        <div className="flex items-center space-x-3">
          <div className="relative">
            <MessageCircle className="w-5 h-5" />
            <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-400 animate-pulse" />
          </div>
          <div className="text-left">
            <div className="font-semibold text-sm">Chat with Sam's AI</div>
            <div className="text-xs text-gray-400">Ask about projects, experience & more!</div>
          </div>
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </div>
  );
};

export default QuickChatAccess;