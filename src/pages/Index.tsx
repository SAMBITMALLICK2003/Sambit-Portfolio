
import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ResearchImpact from '@/components/ResearchImpact';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Publications from '@/components/Publications';
import Awards from '@/components/Awards';
import Contact from '@/components/Contact';
import AIGuide from '@/components/AIGuide';
import AIAssistant from '@/components/AIAssistant';
import { Bot } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* AI Assistant Toggle Button */}
      <div className="fixed top-24 right-6 z-40">
        <button
          onClick={() => {
            // This will be handled by the AIAssistant component
            console.log('Toggle AI Assistant');
          }}
          className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full p-3 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
        >
          <Bot className="w-5 h-5 text-cyan-400" />
        </button>
      </div>

      <main className="relative">
        <Hero />
        <ResearchImpact />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Awards />
        <Contact />
      </main>
      <AIGuide />
      <AIAssistant />
    </div>
  );
};

export default Index;
