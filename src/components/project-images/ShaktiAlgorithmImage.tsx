import { Satellite, Target, Globe, Award } from 'lucide-react';

const ShaktiAlgorithmImage = () => {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-orange-600/20 to-red-500/20 flex items-center justify-center overflow-hidden">
      {/* Space Background */}
      <div className="absolute inset-0 bg-black/20">
        {/* Stars */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center space-x-6">
        {/* Satellite */}
        <div className="relative">
          <div className="p-4 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-2xl backdrop-blur-sm border border-orange-400/40">
            <Satellite className="w-12 h-12 text-orange-400" />
          </div>
          
          {/* Signal Waves */}
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
            <div className="w-8 h-8 border-2 border-orange-400/30 rounded-full animate-ping"></div>
            <div className="absolute inset-0 w-6 h-6 border-2 border-orange-400/50 rounded-full animate-ping delay-300"></div>
            <div className="absolute inset-1 w-4 h-4 border-2 border-orange-400/70 rounded-full animate-ping delay-500"></div>
          </div>
        </div>
        
        {/* Detection Target */}
        <div className="relative">
          <div className="p-4 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-full backdrop-blur-sm border border-red-400/40">
            <Target className="w-10 h-10 text-red-400" />
          </div>
          
          {/* Scanning Effect */}
          <div className="absolute inset-0 rounded-full border-2 border-red-400/30 animate-pulse"></div>
          <div className="absolute -inset-2 rounded-full border border-red-400/20 animate-ping"></div>
        </div>
        
        {/* Moon Surface */}
        <div className="relative">
          <div className="p-3 bg-gradient-to-br from-gray-500/30 to-gray-600/30 rounded-xl backdrop-blur-sm border border-gray-400/30">
            <Globe className="w-8 h-8 text-gray-300" />
          </div>
          
          {/* Crater Detection Points */}
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-300"></div>
        </div>
      </div>
      
      {/* Achievement Badge */}
      <div className="absolute top-4 right-4 flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-3 py-1 border border-yellow-400/30">
        <Award className="w-4 h-4 text-yellow-400" />
        <span className="text-yellow-400 text-sm font-semibold">90%+</span>
      </div>
      
      {/* ISRO Badge */}
      <div className="absolute bottom-4 left-4 bg-orange-500/20 backdrop-blur-sm rounded-lg px-2 py-1 border border-orange-400/30">
        <span className="text-orange-400 text-xs font-bold">ISRO</span>
      </div>
    </div>
  );
};

export default ShaktiAlgorithmImage;