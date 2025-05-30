import { useState, useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import Particles from './components/Particles';
import { setStaticFavicon } from './utils/staticFavicon';
import Index from '@/pages/Index';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Set custom favicon when app loads
    setStaticFavicon();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-x-hidden">
      {/* Particle Background - Reduced density on mobile */}
      <Particles 
        density={window.innerWidth < 768 ? 30 : 60}
        speed={0.3}
        colors={['#06b6d4', '#8b5cf6', '#3b82f6', '#06b6d4']}
        interactive={window.innerWidth >= 768}
      />
      
      {/* Main Content */}
      <div className="relative z-10 w-full overflow-x-hidden">
        <Index />
      </div>
      <Toaster />
    </div>
  );
}

export default App;