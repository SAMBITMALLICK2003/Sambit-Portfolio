import { useEffect, useState } from 'react';

interface FloatingParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

interface FloatingParticlesProps {
  count?: number;
  colors?: string[];
  className?: string;
}

const FloatingParticles = ({ 
  count = 20, 
  colors = ['#06b6d4', '#8b5cf6', '#3b82f6', '#06b6d4'], 
  className = "" 
}: FloatingParticlesProps) => {
  const [particles, setParticles] = useState<FloatingParticle[]>([]);

  useEffect(() => {
    const newParticles: FloatingParticle[] = [];
    
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      });
    }
    
    setParticles(newParticles);
  }, [count, colors]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;