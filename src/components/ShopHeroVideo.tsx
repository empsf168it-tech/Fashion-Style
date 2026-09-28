import React, { useEffect, useRef } from 'react';
import { CornerTL, CornerTR, CornerBL, CornerBR, CheckerboardGrid } from './SVGs';
import { ArrowDown } from 'lucide-react';

export const ShopHeroVideo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Soft atmospheric pastel pink & blue floating particle clouds effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Floating cloud particles
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      alpha: number;
    }> = [];

    const colors = [
      'rgba(244, 114, 182, 0.12)', // soft pink
      'rgba(147, 197, 253, 0.12)', // pastel blue
      'rgba(192, 132, 252, 0.08)', // lavender
      'rgba(255, 255, 255, 0.15)', // white cloud haze
    ];

    for (let i = 0; i < 24; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 180 + 80,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -p.radius) p.x = width + p.radius;
        if (p.x > width + p.radius) p.x = -p.radius;
        if (p.y < -p.radius) p.y = height + p.radius;
        if (p.y > height + p.radius) p.y = -p.radius;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[65vh] min-h-[480px] overflow-hidden bg-black text-white mb-12 flex items-center justify-center border-b border-gray-200">
      {/* Background Video Stream */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center opacity-85 scale-105 transition-transform duration-1000 filter contrast-110 saturate-110"
        poster="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1920&q=85"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-fashion-model-walking-in-a-studio-5421/1080p.mp4"
          type="video/mp4"
        />
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-walking-in-a-pink-and-blue-light-42848-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Atmospheric Dreamy Clouds Canvas Overlay */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />

      {/* Cinematic High-Contrast Tint Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/70 z-10" />

      {/* Corner Brackets Frame */}
      <CornerTL className="absolute top-6 left-6 text-white z-20" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
      <CornerTR className="absolute top-6 right-6 text-white z-20" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
      <CornerBL className="absolute bottom-6 left-6 text-white z-20" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
      <CornerBR className="absolute bottom-6 right-6 text-white z-20" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

      {/* Center Hero Overlay Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 max-w-4xl">
        <div className="flex items-center gap-3 mb-4 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-jakarta font-semibold text-[11px] uppercase tracking-[0.2em] text-white">
            CINEMATIC CAMPAIGN FILM // 4K EDITION
          </span>
        </div>

        <h1
          className="font-orbitron font-extrabold uppercase tracking-[0.08em] text-white mb-4 drop-shadow-[0_4px_14px_rgba(0,0,0,0.9)] leading-none"
          style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)' }}
        >
          GARMENT CATALOG
        </h1>

        <div className="flex items-center gap-3 mb-6 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/20 shadow-md">
          <span className="font-jakarta font-bold text-xs uppercase tracking-[0.25em] text-white">
            DREAMY LUXURY SILHOUETTE ARCHITECTURE
          </span>
          <CheckerboardGrid />
        </div>

        <p className="font-jakarta font-semibold text-xs text-white uppercase tracking-[0.18em] max-w-xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] bg-black/60 backdrop-blur-md p-4 border-b-2 border-white">
          Explore technical outerwear, geo-mesh hoodies, and modular garments engineered for high performance in hostile urban environments.
        </p>

        {/* Top to Bottom Section Scroll Indicator Icon */}
        <button
          onClick={() => {
            window.scrollBy({ top: window.innerHeight * 0.75, behavior: 'smooth' });
          }}
          className="mt-8 flex flex-col items-center gap-1.5 text-white hover:opacity-80 transition-all cursor-pointer group select-none bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:border-white"
          aria-label="Scroll to Products"
        >
          <span className="font-jakarta text-[9px] uppercase tracking-[0.25em] font-bold text-white">
            SCROLL DOWN
          </span>
          <div className="w-6 h-6 rounded-full border border-white/60 group-hover:border-white flex items-center justify-center transition-colors">
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-white" />
          </div>
        </button>
      </div>
    </div>
  );
};
