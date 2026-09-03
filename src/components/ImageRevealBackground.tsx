import React, { useEffect, useRef, useState } from 'react';

export const BG_IMAGE_1 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260802_074534_f0d9d476-3f86-4c67-9b12-dfc63d99da41.png&w=1920&q=85';

export const BG_IMAGE_2 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260802_075145_1b557479-775b-43af-8270-f45d79d97d5a.png&w=1920&q=85';

export const ImageRevealBackground: React.FC = () => {
  const revealRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const smoothRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const gridOffsetRef = useRef({ x: 0, y: 0 });

  const [gridCellSize, setGridCellSize] = useState(48);
  const [gridOffset, setGridOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Canvas initialization for mask creation
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasRef.current = canvas;

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
      const newCellSize = Math.round(Math.min(64, Math.max(36, window.innerWidth * 0.028)));
      setGridCellSize(newCellSize);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    const animate = () => {
      // 1. Ease smoothRef toward mouseRef with factor 0.1
      smoothRef.current.x += (mouseRef.current.x - smoothRef.current.x) * 0.1;
      smoothRef.current.y += (mouseRef.current.y - smoothRef.current.y) * 0.1;

      // 2. Spotlight radius (fluid): Math.round(Math.min(420, Math.max(160, window.innerWidth * 0.16)))
      const radius = Math.round(Math.min(420, Math.max(160, window.innerWidth * 0.16)));

      // 3. Draw radial gradient on offscreen canvas
      const cvs = canvasRef.current;
      if (cvs && revealRef.current) {
        const ctx = cvs.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, cvs.width, cvs.height);

          const cx = smoothRef.current.x;
          const cy = smoothRef.current.y;

          const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
          grad.addColorStop(0, 'rgba(255,255,255,1)');
          grad.addColorStop(0.4, 'rgba(255,255,255,1)');
          grad.addColorStop(0.6, 'rgba(255,255,255,0.75)');
          grad.addColorStop(0.75, 'rgba(255,255,255,0.4)');
          grad.addColorStop(0.88, 'rgba(255,255,255,0.12)');
          grad.addColorStop(1, 'rgba(255,255,255,0)');

          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, cvs.width, cvs.height);

          const dataUrl = cvs.toDataURL();
          revealRef.current.style.maskImage = `url(${dataUrl})`;
          revealRef.current.style.webkitMaskImage = `url(${dataUrl})`;
          revealRef.current.style.maskSize = '100% 100%';
          revealRef.current.style.webkitMaskSize = '100% 100%';
        }
      }

      // 4. Parallax grid offset math
      const normX = (smoothRef.current.x / window.innerWidth) - 0.5;
      const normY = (smoothRef.current.y / window.innerHeight) - 0.5;

      const targetX = normX * 16;
      const targetY = normY * 16;

      gridOffsetRef.current.x += (targetX - gridOffsetRef.current.x) * 0.06;
      gridOffsetRef.current.y += (targetY - gridOffsetRef.current.y) * 0.06;

      setGridOffset({ x: gridOffsetRef.current.x, y: gridOffsetRef.current.y });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Base Layer: BG_IMAGE_1 */}
      <div
        className="absolute inset-0 bg-cover bg-center lg:bg-[70%_center] bg-no-repeat opacity-95"
        style={{ backgroundImage: `url("${BG_IMAGE_1}")` }}
      />

      {/* 2. Reveal Layer: BG_IMAGE_2 clipped by canvas mask */}
      <div
        ref={revealRef}
        className="absolute inset-0 bg-cover bg-center lg:bg-[70%_center] bg-no-repeat opacity-95"
        style={{ backgroundImage: `url("${BG_IMAGE_2}")` }}
      />

      {/* 3. Subtle SVG Grid Overlay (opacity 0.10, stroke #64748b, strokeWidth 0.6) */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        <defs>
          <pattern
            id="bg-grid-pattern"
            width={gridCellSize}
            height={gridCellSize}
            patternUnits="userSpaceOnUse"
            x={gridOffset.x}
            y={gridOffset.y}
          >
            <path
              d={`M ${gridCellSize} 0 L 0 0 0 ${gridCellSize}`}
              fill="none"
              stroke="#64748b"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bg-grid-pattern)" />
      </svg>
    </div>
  );
};
