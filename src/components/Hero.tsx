
import { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Bot } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import FloatingElements from './FloatingElements';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      {/* Floating AI Elements */}
      <FloatingElements mousePosition={mousePosition} />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* AI Greeting */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 backdrop-blur-sm mb-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25">
            <Bot className="w-5 h-5 text-cyan-400 mr-3 animate-pulse" />
            <span className="text-cyan-400 font-semibold">Sam AI Assistant</span>
            <div className="w-2 h-2 bg-green-400 rounded-full ml-3 animate-pulse"></div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-slide-up hover:scale-105 transition-transform duration-300 cursor-default">
          Sambit Mallick
        </h1>
        
        <div className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-8 animate-slide-up delay-200 hover:from-purple-400 hover:to-cyan-400 transition-all duration-500">
          AI/ML Researcher & Engineer
        </div>
        
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-300 hover:text-gray-300 transition-colors duration-300">
          Bridging cutting-edge AI research with real-world applications. 
          From lunar crater detection at ISRO to quantum-classical ensemble methods.
        </p>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-slide-up delay-400">
          <a
            href="#research-impact"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:scale-110 transition-all duration-300 font-semibold shadow-lg hover:shadow-cyan-500/50 relative overflow-hidden"
          >
            <span className="relative z-10">Explore My Research</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white hover:scale-110 transition-all duration-300 font-semibold relative overflow-hidden"
          >
            <span className="relative z-10">Let's Collaborate</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-125 transition-transform duration-300">
          <ChevronDown className="w-8 h-8 text-gray-400 hover:text-cyan-400 transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
