import { useState, useEffect } from 'react';
import { Mic, MicOff, Camera, Monitor, Calendar, FileText, Bot, Zap } from 'lucide-react';

const LiveMeetingCopilotImage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isListening, setIsListening] = useState(false);

  const features = [
    { icon: Mic, label: 'Voice Activation', color: 'cyan' },
    { icon: FileText, label: 'Real-time Transcription', color: 'purple' },
    { icon: Bot, label: 'AI Assistant', color: 'blue' },
    { icon: Calendar, label: 'Calendar Integration', color: 'green' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
      setIsListening((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden rounded-t-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Main UI Mockup */}
      <div className="absolute inset-3 bg-slate-800/90 rounded-lg border border-cyan-400/30 backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center justify-between p-2.5 border-b border-gray-700">
          <div className="flex items-center">
            <div className="p-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mr-2">
              <Bot className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-white font-semibold text-xs">Team Lusine Copilot</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-1.5 h-1.5 rounded-full ${isListening ? 'bg-red-400' : 'bg-green-400'} animate-pulse`}></div>
            <span className="text-[10px] text-gray-400">
              {isListening ? 'Listening...' : 'Ready'}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-3 space-y-3">
          {/* Transcription Section */}
          <div className="bg-slate-700/50 rounded-lg p-3 border border-gray-600">
            <div className="flex items-center mb-2">
              <FileText className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-xs text-cyan-400 font-semibold">Real-time Transcription</span>
            </div>
            <div className="space-y-1">
              <div className="h-2 bg-gray-600 rounded animate-pulse"></div>
              <div className="h-2 bg-gray-600 rounded w-3/4 animate-pulse delay-100"></div>
              <div className="h-2 bg-cyan-400/50 rounded w-1/2 animate-pulse delay-200"></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature === index;
              
              return (
                <div 
                  key={index}
                  className={`p-2 rounded-lg border transition-all duration-500 ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-400/50 shadow-lg shadow-cyan-400/20' 
                      : 'bg-slate-700/30 border-gray-600'
                  }`}
                >
                  <div className="flex items-center">
                    <Icon className={`w-3 h-3 mr-2 transition-colors duration-500 ${
                      isActive ? 'text-cyan-400' : 'text-gray-400'
                    }`} />
                    <span className={`text-xs font-medium transition-colors duration-500 ${
                      isActive ? 'text-white' : 'text-gray-400'
                    }`}>
                      {feature.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* AI Response Area */}
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg p-3 border border-purple-400/30">
            <div className="flex items-start">
              <div className="p-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mr-2 mt-0.5">
                <Bot className="w-3 h-3 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-purple-400 font-semibold mb-1">AI Assistant</div>
                <div className="space-y-1">
                  <div className="h-1.5 bg-purple-400/30 rounded animate-pulse"></div>
                  <div className="h-1.5 bg-purple-400/30 rounded w-2/3 animate-pulse delay-75"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
          <div className="flex space-x-1">
            <div className={`p-1.5 rounded-full transition-all duration-300 ${
              isListening ? 'bg-red-500/20 border border-red-400/50' : 'bg-gray-700/50 border border-gray-600'
            }`}>
              {isListening ? (
                <Mic className="w-3 h-3 text-red-400" />
              ) : (
                <MicOff className="w-3 h-3 text-gray-400" />
              )}
            </div>
            <div className="p-1.5 bg-gray-700/50 border border-gray-600 rounded-full">
              <Camera className="w-3 h-3 text-gray-400" />
            </div>
            <div className="p-1.5 bg-cyan-500/20 border border-cyan-400/50 rounded-full">
              <Monitor className="w-3 h-3 text-cyan-400" />
            </div>
          </div>
          
          <div className="flex items-center text-xs text-gray-400">
            <Zap className="w-3 h-3 mr-1 text-yellow-400" />
            <span>Gemini Powered</span>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 right-4 animate-bounce delay-1000">
        <div className="p-2 bg-cyan-500/20 rounded-full backdrop-blur-sm">
          <Mic className="w-4 h-4 text-cyan-400" />
        </div>
      </div>
      
      <div className="absolute bottom-4 left-4 animate-pulse delay-2000">
        <div className="p-2 bg-purple-500/20 rounded-full backdrop-blur-sm">
          <FileText className="w-4 h-4 text-purple-400" />
        </div>
      </div>

      {/* Wake Word Visualization */}
      {isListening && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex space-x-1">
            <div className="w-1 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-1 h-6 bg-cyan-400 rounded-full animate-pulse delay-75"></div>
            <div className="w-1 h-10 bg-cyan-400 rounded-full animate-pulse delay-150"></div>
            <div className="w-1 h-4 bg-cyan-400 rounded-full animate-pulse delay-225"></div>
            <div className="w-1 h-7 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveMeetingCopilotImage;