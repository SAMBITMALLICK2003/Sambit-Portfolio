
import { useEffect, useState } from 'react';
import { ChevronDown, Brain, Code, Zap } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'AI/ML Researcher & Engineer';
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Floating Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="p-4 bg-cyan-500/20 rounded-full backdrop-blur-sm animate-bounce">
              <Brain className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="p-4 bg-purple-500/20 rounded-full backdrop-blur-sm animate-bounce delay-150">
              <Code className="w-8 h-8 text-purple-400" />
            </div>
            <div className="p-4 bg-blue-500/20 rounded-full backdrop-blur-sm animate-bounce delay-300">
              <Zap className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            Sambit
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Mallick
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12">
            {displayText}
            <span className="animate-pulse">|</span>
          </div>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Pioneering AI research with expertise in Computer Vision, Deep Learning, and Generative AI. 
            Award-winning researcher recognized by ISRO and the President of India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#about"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full hover:scale-105 transition-transform duration-300 font-semibold shadow-lg hover:shadow-cyan-500/25"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 font-semibold"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
