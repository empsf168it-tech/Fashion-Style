import React from 'react';
import { Hero } from '../components/Hero';
import { PageType } from '../types';
import { CornerTL, CornerTR, CornerBL, CornerBR } from '../components/SVGs';
import { ArrowUpRight } from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: PageType) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Hero Viewport */}
      <Hero setActiveDrawer={(type) => type === 'SHOP' && setCurrentPage('SHOP')} />

      {/* ========================================================================= */}
      {/* HOME SECTION 1: CURATED GARMENT DROPS (High-Level Asymmetric Shop Showcase) */}
      {/* ========================================================================= */}
      <section
        className="relative z-10 py-20 border-t border-gray-200 bg-white text-black"
        style={{ paddingInline: 'var(--pad-x)' }}
      >
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="mb-2 text-black">
            <CornerTL style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
          </div>
          <div className="flex items-baseline justify-between w-full flex-wrap gap-4">
            <h2
              className="font-orbitron font-extrabold uppercase tracking-[0.08em] text-black"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3.25rem)' }}
            >
              CURATED GARMENTS
            </h2>
            <button
              onClick={() => {
                setCurrentPage('SHOP');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group font-jakarta font-semibold uppercase tracking-[0.2em] text-black text-xs flex items-center gap-2 hover:opacity-60 transition-opacity cursor-pointer"
            >
              <span>ENTER FULL CATALOG</span>
              <ArrowUpRight strokeWidth={2} className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* High-Level Asymmetric 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Large Showcase Card (Left - 7 cols) */}
          <div
            onClick={() => {
              setCurrentPage('SHOP');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="lg:col-span-7 group relative border border-gray-200 p-6 md:p-8 flex flex-col justify-between hover:border-black transition-colors duration-500 bg-white cursor-pointer"
          >
            <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

            {/* High Fashion Image Frame */}
            <div className="w-full aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/10] bg-gray-100 border border-gray-200 overflow-hidden mb-6 relative">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
                alt="CYBER-TEX OVERCOAT"
                className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 font-jakarta font-semibold uppercase text-xs tracking-widest">
                FLAGSHIP DROP
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="font-jakarta font-semibold uppercase text-xs tracking-[0.2em] text-gray-400 block mb-1">
                  SERIES 2026 // LIMITED RELEASE
                </span>
                <h3 className="font-orbitron font-bold text-2xl uppercase tracking-wider text-black">
                  CYBER-TEX OVERCOAT
                </h3>
                <p className="font-jakarta text-xs text-gray-600 max-w-md mt-1 leading-relaxed">
                  Weatherproof high-density synthetic poly-membrane with structured shoulder geometry and magnetic collar closure.
                </p>
              </div>

              <div className="flex items-center gap-4 border-t md:border-t-0 pt-4 md:pt-0 border-gray-100">
                <span className="font-jakarta font-extrabold text-xl text-black">$850</span>
                <span className="border border-black bg-black text-white px-4 py-2 font-jakarta font-semibold text-xs uppercase tracking-widest group-hover:bg-white group-hover:text-black transition-colors">
                  VIEW PRODUCT
                </span>
              </div>
            </div>
          </div>

          {/* Sub Showcase Cards (Right - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Sub-card 1 */}
            <div
              onClick={() => {
                setCurrentPage('SHOP');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative border border-gray-200 p-5 flex items-center gap-5 hover:border-black transition-colors duration-500 bg-white cursor-pointer flex-1"
            >
              <CornerTL className="absolute top-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerTR className="absolute top-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBL className="absolute bottom-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBR className="absolute bottom-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

              <div className="w-1/3 aspect-square bg-gray-100 border border-gray-200 overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85"
                  alt="GEO-MESH TECH HOODIE"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex-1">
                <span className="font-jakarta font-semibold uppercase text-[10px] tracking-widest text-gray-400 block mb-1">
                  NEW ARRIVAL
                </span>
                <h4 className="font-orbitron font-bold text-sm uppercase tracking-wide text-black mb-1">
                  GEO-MESH TECH HOODIE
                </h4>
                <p className="font-jakarta text-[11px] text-gray-500 leading-snug mb-3">
                  Thermal micro-mesh matrix with thumb loops.
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-jakarta font-bold text-sm text-black">$320</span>
                  <ArrowUpRight className="w-4 h-4 text-black group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>

            {/* Sub-card 2 */}
            <div
              onClick={() => {
                setCurrentPage('SHOP');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative border border-gray-200 p-5 flex items-center gap-5 hover:border-black transition-colors duration-500 bg-white cursor-pointer flex-1"
            >
              <CornerTL className="absolute top-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerTR className="absolute top-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBL className="absolute bottom-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBR className="absolute bottom-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

              <div className="w-1/3 aspect-square bg-gray-100 border border-gray-200 overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=85"
                  alt="ORBITAL TAPERED TROUSERS"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex-1">
                <span className="font-jakarta font-semibold uppercase text-[10px] tracking-widest text-gray-400 block mb-1">
                  BEST SELLER
                </span>
                <h4 className="font-orbitron font-bold text-sm uppercase tracking-wide text-black mb-1">
                  ORBITAL TAPERED TROUSERS
                </h4>
                <p className="font-jakarta text-[11px] text-gray-500 leading-snug mb-3">
                  4-Way stretch polymer with zip pods.
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-jakarta font-bold text-sm text-black">$290</span>
                  <ArrowUpRight className="w-4 h-4 text-black group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* HOME SECTION 2: ARCHIVE 2026 COLLECTIONS (High-Level 3-Column Editorial) */}
      {/* ========================================================================= */}
      <section
        className="relative z-10 py-20 border-t border-gray-200 bg-white text-black"
        style={{ paddingInline: 'var(--pad-x)' }}
      >
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="mb-2 text-black">
            <CornerTL style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
          </div>
          <div className="flex items-baseline justify-between w-full flex-wrap gap-4">
            <h2
              className="font-orbitron font-extrabold uppercase tracking-[0.08em] text-black"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3.25rem)' }}
            >
              ARCHIVE 2026
            </h2>
            <button
              onClick={() => {
                setCurrentPage('COLLECTIONS');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group font-jakarta font-semibold uppercase tracking-[0.2em] text-black text-xs flex items-center gap-2 hover:opacity-60 transition-opacity cursor-pointer"
            >
              <span>EXPLORE ALL COLLECTIONS</span>
              <ArrowUpRight strokeWidth={2} className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3 High-Level Collection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div
            onClick={() => {
              setCurrentPage('COLLECTIONS');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group relative border border-gray-200 p-6 flex flex-col justify-between hover:border-black transition-colors duration-500 bg-white cursor-pointer"
          >
            <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

            <div>
              <div className="w-full aspect-[4/5] bg-gray-100 border border-gray-200 overflow-hidden mb-6 relative">
                <img
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=85"
                  alt="SYNTHETIC HORIZONS"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-black text-white px-3 py-1 font-orbitron font-bold text-[10px] tracking-widest uppercase">
                  SERIES 01
                </span>
              </div>

              <span className="font-jakarta font-semibold uppercase text-[10px] tracking-[0.2em] text-gray-400 block mb-1">
                WEATHER-SEALED FABRICS
              </span>
              <h3 className="font-orbitron font-bold text-xl uppercase tracking-wider text-black mb-2">
                SYNTHETIC HORIZONS
              </h3>
              <p className="font-jakarta text-xs text-gray-600 leading-relaxed mb-6">
                Ergonomic outerwear engineered from 100% recycled polymers with zero water absorption.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between font-jakarta font-semibold text-xs uppercase tracking-widest text-black">
              <span>VIEW LOOKBOOK</span>
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => {
              setCurrentPage('COLLECTIONS');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group relative border border-gray-200 p-6 flex flex-col justify-between hover:border-black transition-colors duration-500 bg-white cursor-pointer"
          >
            <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

            <div>
              <div className="w-full aspect-[4/5] bg-gray-100 border border-gray-200 overflow-hidden mb-6 relative">
                <img
                  src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=85"
                  alt="KINETIC FORM"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-black text-white px-3 py-1 font-orbitron font-bold text-[10px] tracking-widest uppercase">
                  SERIES 02
                </span>
              </div>

              <span className="font-jakarta font-semibold uppercase text-[10px] tracking-[0.2em] text-gray-400 block mb-1">
                MAXIMUM MOBILITY
              </span>
              <h3 className="font-orbitron font-bold text-xl uppercase tracking-wider text-black mb-2">
                KINETIC FORM
              </h3>
              <p className="font-jakarta text-xs text-gray-600 leading-relaxed mb-6">
                Architectural silhouettes designed for high-density movement with integrated micro-ventilation.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between font-jakarta font-semibold text-xs uppercase tracking-widest text-black">
              <span>VIEW LOOKBOOK</span>
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => {
              setCurrentPage('COLLECTIONS');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group relative border border-gray-200 p-6 flex flex-col justify-between hover:border-black transition-colors duration-500 bg-white cursor-pointer"
          >
            <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

            <div>
              <div className="w-full aspect-[4/5] bg-gray-100 border border-gray-200 overflow-hidden mb-6 relative">
                <img
                  src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=85"
                  alt="MONOCHROME ZERO"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-black text-white px-3 py-1 font-orbitron font-bold text-[10px] tracking-widest uppercase">
                  SERIES 03
                </span>
              </div>

              <span className="font-jakarta font-semibold uppercase text-[10px] tracking-[0.2em] text-gray-400 block mb-1">
                STRUCTURAL TAILORING
              </span>
              <h3 className="font-orbitron font-bold text-xl uppercase tracking-wider text-black mb-2">
                MONOCHROME ZERO
              </h3>
              <p className="font-jakarta text-xs text-gray-600 leading-relaxed mb-6">
                Pure black and white forms stripped back to structural essence without decorative noise.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between font-jakarta font-semibold text-xs uppercase tracking-widest text-black">
              <span>VIEW LOOKBOOK</span>
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* HOME SECTION 3: EDITORIAL JOURNAL (High-Level Magazine Editorial Banner) */}
      {/* ========================================================================= */}
      <section
        className="relative z-10 py-20 border-t border-gray-200 bg-white text-black"
        style={{ paddingInline: 'var(--pad-x)' }}
      >
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="mb-2 text-black">
            <CornerTL style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
          </div>
          <div className="flex items-baseline justify-between w-full flex-wrap gap-4">
            <h2
              className="font-orbitron font-extrabold uppercase tracking-[0.08em] text-black"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3.25rem)' }}
            >
              EDITORIAL JOURNAL
            </h2>
            <button
              onClick={() => {
                setCurrentPage('JOURNAL');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group font-jakarta font-semibold uppercase tracking-[0.2em] text-black text-xs flex items-center gap-2 hover:opacity-60 transition-opacity cursor-pointer"
            >
              <span>READ ALL DISPATCHES</span>
              <ArrowUpRight strokeWidth={2} className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Magazine-Style Horizontal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Editorial Feature (Left - 7 cols) */}
          <div
            onClick={() => {
              setCurrentPage('JOURNAL');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="lg:col-span-7 group relative border border-gray-200 p-6 md:p-8 flex flex-col justify-between hover:border-black transition-colors duration-500 bg-white cursor-pointer"
          >
            <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

            <div className="w-full aspect-[16/9] bg-gray-100 border border-gray-200 overflow-hidden mb-6 relative">
              <img
                src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=85"
                alt="THE ARCHITECTURE OF NEXT-GEN TEXTILES"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 font-jakarta font-semibold uppercase text-xs tracking-widest">
                AUG 2026 // 4 MIN READ
              </span>
            </div>

            <div>
              <span className="font-jakarta font-semibold uppercase text-xs tracking-[0.2em] text-gray-400 block mb-1">
                TECHNICAL TEXTILES DISPATCH
              </span>
              <h3 className="font-orbitron font-bold text-2xl uppercase tracking-wider text-black mb-2">
                THE ARCHITECTURE OF NEXT-GEN TEXTILES
              </h3>
              <p className="font-jakarta text-xs text-gray-600 leading-relaxed mb-6">
                An investigation into hydrophobic poly-weaves and how structural minimalism is transforming high-end technical outerwear for extreme urban climates.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between font-jakarta font-semibold text-xs uppercase tracking-widest text-black">
              <span>READ ESSAY</span>
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          {/* Secondary Journal Cards (Right - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Journal 2 */}
            <div
              onClick={() => {
                setCurrentPage('JOURNAL');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative border border-gray-200 p-6 flex flex-col justify-between hover:border-black transition-colors duration-500 bg-white cursor-pointer flex-1"
            >
              <CornerTL className="absolute top-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerTR className="absolute top-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBL className="absolute bottom-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBR className="absolute bottom-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

              <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center mb-4">
                <div className="w-full sm:w-36 aspect-[4/3] bg-gray-100 border border-gray-200 overflow-hidden shrink-0 relative">
                  <img
                    src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=85"
                    alt="CIRCULAR DESIGN IN HIGH-END APPAREL"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between text-xs font-jakarta font-semibold uppercase tracking-widest text-gray-400">
                    <span>JUL 2026</span>
                    <span>6 MIN READ</span>
                  </div>
                  <h4 className="font-orbitron font-bold text-base uppercase tracking-wide text-black group-hover:text-gray-700 transition-colors leading-snug">
                    CIRCULAR DESIGN IN HIGH-END APPAREL
                  </h4>
                  <p className="font-jakarta text-xs text-gray-500 leading-relaxed">
                    How zero-waste pattern drafting and closed-loop synthetic polymers redefine sustainable luxury.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between font-jakarta font-semibold text-xs uppercase tracking-widest text-black pt-3 border-t border-gray-100">
                <span>READ DISPATCH</span>
                <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>

            {/* Journal 3 */}
            <div
              onClick={() => {
                setCurrentPage('JOURNAL');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative border border-gray-200 p-6 flex flex-col justify-between hover:border-black transition-colors duration-500 bg-white cursor-pointer flex-1"
            >
              <CornerTL className="absolute top-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerTR className="absolute top-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBL className="absolute bottom-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBR className="absolute bottom-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

              <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center mb-4">
                <div className="w-full sm:w-36 aspect-[4/3] bg-gray-100 border border-gray-200 overflow-hidden shrink-0 relative">
                  <img
                    src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=85"
                    alt="MINIMALISM AS A FUNCTIONAL STATEMENT"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between text-xs font-jakarta font-semibold uppercase tracking-widest text-gray-400">
                    <span>JUN 2026</span>
                    <span>3 MIN READ</span>
                  </div>
                  <h4 className="font-orbitron font-bold text-base uppercase tracking-wide text-black group-hover:text-gray-700 transition-colors leading-snug">
                    MINIMALISM AS A FUNCTIONAL STATEMENT
                  </h4>
                  <p className="font-jakarta text-xs text-gray-500 leading-relaxed">
                    Stripping away unnecessary decoration to prioritize silhouette, utility, and human movement.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between font-jakarta font-semibold text-xs uppercase tracking-widest text-black pt-3 border-t border-gray-100">
                <span>READ DISPATCH</span>
                <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* HOME SECTION 4: MATERIAL INNOVATION & TECHNICAL SPECS (Futuristic Grid) */}
      {/* ========================================================================= */}
      <section
        className="relative z-10 py-20 border-t border-gray-200 bg-white text-black"
        style={{ paddingInline: 'var(--pad-x)' }}
      >
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="mb-2 text-black">
            <CornerTL style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
          </div>
          <div className="flex items-baseline justify-between w-full flex-wrap gap-4">
            <div>
              <span className="font-jakarta font-semibold uppercase text-xs tracking-[0.25em] text-gray-400 block mb-1">
                ENGINEERED TEXTILE MATRIX
              </span>
              <h2
                className="font-orbitron font-extrabold uppercase tracking-[0.08em] text-black"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3.25rem)' }}
              >
                MATERIAL INNOVATIONS
              </h2>
            </div>
            <button
              onClick={() => {
                setCurrentPage('COLLECTIONS');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group font-jakarta font-semibold uppercase tracking-[0.2em] text-black text-xs flex items-center gap-2 hover:opacity-60 transition-opacity cursor-pointer"
            >
              <span>DISCOVER TEXTILE ARCHIVE</span>
              <ArrowUpRight strokeWidth={2} className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4-Card Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Innovation Card 1 */}
          <div
            onClick={() => {
              setCurrentPage('COLLECTIONS');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group relative border border-gray-200 p-6 flex flex-col justify-between hover:border-black transition-colors duration-500 bg-white cursor-pointer"
          >
            <CornerTL className="absolute top-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerTR className="absolute top-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBL className="absolute bottom-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBR className="absolute bottom-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-orbitron font-bold text-xs uppercase tracking-widest text-gray-400">
                  SPEC // 01
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <h3 className="font-orbitron font-extrabold text-lg uppercase tracking-wide text-black mb-2">
                VÉLO-MEMBRANE™
              </h3>
              <p className="font-jakarta text-xs text-gray-600 leading-relaxed mb-6">
                3-Layer hydrophobic nano-shield with microscopic breathable pores for complete weather sealing under extreme pressure.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100 font-jakarta text-[11px]">
              <div className="flex justify-between text-gray-500">
                <span>WATER RESISTANCE</span>
                <span className="font-bold text-black">28,000 MM</span>
              </div>
              <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                <div className="bg-black h-full w-[95%]" />
              </div>
              <div className="flex justify-between text-gray-500">
                <span>BREATHABILITY</span>
                <span className="font-bold text-black">25,000 G/M²</span>
              </div>
            </div>
          </div>

          {/* Innovation Card 2 */}
          <div
            onClick={() => {
              setCurrentPage('COLLECTIONS');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group relative border border-gray-200 p-6 flex flex-col justify-between hover:border-black transition-colors duration-500 bg-white cursor-pointer"
          >
            <CornerTL className="absolute top-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerTR className="absolute top-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBL className="absolute bottom-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBR className="absolute bottom-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-orbitron font-bold text-xs uppercase tracking-widest text-gray-400">
                  SPEC // 02
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <h3 className="font-orbitron font-extrabold text-lg uppercase tracking-wide text-black mb-2">
                KINETIC SYNTH-POLYMER
              </h3>
              <p className="font-jakarta text-xs text-gray-600 leading-relaxed mb-6">
                Multi-axial elastic weave with molecular shape recovery that adapts to high-impact ergonomic movements.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100 font-jakarta text-[11px]">
              <div className="flex justify-between text-gray-500">
                <span>ELASTIC RECOVERY</span>
                <span className="font-bold text-black">340% YIELD</span>
              </div>
              <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                <div className="bg-black h-full w-[90%]" />
              </div>
              <div className="flex justify-between text-gray-500">
                <span>TENSILE RATING</span>
                <span className="font-bold text-black">GRADE 8 INDUSTRIAL</span>
              </div>
            </div>
          </div>

          {/* Innovation Card 3 */}
          <div
            onClick={() => {
              setCurrentPage('COLLECTIONS');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group relative border border-gray-200 p-6 flex flex-col justify-between hover:border-black transition-colors duration-500 bg-white cursor-pointer"
          >
            <CornerTL className="absolute top-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerTR className="absolute top-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBL className="absolute bottom-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBR className="absolute bottom-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-orbitron font-bold text-xs uppercase tracking-widest text-gray-400">
                  SPEC // 03
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <h3 className="font-orbitron font-extrabold text-lg uppercase tracking-wide text-black mb-2">
                THERMO-MATRIX
              </h3>
              <p className="font-jakarta text-xs text-gray-600 leading-relaxed mb-6">
                Dynamic phase-change micro-fibers capable of storing and releasing thermal energy in variable environmental temperatures.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100 font-jakarta text-[11px]">
              <div className="flex justify-between text-gray-500">
                <span>THERMAL REGULATION</span>
                <span className="font-bold text-black">-10°C TO +35°C</span>
              </div>
              <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                <div className="bg-black h-full w-[88%]" />
              </div>
              <div className="flex justify-between text-gray-500">
                <span>DENSITY WEIGHT</span>
                <span className="font-bold text-black">120 GSM</span>
              </div>
            </div>
          </div>

          {/* Innovation Card 4 */}
          <div
            onClick={() => {
              setCurrentPage('COLLECTIONS');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group relative border border-gray-200 p-6 flex flex-col justify-between hover:border-black transition-colors duration-500 bg-white cursor-pointer"
          >
            <CornerTL className="absolute top-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerTR className="absolute top-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBL className="absolute bottom-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBR className="absolute bottom-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-orbitron font-bold text-xs uppercase tracking-widest text-gray-400">
                  SPEC // 04
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <h3 className="font-orbitron font-extrabold text-lg uppercase tracking-wide text-black mb-2">
                CIRCULAR ZERO-WASTE
              </h3>
              <p className="font-jakarta text-xs text-gray-600 leading-relaxed mb-6">
                100% closed-loop circular polymer system designed for total molecular disassociation and infinite re-extrusion.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100 font-jakarta text-[11px]">
              <div className="flex justify-between text-gray-500">
                <span>RECYCLED PURITY</span>
                <span className="font-bold text-black">100% POST-CONSUMER</span>
              </div>
              <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                <div className="bg-black h-full w-[100%]" />
              </div>
              <div className="flex justify-between text-gray-500">
                <span>CARBON IMPACT</span>
                <span className="font-bold text-emerald-600">-42% NET ZERO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* HOME SECTION 5: VIP ATELIER ACCESS & PRIVATE CONCIERGE */}
      {/* ========================================================================= */}
      <section
        className="relative z-10 py-20 border-t border-gray-200 bg-white text-black"
        style={{ paddingInline: 'var(--pad-x)' }}
      >
        <div className="relative border-2 border-black p-8 md:p-14 bg-white">
          <CornerTL className="absolute -top-3 -left-3 text-black" style={{ width: '20px', height: '20px' }} />
          <CornerTR className="absolute -top-3 -right-3 text-black" style={{ width: '20px', height: '20px' }} />
          <CornerBL className="absolute -bottom-3 -left-3 text-black" style={{ width: '20px', height: '20px' }} />
          <CornerBR className="absolute -bottom-3 -right-3 text-black" style={{ width: '20px', height: '20px' }} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Headline and Atelier Manifesto */}
            <div className="lg:col-span-7 space-y-4">
              <span className="font-jakarta font-bold text-xs uppercase tracking-[0.25em] text-gray-400 block">
                PRIORITY ACCESS PROTOCOL // 2026
              </span>
              <h2
                className="font-orbitron font-extrabold uppercase tracking-[0.06em] text-black leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                JOIN THE DIGITAL ATELIER
              </h2>
              <p className="font-jakarta text-sm text-gray-600 max-w-xl leading-relaxed">
                Receive confidential drop dispatches, private showroom invitations, and guaranteed allocation for limited seasonal editions before public global release.
              </p>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="space-y-1">
                  <span className="font-orbitron font-bold text-xs text-black block">01 // VERIFIED</span>
                  <span className="font-jakarta text-[11px] text-gray-500">NFC Authenticated Garments</span>
                </div>
                <div className="space-y-1">
                  <span className="font-orbitron font-bold text-xs text-black block">02 // PRIORITY</span>
                  <span className="font-jakarta text-[11px] text-gray-500">48-Hour Global Express</span>
                </div>
                <div className="space-y-1">
                  <span className="font-orbitron font-bold text-xs text-black block">03 // BESPOKE</span>
                  <span className="font-jakarta text-[11px] text-gray-500">Complimentary Alterations</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Subscription / Concierge Action */}
            <div className="lg:col-span-5 bg-gray-50 border border-gray-200 p-6 md:p-8 space-y-6">
              <div>
                <span className="font-orbitron font-bold text-sm uppercase tracking-wider text-black block mb-1">
                  COMMUNICATION DIRECTORY
                </span>
                <p className="font-jakarta text-xs text-gray-500">
                  Transmit your contact credentials for immediate digital authentication.
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you. Your atelier credentials have been registered in the VÉLORA directory.');
                }}
                className="space-y-3"
              >
                <input
                  type="email"
                  required
                  placeholder="ENTER SECURE EMAIL ADDRESS"
                  className="w-full bg-white border border-gray-300 px-4 py-3 font-jakarta text-xs tracking-wider uppercase text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors rounded-none"
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white font-orbitron font-bold text-xs uppercase tracking-[0.2em] py-3.5 px-6 hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>TRANSMIT ACCESS REQUEST</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>

              <div className="pt-2 flex items-center justify-between font-jakarta text-[10px] text-gray-400 uppercase tracking-widest">
                <span>ENCRYPTED PROTOCOL</span>
                <button
                  type="button"
                  onClick={() => {
                    setCurrentPage('CONTACT');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-black font-bold hover:underline cursor-pointer"
                >
                  TALK TO CONCIERGE →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
