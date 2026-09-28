import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import {
  CornerTL,
  CornerTR,
  CornerBL,
  CornerBR,
  CheckerboardGrid,
  WireframeGlobe,
} from './SVGs';
import { DrawerType } from '../types';

interface HeroProps {
  setActiveDrawer: (drawer: DrawerType) => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveDrawer }) => {
  return (
    <main
      className="flex-1 flex flex-col lg:flex-row justify-between items-stretch lg:items-end relative z-10 min-h-[85vh] py-8"
      style={{
        paddingInline: 'var(--pad-x)',
        paddingBlock: 'var(--main-py)',
      }}
    >
      {/* Left Block (vertically centered & enlarged) */}
      <div className="flex flex-col justify-center items-start my-auto py-6 max-w-4xl">
        {/* Top-left L-corner bracket */}
        <div className="mb-4 text-black">
          <CornerTL
            style={{ width: 'var(--corner)', height: 'var(--corner)' }}
          />
        </div>

        {/* Headline */}
        <h1
          className="font-orbitron font-extrabold uppercase tracking-[0.08em] leading-[1.02] text-black mb-6 select-none"
          style={{ fontSize: 'var(--headline)' }}
        >
          <div>FUTURE</div>
          <div>FORWARD</div>
          <div className="flex items-center gap-3">
            <span>FASHION</span>
            <CheckerboardGrid />
          </div>
        </h1>

        {/* Bottom-left L-corner bracket */}
        <div className="mt-2 mb-10 text-black">
          <CornerBL
            style={{ width: 'var(--corner)', height: 'var(--corner)' }}
          />
        </div>

        {/* CTA Button */}
        <button
          onClick={() => setActiveDrawer('SHOP')}
          className="group border-2 border-black rounded-md uppercase font-jakarta font-bold tracking-[0.2em] text-black bg-transparent transition-all duration-300 hover:bg-black hover:text-white flex items-center justify-center cursor-pointer shadow-sm hover:shadow-lg"
          style={{
            fontSize: 'var(--body)',
            paddingInline: 'var(--btn-px)',
            paddingBlock: 'var(--btn-py)',
            gap: 'var(--btn-gap)',
          }}
        >
          <span>SHOP NOW</span>
          <ArrowUpRight
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            style={{ width: 'var(--icon)', height: 'var(--icon)' }}
          />
        </button>
      </div>

      {/* Right Lower Feature Block (self-end, bottom-aligned on desktop) */}
      <div className="self-end mt-12 lg:mt-0 relative flex flex-col justify-between">
        <div
          className="relative flex flex-col items-start justify-between text-black border border-gray-200/60 bg-white/40 backdrop-blur-xs rounded-lg"
          style={{
            minWidth: 'var(--feature-min)',
            padding: 'var(--feature-pad)',
          }}
        >
          {/* Four Corner Bracket SVGs */}
          <CornerTL
            className="absolute top-0 left-0 text-black"
            style={{ width: 'var(--corner)', height: 'var(--corner)' }}
          />
          <CornerTR
            className="absolute top-0 right-0 text-black"
            style={{ width: 'var(--corner)', height: 'var(--corner)' }}
          />
          <CornerBL
            className="absolute bottom-0 left-0 text-black"
            style={{ width: 'var(--corner)', height: 'var(--corner)' }}
          />
          <CornerBR
            className="absolute bottom-0 right-0 text-black"
            style={{ width: 'var(--corner)', height: 'var(--corner)' }}
          />

          {/* Wireframe Globe */}
          <div className="mb-6 text-black">
            <WireframeGlobe />
          </div>

          {/* Tagline */}
          <div
            className="font-jakarta font-bold uppercase tracking-[0.2em] text-black leading-snug"
            style={{ fontSize: 'var(--body)' }}
          >
            <div>BEYOND TRENDS.</div>
            <div>BUILT FOR TOMORROW.</div>
          </div>
        </div>
      </div>

      {/* Top to Bottom Section Scroll Indicator Icon */}
      <button
        onClick={() => {
          window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
        }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-black hover:opacity-60 transition-all cursor-pointer group select-none z-20"
        aria-label="Scroll to Next Section"
      >
        <span className="font-jakarta text-[9px] uppercase tracking-[0.25em] font-semibold text-gray-400 group-hover:text-black">
          SCROLL
        </span>
        <div className="w-7 h-7 rounded-full border border-gray-300 group-hover:border-black flex items-center justify-center transition-colors">
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </div>
      </button>
    </main>
  );
};
