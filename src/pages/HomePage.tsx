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
            <div className="w-full aspect-[16/10] bg-gray-100 border border-gray-200 overflow-hidden mb-6 relative">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=85"
                alt="CYBER-TEX OVERCOAT"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
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
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
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
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
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

              <div>
                <div className="flex items-center justify-between text-xs font-jakarta font-semibold uppercase tracking-widest text-gray-400 mb-2">
                  <span>JUL 2026</span>
                  <span>6 MIN READ</span>
                </div>
                <h4 className="font-orbitron font-bold text-lg uppercase tracking-wide text-black mb-2">
                  CIRCULAR DESIGN IN HIGH-END APPAREL
                </h4>
                <p className="font-jakarta text-xs text-gray-500 leading-relaxed mb-4">
                  How zero-waste pattern drafting and closed-loop synthetic polymers redefine sustainable luxury.
                </p>
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

              <div>
                <div className="flex items-center justify-between text-xs font-jakarta font-semibold uppercase tracking-widest text-gray-400 mb-2">
                  <span>JUN 2026</span>
                  <span>3 MIN READ</span>
                </div>
                <h4 className="font-orbitron font-bold text-lg uppercase tracking-wide text-black mb-2">
                  MINIMALISM AS A FUNCTIONAL STATEMENT
                </h4>
                <p className="font-jakarta text-xs text-gray-500 leading-relaxed mb-4">
                  Stripping away unnecessary decoration to prioritize silhouette, utility, and human movement.
                </p>
              </div>

              <div className="flex items-center justify-between font-jakarta font-semibold text-xs uppercase tracking-widest text-black pt-3 border-t border-gray-100">
                <span>READ DISPATCH</span>
                <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
