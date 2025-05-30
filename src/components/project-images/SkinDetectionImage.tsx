import { Eye, Scan, Shield, CheckCircle } from 'lucide-react';

const SkinDetectionImage = () => {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-green-600/20 to-emerald-500/20 flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-green-400"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Main Scanner Interface */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Scanning Target */}
        <div className="relative">
          <div className="w-24 h-24 border-4 border-green-400/50 rounded-lg flex items-center justify-center bg-green-500/10 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-lg"></div>
          </div>
          
          {/* Scanning Lines */}
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-scan"></div>
          </div>
          
          {/* Corner Markers */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-green-400"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-green-400"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-green-400"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-green-400"></div>
        </div>
      </div>
      
      {/* Analysis Icons */}
      <div className="absolute top-6 right-6 space-y-2">
        <div className="p-2 bg-green-500/20 rounded-full">
          <Eye className="w-5 h-5 text-green-400" />
        </div>
        <div className="p-2 bg-emerald-500/20 rounded-full">
          <Scan className="w-5 h-5 text-emerald-400" />
        </div>
      </div>
      
      {/* Accuracy Badge */}
      <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm rounded-full px-3 py-1 border border-green-400/30">
        <CheckCircle className="w-4 h-4 text-green-400" />
        <span className="text-green-400 text-sm font-semibold">93.8%</span>
      </div>
    </div>
  );
};

export default SkinDetectionImage;