import React from 'react';
import { CornerTL, CornerTR, CornerBL, CornerBR } from '../components/SVGs';
import { CollectionsHero } from '../components/CollectionsHero';

const COLLECTIONS_FULL = [
  {
    id: 's01',
    series: 'SERIES 01',
    title: 'SYNTHETIC HORIZONS',
    tagline: 'WEATHERPROOF MEMBRANES & SILHOUETTE ARCHITECTURE',
    desc: 'Ultra-durable weather-sealed fabrics engineered from 100% recycled polymers. Designed with laser-cut sealed seams and hydrophobic finishes for high-performance protection against hostile urban elements.',
    specs: [
      '100% Recycled Poly-Membrane',
      'Laser-Cut Sealed Seams',
      'Hydrophobic 20,000mm Rating',
      'Concealed Magnetic Closures',
    ],
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 's02',
    series: 'SERIES 02',
    title: 'KINETIC FORM',
    tagline: 'ERGONOMIC MOBILITY & TEMPERATURE EQUILIBRIUM',
    desc: 'Ergonomic streetwear crafted with 4-way stretch micro-mesh matrices. Features integrated temperature regulating pods and zero-friction articulation points.',
    specs: [
      '4-Way Stretch Poly Matrix',
      'Micro-Venting Perforations',
      'Thermal Regulation Cells',
      'Anti-Static Carbon Weave',
    ],
    img: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 's03',
    series: 'SERIES 03',
    title: 'MONOCHROME ZERO',
    tagline: 'PURE BLACK & WHITE TAILORING ARCHITECTURE',
    desc: 'Pure structural tailoring. Stripped back to absolute silhouette purity with zero decorative branding or color distraction. Engineered for timeless structural presence.',
    specs: [
      '100% Recycled Polymer Tailoring',
      'Structured Ergonomic Shoulders',
      'Anti-Crease Form Memory',
      'Monochrome Zero Tint',
    ],
    img: 'https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=1200&q=85',
  },
];

const LOOKBOOK_STILLS = [
  {
    id: 'l1',
    title: 'STILL 01 — RUNWAY FRAME',
    series: 'SERIES 01',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'l2',
    title: 'STILL 02 — URBAN MOVEMENT',
    series: 'SERIES 02',
    img: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'l3',
    title: 'STILL 03 — STRUCTURAL FORM',
    series: 'SERIES 03',
    img: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'l4',
    title: 'STILL 04 — MONOCHROME SILHOUETTE',
    series: 'SERIES 01',
    img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=85',
  },
];

export const CollectionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black pb-16 relative z-10">
      {/* Hero Section */}
      <CollectionsHero />

      <div style={{ paddingInline: 'var(--pad-x)' }}>
        {/* SECTION 1: SERIES ARCHIVE SHOWCASE */}
        <section className="space-y-16 mb-20">
          {COLLECTIONS_FULL.map((item, idx) => (
            <div
              key={item.id}
              className="relative border border-gray-200 p-8 flex flex-col lg:flex-row gap-10 items-stretch bg-white hover:border-black transition-colors duration-300"
            >
              <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

              {/* Campaign Visual Frame */}
              <div className={`w-full lg:w-1/2 min-h-[380px] bg-gray-100 border border-gray-200 overflow-hidden relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-black text-white font-orbitron font-bold text-xs px-3 py-1.5 tracking-widest uppercase">
                  {item.series}
                </span>
              </div>

              {/* Content Details */}
              <div className={`w-full lg:w-1/2 flex flex-col justify-between items-start space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <span className="font-jakarta font-semibold uppercase text-xs tracking-[0.2em] text-gray-400 block mb-2">
                    {item.tagline}
                  </span>
                  <h2 className="font-orbitron font-bold text-3xl md:text-4xl uppercase tracking-wider text-black mb-4">
                    {item.title}
                  </h2>
                  <p className="font-jakarta text-sm text-gray-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  {/* Specs List */}
                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="font-jakarta text-xs font-bold uppercase tracking-widest text-black mb-3">
                      TECHNICAL SPECIFICATIONS:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs font-jakarta text-gray-700">
                          <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 w-full flex items-center justify-between font-jakarta text-xs font-semibold uppercase tracking-widest text-gray-500">
                  <span>ARCHIVE STATUS: AVAILABLE</span>
                  <span>VÉLORA 2026</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* SECTION 2: RUNWAY BLUEPRINT & PATTERN DRAFTING */}
        <section className="mb-20 pt-16 border-t border-gray-200">
          <div className="flex flex-col items-start mb-12">
            <div className="mb-2 text-black">
              <CornerTL style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            </div>
            <h2 className="font-orbitron font-extrabold uppercase tracking-[0.08em] text-black text-2xl md:text-4xl">
              RUNWAY BLUEPRINTS & PATTERNS
            </h2>
            <span className="font-jakarta font-semibold uppercase tracking-[0.2em] text-gray-400 text-xs mt-1">
              MATHEMATICAL TESSELLATION // ZERO-WASTE DRAFTING
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative border border-gray-200 p-8 bg-white hover:border-black transition-colors duration-300">
              <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

              <div className="aspect-[16/10] bg-gray-100 border border-gray-200 overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85"
                  alt="3D SILHOUETTE SCULPTING"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <span className="font-jakarta font-semibold uppercase text-xs tracking-widest text-gray-400 block mb-1">
                PROCESS 01
              </span>
              <h3 className="font-orbitron font-bold text-2xl uppercase tracking-wide text-black mb-3">
                3D SILHOUETTE SCULPTING
              </h3>
              <p className="font-jakarta text-xs text-gray-600 leading-relaxed mb-4">
                Virtual CAD draping simulates fabric movement under gravity, wind pressure, and rapid human movement prior to physical cutting.
              </p>
            </div>

            <div className="relative border border-gray-200 p-8 bg-white hover:border-black transition-colors duration-300">
              <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

              <div className="aspect-[16/10] bg-gray-100 border border-gray-200 overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=1000&q=85"
                  alt="LASER SEAM BONDING"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <span className="font-jakarta font-semibold uppercase text-xs tracking-widest text-gray-400 block mb-1">
                PROCESS 02
              </span>
              <h3 className="font-orbitron font-bold text-2xl uppercase tracking-wide text-black mb-3">
                LASER SEAM BONDING
              </h3>
              <p className="font-jakarta text-xs text-gray-600 leading-relaxed mb-4">
                Replacing traditional thread stitching with ultrasonic laser welds for 100% waterproof seal integrity and razor-thin profile seams.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: LOOKBOOK GALLERY ARCHIVE */}
        <section className="pt-16 border-t border-gray-200 mb-12">
          <div className="flex flex-col items-start mb-12">
            <div className="mb-2 text-black">
              <CornerTL style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            </div>
            <h2 className="font-orbitron font-extrabold uppercase tracking-[0.08em] text-black text-2xl md:text-4xl">
              LOOKBOOK GALLERY ARCHIVE
            </h2>
            <span className="font-jakarta font-semibold uppercase tracking-[0.2em] text-gray-400 text-xs mt-1">
              CAMPAIGN PHOTOGRAPHY // STILL FRAMES 2026
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LOOKBOOK_STILLS.map((still) => (
              <div
                key={still.id}
                className="group relative border border-gray-200 p-4 bg-white hover:border-black transition-colors duration-300"
              >
                <CornerTL className="absolute top-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                <CornerTR className="absolute top-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                <CornerBL className="absolute bottom-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                <CornerBR className="absolute bottom-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

                <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-3 relative">
                  <img
                    src={still.img}
                    alt={still.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-black text-white text-[9px] font-jakarta font-bold px-2 py-0.5 uppercase tracking-widest">
                    {still.series}
                  </span>
                </div>

                <h4 className="font-jakarta font-bold text-xs uppercase tracking-wide text-black">
                  {still.title}
                </h4>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
