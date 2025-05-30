// Users\Sambit Mallick\Desktop\mlops\portfolio\ai-vision-nexus-portfolio\src\components\FaviconControls.tsx
import { useState } from 'react';
import { setStaticFavicon } from '../utils/staticFavicon';
import { startAnimatedFavicon } from '../utils/animatedFavicon';
import { Settings } from 'lucide-react';

const FaviconControls = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStaticFavicon = () => {
    setStaticFavicon();
  };

  const handleAnimatedFavicon = () => {
    startAnimatedFavicon();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-slate-800 text-white rounded-full shadow-lg hover:bg-slate-700 transition-colors"
      >
        <Settings className="w-5 h-5" />
      </button>
      
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-slate-800 rounded-lg p-4 space-y-2 min-w-[200px] shadow-xl">
          <h3 className="text-white font-semibold">Favicon Style</h3>
          <button
            onClick={handleStaticFavicon}
            className="w-full px-3 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition-colors text-sm"
          >
            Static AI Brain
          </button>
          <button
            onClick={handleAnimatedFavicon}
            className="w-full px-3 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors text-sm"
          >
            Animated AI Core
          </button>
        </div>
      )}
    </div>
  );
};

export default FaviconControls;