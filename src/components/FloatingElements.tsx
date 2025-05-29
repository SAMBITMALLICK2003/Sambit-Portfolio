
import { useState, useEffect } from 'react';
import { Bot, Sparkles, Code, Zap, Star, Atom } from 'lucide-react';

interface FloatingElementsProps {
  mousePosition: { x: number; y: number };
}

const FloatingElements = ({ mousePosition }: FloatingElementsProps) => {
  const [elements, setElements] = useState<Array<{
    id: number;
    icon: React.ReactNode;
    x: number;
    y: number;
    scale: number;
    rotation: number;
    color: string;
  }>>([]);

  const icons = [Bot, Sparkles, Code, Zap, Star, Atom];
  const colors = ['text-cyan-400', 'text-purple-400', 'text-blue-400', 'text-pink-400', 'text-indigo-400'];

  useEffect(() => {
    const newElements = Array.from({ length: 8 }, (_, i) => {
      const IconComponent = icons[Math.floor(Math.random() * icons.length)];
      return {
        id: i,
        icon: <IconComponent className="w-6 h-6" />,
        x: Math.random() * 80 + 10, // 10-90% of viewport width
        y: Math.random() * 80 + 10, // 10-90% of viewport height
        scale: Math.random() * 0.5 + 0.5,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
    });
    setElements(newElements);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
      {elements.map((element) => {
        const distanceFromMouse = Math.sqrt(
          Math.pow((mousePosition.x / window.innerWidth * 100) - element.x, 2) +
          Math.pow((mousePosition.y / window.innerHeight * 100) - element.y, 2)
        );
        
        const isNearMouse = distanceFromMouse < 20;
        const parallaxX = (mousePosition.x - window.innerWidth / 2) * 0.01;
        const parallaxY = (mousePosition.y - window.innerHeight / 2) * 0.01;

        return (
          <div
            key={element.id}
            className={`absolute transition-all duration-500 ${element.color} ${
              isNearMouse ? 'animate-pulse' : ''
            }`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              transform: `
                translate(-50%, -50%) 
                translate(${parallaxX}px, ${parallaxY}px)
                scale(${element.scale * (isNearMouse ? 1.5 : 1)}) 
                rotate(${element.rotation + (isNearMouse ? 180 : 0)}deg)
              `,
              opacity: isNearMouse ? 1 : 0.6,
            }}
          >
            <div className={`p-3 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-full backdrop-blur-sm border border-current/20 hover:border-current/50 transition-all duration-300 ${
              isNearMouse ? 'shadow-lg shadow-current/25' : ''
            }`}>
              {element.icon}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FloatingElements;
