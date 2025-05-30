import { Brain, MessageCircle, Activity, Stethoscope } from 'lucide-react';

const MedicalAIImage = () => {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-cyan-400/20"></div>
          ))}
        </div>
      </div>
      
      {/* Floating Data Particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${4 + Math.random() * 4}s`
          }}
        />
      ))}
      
      {/* Main Elements */}
      <div className="relative z-10 flex items-center justify-center space-x-6">
        {/* AI Brain */}
        <div className="p-4 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl backdrop-blur-sm border border-cyan-400/30">
          <Brain className="w-12 h-12 text-cyan-400" />
        </div>
        
        {/* Connection Line */}
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
        
        {/* Medical Interface */}
        <div className="p-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl backdrop-blur-sm border border-blue-400/30">
          <Stethoscope className="w-12 h-12 text-blue-400" />
        </div>
      </div>
      
      {/* Floating Chat Bubbles */}
      <div className="absolute top-4 left-4 p-2 bg-cyan-500/20 rounded-full animate-bounce delay-500">
        <MessageCircle className="w-6 h-6 text-cyan-400" />
      </div>
      
      <div className="absolute bottom-4 right-4 p-2 bg-blue-500/20 rounded-full animate-pulse delay-1000">
        <Activity className="w-6 h-6 text-blue-400" />
      </div>
      
      {/* Pulse Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 animate-pulse"></div>
    </div>
  );
};

export default MedicalAIImage;