import { useState, useRef } from 'react';
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
import AIAssistant, { AIAssistantRef } from '@/components/AIAssistant';
import ChatBanner from '@/components/ChatBanner';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const aiAssistantRef = useRef<AIAssistantRef>(null);

  const handleSearchQuery = (query: string) => {
    console.log('Search query received in Index:', query);
    setSearchQuery(query);
    // Force the AI assistant to open and process the query
    if (aiAssistantRef.current) {
      aiAssistantRef.current.openChat();
      // Small delay to ensure the chat is open before sending message
      setTimeout(() => {
        if (aiAssistantRef.current) {
          aiAssistantRef.current.sendMessage(query);
        }
      }, 300);
    }
  };

  const handleSearchQueryProcessed = () => {
    console.log('Search query processed, clearing...');
    setSearchQuery('');
  };

  const handleOpenChat = () => {
    console.log('Opening chat from Index...', aiAssistantRef.current);
    if (aiAssistantRef.current) {
      aiAssistantRef.current.openChat();
    } else {
      console.error('AI Assistant ref is null - component may not be mounted');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        onSearchQuery={handleSearchQuery}
        onOpenChat={handleOpenChat}
      />
      
      <main className="relative">
        <div id="hero">
          <Hero onOpenChat={handleOpenChat} />
        </div>
        <ResearchImpact />
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="publications">
          <Publications />
        </div>
        <div id="awards">
          <Awards />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>

      {/* AI Components */}
      <AIGuide />
      <ChatBanner onOpenChat={handleOpenChat} />
      
      {/* AI Assistant - This should always be rendered */}
      <AIAssistant 
        ref={aiAssistantRef}
        searchQuery={searchQuery}
        onSearchQueryProcessed={handleSearchQueryProcessed}
      />
    </div>
  );
};

export default Index;
