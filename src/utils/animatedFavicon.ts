export class AnimatedFavicon {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private animationId: number | null = null;
  private frame = 0;

  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 32;
    this.canvas.height = 32;
    this.ctx = this.canvas.getContext('2d')!;
  }

  private drawFrame() {
    const ctx = this.ctx;
    
    // Clear canvas
    ctx.clearRect(0, 0, 32, 32);
    
    // Background gradient
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, '#1e293b');
    gradient.addColorStop(1, '#0f172a');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);

    // Animated border
    const borderGradient = ctx.createLinearGradient(0, 0, 32, 32);
    const hue = (this.frame * 2) % 360;
    borderGradient.addColorStop(0, `hsl(${hue}, 70%, 60%)`);
    borderGradient.addColorStop(1, `hsl(${(hue + 60) % 360}, 70%, 60%)`);
    
    ctx.strokeStyle = borderGradient;
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, 30, 30);

    // Central AI core
    ctx.beginPath();
    ctx.arc(16, 16, 4 + Math.sin(this.frame * 0.1) * 1, 0, 2 * Math.PI);
    ctx.fillStyle = '#06b6d4';
    ctx.fill();
    
    // Glowing effect
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#06b6d4';
    ctx.fill();
    ctx.shadowBlur = 0;

    // Orbiting particles
    for (let i = 0; i < 4; i++) {
      const angle = (this.frame * 0.05) + (i * Math.PI / 2);
      const radius = 8;
      const x = 16 + Math.cos(angle) * radius;
      const y = 16 + Math.sin(angle) * radius;
      
      ctx.beginPath();
      ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
      ctx.fillStyle = i % 2 === 0 ? '#8b5cf6' : '#06b6d4';
      ctx.fill();
    }

    // Neural connections
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.3 + Math.sin(this.frame * 0.1) * 0.2;
    
    // Draw connecting lines
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI / 4);
      const startX = 16 + Math.cos(angle) * 6;
      const startY = 16 + Math.sin(angle) * 6;
      const endX = 16 + Math.cos(angle) * 14;
      const endY = 16 + Math.sin(angle) * 14;
      
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }
    
    ctx.globalAlpha = 1;

    this.frame++;
  }

  public start() {
    const animate = () => {
      this.drawFrame();
      this.updateFavicon();
      this.animationId = requestAnimationFrame(animate);
    };
    
    animate();
  }

  public stop() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  private updateFavicon() {
    const dataUrl = this.canvas.toDataURL('image/png');
    
    let favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.type = 'image/png';
      document.head.appendChild(favicon);
    }
    
    favicon.href = dataUrl;
  }
}

export const startAnimatedFavicon = () => {
  const animatedFavicon = new AnimatedFavicon();
  animatedFavicon.start();
  return animatedFavicon;
};