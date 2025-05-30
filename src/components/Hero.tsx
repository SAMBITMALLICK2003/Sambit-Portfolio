import { ChevronDown, Sparkles, Bot, Download } from 'lucide-react';
import FloatingParticles from './FloatingParticles';
import TypingAnimation from './TypingAnimation';

interface HeroProps {
  onOpenChat: () => void;
}

const Hero = ({ onOpenChat }: HeroProps) => {
  const handleResumeDownload = () => {
    // You can replace this URL with the actual path to Sambit's resume
    const resumeUrl = '/resume/Sambit_Mallick_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Sambit_Mallick_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCollaborate = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      {/* Floating Particles */}
      <FloatingParticles 
        count={15}
        colors={['#06b6d4', '#8b5cf6', '#3b82f6', '#fbbf24']}
      />
      
      {/* Floating AI Elements */}
      <div className="absolute top-1/4 left-10 animate-bounce delay-1000">
        <div className="p-3 bg-cyan-500/20 rounded-full backdrop-blur-sm">
          <Bot className="w-6 h-6 text-cyan-400" />
        </div>
      </div>
      <div className="absolute top-1/3 right-16 animate-pulse delay-2000">
        <div className="p-2 bg-purple-500/20 rounded-full backdrop-blur-sm">
          <Sparkles className="w-5 h-5 text-purple-400" />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* AI Greeting */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 backdrop-blur-sm mb-6">
            <Bot className="w-5 h-5 text-cyan-400 mr-3" />
            <span className="text-cyan-400 font-bold">Sam AI Assistant</span>
            <div className="w-2 h-2 bg-green-400 rounded-full ml-3 animate-pulse"></div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 animate-slide-up">
          Sambit Mallick
        </h1>
        
        <div className="text-2xl md:text-3xl mb-8 animate-slide-up delay-200 h-12 flex items-center justify-center">
          <TypingAnimation 
            text="AI/ML Researcher & Engineer"
            speed={700}
            delay={500}
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold"
          />
        </div>
        
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-300 font-semibold">
          Bridging cutting-edge AI research with real-world applications. 
          From lunar crater detection at ISRO to quantum-classical ensemble methods.
        </p>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-slide-up delay-400">
          <a
            href="#research-impact"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-transform duration-200 font-bold shadow-lg hover:shadow-cyan-500/25"
          >
            Explore My Research
          </a>
          <button
            onClick={handleCollaborate}
            className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200 font-bold"
          >
            Collaborate
          </button>
          <button
            onClick={handleResumeDownload}
            className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:scale-105 transition-transform duration-200 font-bold shadow-lg hover:shadow-green-500/25"
          >
            <Download className="w-5 h-5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
