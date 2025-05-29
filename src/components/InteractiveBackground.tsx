
import { useEffect, useRef, useState } from 'react';

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const dotsRef = useRef<Array<{
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    size: number;
    opacity: number;
    color: string;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createDots = () => {
      const dots = [];
      const spacing = 100;
      const colors = ['#06b6d4', '#a855f7', '#3b82f6', '#ec4899'];

      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          dots.push({
            x: x + Math.random() * 20 - 10,
            y: y + Math.random() * 20 - 10,
            baseX: x,
            baseY: y,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.3 + 0.1,
            color: colors[Math.floor(Math.random() * colors.length)]
          });
        }
      }
      dotsRef.current = dots;
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dotsRef.current.forEach((dot) => {
        const dx = mousePosition.x - dot.baseX;
        const dy = mousePosition.y - dot.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          dot.x = dot.baseX + dx * force * 0.3;
          dot.y = dot.baseY + dy * force * 0.3;
          dot.opacity = Math.min(0.8, 0.1 + force * 0.7);
          dot.size = Math.max(1, dot.size + force * 2);
        } else {
          dot.x += (dot.baseX - dot.x) * 0.05;
          dot.y += (dot.baseY - dot.y) * 0.05;
          dot.opacity += (0.1 - dot.opacity) * 0.05;
          dot.size += (1 - dot.size) * 0.05;
        }

        ctx.save();
        ctx.globalAlpha = dot.opacity;
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Add glow effect for dots near mouse
        if (distance < maxDistance) {
          ctx.save();
          ctx.globalAlpha = dot.opacity * 0.3;
          ctx.fillStyle = dot.color;
          ctx.filter = 'blur(3px)';
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.size * 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createDots();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createDots();
    });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default InteractiveBackground;
