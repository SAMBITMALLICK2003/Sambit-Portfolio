import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

interface ParticlesProps {
  density?: number;
  speed?: number;
  colors?: string[];
  interactive?: boolean;
  className?: string;
}

const Particles = ({ 
  density = 80, 
  speed = 0.5, 
  colors = ['#06b6d4', '#8b5cf6', '#06b6d4', '#3b82f6'], 
  interactive = true,
  className = ""
}: ParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match viewport exactly
    const setCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < density; i++) {
        particlesRef.current.push(createParticle());
      }
    };

    const createParticle = (): Particle => {
      const maxLife = Math.random() * 300 + 200;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: maxLife,
        maxLife: maxLife
      };
    };

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) * (canvas.width / rect.width);
      mouseRef.current.y = (e.clientY - rect.top) * (canvas.height / rect.height);
    };

    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Mouse interaction effect
        if (interactive) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const force = (100 - distance) / 100;
            particle.vx += (dx / distance) * force * 0.01;
            particle.vy += (dy / distance) * force * 0.01;
          }
        }

        // Boundary collision with proper containment
        if (particle.x < 0) {
          particle.x = 0;
          particle.vx *= -1;
        }
        if (particle.x > canvas.width) {
          particle.x = canvas.width;
          particle.vx *= -1;
        }
        if (particle.y < 0) {
          particle.y = 0;
          particle.vy *= -1;
        }
        if (particle.y > canvas.height) {
          particle.y = canvas.height;
          particle.vy *= -1;
        }

        // Update life
        particle.life--;
        const lifeRatio = particle.life / particle.maxLife;
        
        // Fade effect based on life
        const currentOpacity = particle.opacity * lifeRatio;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = currentOpacity;
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw connections to nearby particles
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              ctx.save();
              ctx.globalAlpha = (1 - distance / 120) * 0.2 * lifeRatio;
              ctx.strokeStyle = particle.color;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
              ctx.restore();
            }
          }
        });

        // Reset particle if life is over
        if (particle.life <= 0) {
          particlesRef.current[index] = createParticle();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [density, speed, colors, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full pointer-events-none z-0 ${className}`}
      style={{ 
        width: '100vw', 
        height: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh'
      }}
    />
  );
};

export default Particles;