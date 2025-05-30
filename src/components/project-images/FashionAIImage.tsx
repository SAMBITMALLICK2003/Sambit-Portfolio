import { Palette, Sparkles, Shirt, TrendingUp } from 'lucide-react';

const FashionAIImage = () => {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-purple-600/20 to-pink-500/20 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a855f7' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Main Design Interface */}
      <div className="relative z-10 flex items-center justify-center space-x-8">
        {/* Design Palette */}
        <div className="space-y-3">
          <div className="p-3 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl backdrop-blur-sm border border-purple-400/30">
            <Palette className="w-8 h-8 text-purple-400" />
          </div>
          <div className="space-y-1">
            <div className="w-8 h-2 bg-purple-400 rounded-full"></div>
            <div className="w-8 h-2 bg-pink-400 rounded-full"></div>
            <div className="w-8 h-2 bg-blue-400 rounded-full"></div>
          </div>
        </div>
        
        {/* Fashion Item */}
        <div className="relative">
          <div className="p-4 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-pink-400/30">
            <Shirt className="w-16 h-16 text-pink-400" />
          </div>
          
          {/* AI Generation Sparkles */}
          <div className="absolute -top-2 -right-2 animate-spin">
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="absolute -bottom-1 -left-1 animate-pulse delay-500">
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>
        </div>
        
        {/* Trend Analysis */}
        <div className="space-y-2">
          <div className="p-3 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-xl backdrop-blur-sm border border-pink-400/30">
            <TrendingUp className="w-8 h-8 text-pink-400" />
          </div>
          <div className="space-y-1">
            <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            <div className="w-10 h-1 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 left-4 p-1 bg-purple-500/20 rounded-full animate-bounce delay-300">
        <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
      </div>
      <div className="absolute bottom-6 right-8 p-1 bg-pink-500/20 rounded-full animate-pulse delay-700">
        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default FashionAIImage;