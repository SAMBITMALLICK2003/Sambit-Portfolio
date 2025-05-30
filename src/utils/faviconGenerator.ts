export const generateFavicon = () => {
  // Create canvas
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Set canvas size (32x32 for favicon)
  canvas.width = 32;
  canvas.height = 32;

  // Background gradient (dark tech theme)
  const gradient = ctx.createLinearGradient(0, 0, 32, 32);
  gradient.addColorStop(0, '#0f172a'); // slate-900
  gradient.addColorStop(0.5, '#1e293b'); // slate-800
  gradient.addColorStop(1, '#334155'); // slate-700
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 32, 32);

  // Add border
  ctx.strokeStyle = '#06b6d4'; // cyan-500
  ctx.lineWidth = 1;
  ctx.strokeRect(1, 1, 30, 30);

  // Draw AI brain/neural network pattern
  ctx.strokeStyle = '#06b6d4'; // cyan-400
  ctx.lineWidth = 1;
  
  // Neural network nodes
  const nodes = [
    { x: 8, y: 12 },
    { x: 8, y: 20 },
    { x: 16, y: 8 },
    { x: 16, y: 16 },
    { x: 16, y: 24 },
    { x: 24, y: 12 },
    { x: 24, y: 20 }
  ];

  // Draw connections
  ctx.beginPath();
  ctx.moveTo(8, 12);
  ctx.lineTo(16, 8);
  ctx.lineTo(24, 12);
  
  ctx.moveTo(8, 12);
  ctx.lineTo(16, 16);
  ctx.lineTo(24, 12);
  
  ctx.moveTo(8, 20);
  ctx.lineTo(16, 16);
  ctx.lineTo(24, 20);
  
  ctx.moveTo(8, 20);
  ctx.lineTo(16, 24);
  ctx.lineTo(24, 20);
  
  ctx.moveTo(16, 8);
  ctx.lineTo(16, 16);
  ctx.moveTo(16, 16);
  ctx.lineTo(16, 24);
  
  ctx.stroke();

  // Draw nodes
  nodes.forEach(node => {
    ctx.beginPath();
    ctx.arc(node.x, node.y, 2, 0, 2 * Math.PI);
    ctx.fillStyle = '#8b5cf6'; // purple-500
    ctx.fill();
    
    // Glow effect
    ctx.beginPath();
    ctx.arc(node.x, node.y, 3, 0, 2 * Math.PI);
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 0.5;
    ctx.stroke();
  });

  // Add "SM" initials in corner
  ctx.font = 'bold 8px Arial';
  ctx.fillStyle = '#06b6d4';
  ctx.fillText('SM', 2, 8);

  return canvas.toDataURL('image/png');
};

export const setCustomFavicon = () => {
  const faviconUrl = generateFavicon();
  
  // Remove existing favicons
  const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
  existingFavicons.forEach(favicon => favicon.remove());
  
  // Create new favicon
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png';
  link.href = faviconUrl;
  
  document.head.appendChild(link);
  
  // Also create apple-touch-icon
  const appleTouchIcon = document.createElement('link');
  appleTouchIcon.rel = 'apple-touch-icon';
  appleTouchIcon.href = faviconUrl;
  
  document.head.appendChild(appleTouchIcon);
};