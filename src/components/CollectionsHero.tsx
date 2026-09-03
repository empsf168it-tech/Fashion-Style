import React from 'react';
import { CornerTL, CornerTR, CornerBL, CornerBR, CheckerboardGrid, WireframeGlobe } from './SVGs';

export const CollectionsHero: React.FC = () => {
  return (
    <div className="relative w-full min-h-[75vh] flex flex-col justify-between items-center z-10 py-12 bg-black text-white overflow-hidden mb-16 border-b border-gray-800">
      {/* High Visibility Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1920&q=90"
          alt="COLLECTIONS ARCHIVE 2026"
          className="w-full h-full object-cover object-center opacity-85 scale-105 transition-all duration-700 filter contrast-105"
        />
        {/* Soft gradient to keep image bright while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
      </div>

      {/* Outer Corner Brackets */}
      <CornerTL className="absolute top-6 left-6 text-white z-20 drop-shadow-md" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
      <CornerTR className="absolute top-6 right-6 text-white z-20 drop-shadow-md" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
      <CornerBL className="absolute bottom-6 left-6 text-white z-20 drop-shadow-md" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
      <CornerBR className="absolute bottom-6 right-6 text-white z-20 drop-shadow-md" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

      {/* Centered Hero Content Block */}
      <div
        className="relative z-10 flex flex-col justify-center items-center text-center my-auto py-6 max-w-4xl mx-auto"
        style={{ paddingInline: 'var(--pad-x)' }}
      >
        <div className="mb-4 text-white drop-shadow-md mx-auto">
          <CornerTL style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
        </div>

        <span className="font-jakarta font-bold uppercase text-xs tracking-[0.25em] text-white/90 block mb-3 drop-shadow-md bg-black/50 px-4 py-1.5 border border-white/20 backdrop-blur-xs mx-auto">
          SEASON LINEUP // ARCHIVE 2026
        </span>

        <h1
          className="font-orbitron font-extrabold uppercase tracking-[0.08em] leading-[1.02] text-white mb-6 select-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] text-center flex flex-col items-center"
          style={{ fontSize: 'var(--headline)' }}
        >
          <div>ARCHIVE</div>
          <div>2026</div>
          <div className="flex items-center justify-center gap-3">
            <span>LINEUP</span>
            <CheckerboardGrid />
          </div>
        </h1>

        <div className="mt-2 mb-6 text-white drop-shadow-md mx-auto">
          <CornerBL style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
        </div>

        <p className="font-jakarta font-semibold text-xs text-white uppercase tracking-[0.2em] max-w-xl leading-relaxed drop-shadow-md bg-black/50 p-4 border-b-2 border-white backdrop-blur-xs text-center mx-auto">
          SILHOUETTE ARCHITECTURE, WEATHERPROOF MEMBRANES, AND KINETIC MOVEMENT APPAREL.
        </p>
      </div>

      {/* Centered Lower Feature Badge */}
      <div className="relative z-10 mx-auto mt-4" style={{ paddingInline: 'var(--pad-x)' }}>
        <div
          className="relative flex flex-row items-center justify-center gap-4 text-white border border-white/30 bg-black/70 backdrop-blur-md rounded-lg px-6 py-3 shadow-2xl"
        >
          <WireframeGlobe />
          <div className="font-jakarta font-bold uppercase tracking-[0.2em] text-white text-xs leading-snug text-center">
            SERIES 01 // 02 // 03. THREE CORE ARCHITECTURAL LINES.
          </div>
        </div>
      </div>
    </div>
  );
};
