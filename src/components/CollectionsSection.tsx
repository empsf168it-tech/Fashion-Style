import React from 'react';
import { CornerTL, CornerTR, CornerBL, CornerBR } from './SVGs';
import { ArrowUpRight } from 'lucide-react';
import { DrawerType } from '../types';

interface CollectionsSectionProps {
  setActiveDrawer: (drawer: DrawerType) => void;
}

const COLLECTIONS = [
  {
    id: '1',
    series: 'SERIES 01',
    title: 'SYNTHETIC HORIZONS',
    tagline: 'ULTRA-DURABLE WEATHER-SEALED FABRICS',
    desc: 'Ergonomic laser-cut outerwear engineered from recycled polymers with zero water absorption and dynamic thermal regulation.',
    specs: ['100% Recycled Poly-Membrane', 'Laser-Cut Sealed Seams', 'Hydrophobic Finish'],
    img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260802_074534_f0d9d476-3f86-4c67-9b12-dfc63d99da41.png&w=1000&q=80',
  },
  {
    id: '2',
    series: 'SERIES 02',
    title: 'KINETIC FORM',
    tagline: 'MAXIMUM MOBILITY STREETWEAR',
    desc: 'Architectural silhouettes designed for high-density urban movement with integrated micro-ventilation and magnetic closures.',
    specs: ['4-Way Stretch Matrix', 'Concealed Pod Storage', 'Anti-Static Weave'],
    img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260802_075145_1b557479-775b-43af-8270-f45d79d97d5a.png&w=1000&q=80',
  },
  {
    id: '3',
    series: 'SERIES 03',
    title: 'MONOCHROME ZERO',
    tagline: 'STRUCTURAL TAILORING ARCHITECTURE',
    desc: 'Stripped back to absolute structural purity. Crisp black and white silhouettes without logos or decorative noise.',
    specs: ['Zero-Waste Patterning', 'Structured Shoulder Pads', 'Monochrome Finish'],
    img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
  },
];

export const CollectionsSection: React.FC<CollectionsSectionProps> = ({ setActiveDrawer }) => {
  return (
    <section
      id="collections"
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
            style={{ fontSize: 'clamp(1.75rem, 3vw, 3rem)' }}
          >
            ARCHIVE 2026
          </h2>
          <span className="font-jakarta font-semibold uppercase tracking-[0.2em] text-gray-500 text-xs">
            SEASON LINEUP // THREE CORE SERIES
          </span>
        </div>
      </div>

      {/* Collections Stack */}
      <div className="space-y-10">
        {COLLECTIONS.map((item, idx) => (
          <div
            key={item.id}
            className={`relative border border-gray-200 p-6 md:p-8 flex flex-col ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
            } gap-8 items-center bg-white hover:border-black transition-colors duration-300`}
          >
            {/* Corner Brackets */}
            <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

            {/* Visual Panel */}
            <div className="w-full lg:w-1/2 aspect-[16/10] bg-gray-100 border border-gray-200 overflow-hidden relative group">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover object-center grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 bg-white text-black border border-black font-orbitron font-bold text-xs px-3 py-1 tracking-widest">
                {item.series}
              </span>
            </div>

            {/* Info Panel */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between items-start space-y-4">
              <div>
                <span className="font-jakarta font-semibold uppercase text-xs tracking-[0.2em] text-gray-400 block mb-2">
                  {item.tagline}
                </span>
                <h3 className="font-orbitron font-bold text-2xl md:text-3xl uppercase tracking-wider text-black mb-3">
                  {item.title}
                </h3>
                <p className="font-jakarta text-sm text-gray-600 leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Specs List */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.specs.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="border border-gray-300 font-jakarta text-[11px] font-semibold uppercase tracking-wider px-3 py-1 text-gray-700 bg-gray-50"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActiveDrawer('COLLECTIONS')}
                className="group border border-gray-400 rounded-md uppercase font-jakarta font-semibold tracking-[0.18em] text-xs text-black bg-transparent px-5 py-2.5 transition-all duration-300 hover:bg-black hover:text-white hover:border-black flex items-center gap-2 cursor-pointer"
              >
                <span>EXPLORE ARCHIVE</span>
                <ArrowUpRight strokeWidth={1.8} className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
