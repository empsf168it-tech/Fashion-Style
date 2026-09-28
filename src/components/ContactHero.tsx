import React from 'react';
import { CornerTL, CornerTR, CornerBL, CornerBR, CheckerboardGrid, WireframeGlobe } from './SVGs';
import { ArrowDown } from 'lucide-react';

export const ContactHero: React.FC = () => {
  return (
    <div className="relative w-full min-h-[70vh] md:min-h-[75vh] flex flex-col justify-center items-center z-10 py-10 sm:py-14 bg-black text-white overflow-hidden mb-16 border-b border-gray-800">
      {/* High Visibility Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=90"
          alt="VÉLORA GLOBAL HEADQUARTERS"
          className="w-full h-full object-cover object-center opacity-80 scale-105 transition-all duration-700 filter contrast-105"
        />
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
      </div>

      {/* Outer Corner Brackets */}
      <CornerTL className="absolute top-6 left-6 text-white z-20 drop-shadow-md" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
      <CornerTR className="absolute top-6 right-6 text-white z-20 drop-shadow-md" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
      <CornerBL className="absolute bottom-6 left-6 text-white z-20 drop-shadow-md" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
      <CornerBR className="absolute bottom-6 right-6 text-white z-20 drop-shadow-md" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

      {/* Centered Hero Content Block */}
      <div
        className="relative z-10 flex flex-col justify-center items-center text-center w-full max-w-4xl mx-auto gap-4 sm:gap-6"
        style={{ paddingInline: 'var(--pad-x)' }}
      >
        <div className="text-white drop-shadow-md mx-auto">
          <CornerTL style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
        </div>

        <span className="font-jakarta font-bold uppercase text-[10px] sm:text-xs tracking-[0.25em] text-white/90 block drop-shadow-md bg-black/60 px-4 py-1.5 border border-white/20 backdrop-blur-xs mx-auto">
          GLOBAL NETWORK // CLIENT RELATIONS & DISPATCH
        </span>

        <h1
          className="font-orbitron font-extrabold uppercase tracking-[0.08em] leading-[1.02] text-white select-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] text-center flex flex-col items-center"
          style={{ fontSize: 'var(--headline)' }}
        >
          <div>GET IN</div>
          <div>TOUCH</div>
          <div className="flex items-center justify-center gap-3">
            <span>CONTACT</span>
            <CheckerboardGrid />
          </div>
        </h1>

        <div className="text-white drop-shadow-md mx-auto">
          <CornerBL style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
        </div>

        {/* Uniform Hero Cards Stack (Matching Width in All Views) */}
        <div className="w-full max-w-xl flex flex-col gap-3.5 sm:gap-4 mt-1">
          {/* Summary Card */}
          <div className="w-full bg-black/60 border border-white/25 p-3.5 sm:p-4 backdrop-blur-md text-center rounded-sm">
            <p className="font-jakarta font-semibold text-[11px] sm:text-xs text-white uppercase tracking-[0.16em] leading-relaxed">
              DIRECT LINE TO OUR TOKYO & PARIS FLAGSHIP DESIGN STUDIOS AND VIP STEALTH CONCIERGE.
            </p>
          </div>

          {/* Feature Badge Card */}
          <div className="w-full flex items-center justify-center gap-3 sm:gap-4 border border-white/25 bg-black/60 backdrop-blur-md rounded-sm px-4 py-2.5 sm:py-3 shadow-lg">
            <WireframeGlobe />
            <span className="font-jakarta font-bold uppercase tracking-[0.16em] text-white text-[11px] sm:text-xs leading-snug text-center">
              CLIENT CONCIERGE OPERATIONAL 24/7 WORLDWIDE.
            </span>
          </div>
        </div>

        {/* Top to Bottom Section Scroll Indicator Icon */}
        <button
          onClick={() => {
            window.scrollBy({ top: window.innerHeight * 0.75, behavior: 'smooth' });
          }}
          className="relative z-10 mt-2 sm:mt-4 flex flex-col items-center gap-1.5 text-white hover:opacity-75 transition-all cursor-pointer group select-none"
          aria-label="Scroll Down"
        >
          <span className="font-jakarta text-[9px] uppercase tracking-[0.25em] font-semibold text-gray-300 group-hover:text-white">
            SCROLL DOWN
          </span>
          <div className="w-7 h-7 rounded-full border border-white/40 group-hover:border-white flex items-center justify-center transition-colors">
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </div>
  );
};
