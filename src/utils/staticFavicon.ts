export const generateStaticFavicon = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  canvas.width = 64; // Higher resolution for better quality
  canvas.height = 64;

  // Background with gradient
  const bgGradient = ctx.createLinearGradient(0, 0, 64, 64);
  bgGradient.addColorStop(0, '#0f172a'); // slate-900
  bgGradient.addColorStop(0.5, '#1e293b'); // slate-800  
  bgGradient.addColorStop(1, '#334155'); // slate-700
  
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, 64, 64);

  // Outer ring
  ctx.strokeStyle = '#06b6d4'; // cyan-500
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(32, 32, 28, 0, 2 * Math.PI);
  ctx.stroke();

  // Inner elements - AI brain pattern
  ctx.lineWidth = 2;
  
  // Central node
  ctx.beginPath();
  ctx.arc(32, 32, 6, 0, 2 * Math.PI);
  ctx.fillStyle = '#8b5cf6'; // purple-500
  ctx.fill();
  ctx.strokeStyle = '#a855f7'; // purple-400
  ctx.stroke();

  // Surrounding nodes
  const nodePositions = [
    { angle: 0, distance: 16 },
    { angle: Math.PI / 2, distance: 16 },
    { angle: Math.PI, distance: 16 },
    { angle: 3 * Math.PI / 2, distance: 16 },
    { angle: Math.PI / 4, distance: 20 },
    { angle: 3 * Math.PI / 4, distance: 20 },
    { angle: 5 * Math.PI / 4, distance: 20 },
    { angle: 7 * Math.PI / 4, distance: 20 }
  ];

  // Draw connections
  ctx.strokeStyle = '#06b6d4';
  ctx.lineWidth = 1.5;
  ctx.globalAlpha = 0.7;
  
  nodePositions.forEach(node => {
    const x = 32 + Math.cos(node.angle) * node.distance;
    const y = 32 + Math.sin(node.angle) * node.distance;
    
    ctx.beginPath();
    ctx.moveTo(32, 32);
    ctx.lineTo(x, y);
    ctx.stroke();
  });

  ctx.globalAlpha = 1;

  // Draw nodes
  nodePositions.forEach(node => {
    const x = 32 + Math.cos(node.angle) * node.distance;
    const y = 32 + Math.sin(node.angle) * node.distance;
    
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.fillStyle = '#06b6d4';
    ctx.fill();
  });

  // Add subtle glow effect
  ctx.shadowBlur = 10;
  ctx.shadowColor = '#06b6d4';
  ctx.strokeStyle = '#06b6d4';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(32, 32, 28, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.shadowBlur = 0;

  return canvas.toDataURL('image/png');
};

export const setStaticFavicon = () => {
  const faviconUrl = generateStaticFavicon();
  
  // Remove existing favicons
  const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
  existingFavicons.forEach(favicon => favicon.remove());
  
  // Create favicon link
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png';
  link.href = faviconUrl;
  document.head.appendChild(link);
  
  // Create apple-touch-icon
  const appleTouchIcon = document.createElement('link');
  appleTouchIcon.rel = 'apple-touch-icon';
  appleTouchIcon.href = faviconUrl;
  document.head.appendChild(appleTouchIcon);
  
  // Create different sizes
  const sizes = [16, 32, 48];
  sizes.forEach(size => {
    const sizedLink = document.createElement('link');
    sizedLink.rel = 'icon';
    sizedLink.type = 'image/png';
    sizedLink.sizes = `${size}x${size}`;
    sizedLink.href = faviconUrl;
    document.head.appendChild(sizedLink);
  });
};