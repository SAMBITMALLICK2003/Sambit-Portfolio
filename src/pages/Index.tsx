
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
import ColorModeToggle from '@/components/ColorModeToggle';
import { Menu, X } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <ColorModeToggle />
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
    </div>
  );
};

export default Index;
