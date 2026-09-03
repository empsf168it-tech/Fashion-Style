import React, { useState } from 'react';
import { CornerTL, CornerTR, CornerBL, CornerBR } from '../components/SVGs';
import { ShopHeroVideo } from '../components/ShopHeroVideo';
import { Plus, Filter, ShieldCheck, RefreshCw, Truck } from 'lucide-react';

interface ShopPageProps {
  onAddToCart: (product: { id: string; title: string; price: number; tag?: string }) => void;
}

const ALL_PRODUCTS = [
  {
    id: '1',
    category: 'OUTERWEAR',
    title: 'CYBER-TEX OVERCOAT',
    price: 850,
    tag: 'LIMITED EDITION',
    desc: 'High-density weatherproof membrane with structured shoulder architecture.',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: '2',
    category: 'HOODIES & TOPS',
    title: 'GEO-MESH TECH HOODIE',
    price: 320,
    tag: 'NEW DROP',
    desc: 'Thermal regulating micro-mesh with articulated thumb loops and high collar.',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: '3',
    category: 'TROUSERS & VESTS',
    title: 'ORBITAL TAPERED TROUSERS',
    price: 290,
    tag: 'IN STOCK',
    desc: 'Ergonomic 4-way stretch poly-blend with concealed magnetic zip pockets.',
    img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: '4',
    category: 'TROUSERS & VESTS',
    title: 'MODULAR ALL-WEATHER VEST',
    price: 410,
    tag: 'PRE-ORDER',
    desc: 'Detachable magnetic cargo utility pods with laser-perforated back ventilation.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: '5',
    category: 'OUTERWEAR',
    title: 'KINETIC MATRIX PARKA',
    price: 920,
    tag: 'SERIES 02',
    desc: 'Dual-layer hydrophobic shell with integrated face shield and ergonomic raglan sleeves.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: '6',
    category: 'HOODIES & TOPS',
    title: 'MONOCHROME COMPRESSION TOP',
    price: 240,
    tag: 'CORE',
    desc: 'Seamless zero-waste knit with moisture-wicking synthetic fiber matrix.',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: '7',
    category: 'TROUSERS & VESTS',
    title: 'SYNTHETIC CARGO JOGGER',
    price: 340,
    tag: 'IN STOCK',
    desc: 'Reinforced ballistic nylon knees with adjustable ankle cinch straps.',
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: '8',
    category: 'OUTERWEAR',
    title: 'ZERO TAILORED BLAZER',
    price: 780,
    tag: 'LIMITED EDITION',
    desc: 'Structured architectural blazer with concealed magnetic lapel closure.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85',
  },
];

export const ShopPage: React.FC<ShopPageProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'OUTERWEAR', 'HOODIES & TOPS', 'TROUSERS & VESTS'];

  const filteredProducts =
    selectedCategory === 'ALL'
      ? ALL_PRODUCTS
      : ALL_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-black pb-16 relative z-10">
      {/* Hero Background Video Section */}
      <ShopHeroVideo />

      <div style={{ paddingInline: 'var(--pad-x)' }}>
        {/* SECTION 1: FEATURED CATALOG GRID */}
        <section className="mb-20">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-2 text-xs font-jakarta uppercase tracking-widest text-black font-semibold">
              <Filter className="w-4 h-4 text-gray-400" />
              <span>FILTER CATEGORY:</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 border text-xs font-jakarta uppercase tracking-widest font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'border-black bg-black text-white'
                      : 'border-gray-200 text-gray-600 hover:border-gray-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="group relative border border-gray-200 p-5 flex flex-col justify-between hover:border-black transition-all duration-300 bg-white"
              >
                <CornerTL className="absolute top-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                <CornerTR className="absolute top-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                <CornerBL className="absolute bottom-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                <CornerBR className="absolute bottom-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

                <div>
                  <div className="w-full aspect-[4/5] bg-gray-50 border border-gray-100 overflow-hidden mb-4 relative">
                    <img
                      src={prod.img}
                      alt={prod.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-black text-white px-2.5 py-1 font-jakarta font-semibold uppercase text-[10px] tracking-widest">
                      {prod.tag}
                    </span>
                  </div>

                  <h3 className="font-jakarta font-bold text-sm tracking-wide uppercase mb-1 text-black">
                    {prod.title}
                  </h3>
                  <p className="font-jakarta text-xs text-gray-500 mb-3 leading-relaxed">
                    {prod.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-4">
                  <span className="font-jakarta font-extrabold text-base text-black">
                    ${prod.price}
                  </span>
                  <button
                    onClick={() => onAddToCart(prod)}
                    className="group/btn border border-black bg-black text-white hover:bg-white hover:text-black transition-colors px-3 py-1.5 font-jakarta font-semibold text-xs uppercase tracking-widest flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>ADD TO BAG</span>
                    <Plus className="w-3.5 h-3.5 group-hover/btn:rotate-90 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: MATERIAL & TEXTILE KINETICS */}
        <section className="mb-20 pt-16 border-t border-gray-200">
          <div className="flex flex-col items-start mb-12">
            <div className="mb-2 text-black">
              <CornerTL style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            </div>
            <h2 className="font-orbitron font-extrabold uppercase tracking-[0.08em] text-black text-2xl md:text-4xl">
              TEXTILE ARCHITECTURE & KINETICS
            </h2>
            <span className="font-jakarta font-semibold uppercase tracking-[0.2em] text-gray-400 text-xs mt-1">
              MATERIAL INNOVATION // SYNTHETIC POLYMER MATRIX
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Fabric Showcase */}
            <div className="relative border border-gray-200 p-6 bg-white hover:border-black transition-colors duration-300">
              <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

              <div className="aspect-[16/10] bg-gray-100 border border-gray-200 overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=85"
                  alt="CYBER-TEX HYDROPHOBIC SHELL"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <span className="font-jakarta font-semibold uppercase text-xs tracking-widest text-gray-400 block mb-1">
                MATERIAL TYPE 01
              </span>
              <h3 className="font-orbitron font-bold text-xl uppercase tracking-wide text-black mb-2">
                CYBER-TEX HYDROPHOBIC SHELL
              </h3>
              <p className="font-jakarta text-xs text-gray-600 leading-relaxed mb-4">
                Triple-layer synthetic poly-weave repelling extreme wind and water while allowing internal thermal regulation.
              </p>
              <div className="flex items-center gap-4 text-xs font-jakarta font-bold text-black border-t border-gray-100 pt-3">
                <span>RATING: 20,000mm</span>
                <span>•</span>
                <span>WEIGHT: 180 GSM</span>
              </div>
            </div>

            {/* Right Fabric Showcase */}
            <div className="relative border border-gray-200 p-6 bg-white hover:border-black transition-colors duration-300">
              <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

              <div className="aspect-[16/10] bg-gray-100 border border-gray-200 overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1000&q=85"
                  alt="GEO-MESH THERMAL MATRIX"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <span className="font-jakarta font-semibold uppercase text-xs tracking-widest text-gray-400 block mb-1">
                MATERIAL TYPE 02
              </span>
              <h3 className="font-orbitron font-bold text-xl uppercase tracking-wide text-black mb-2">
                GEO-MESH THERMAL MATRIX
              </h3>
              <p className="font-jakarta text-xs text-gray-600 leading-relaxed mb-4">
                4-way stretch ergonomic mesh with laser-perforated ventilation ports for uninhibited mobility.
              </p>
              <div className="flex items-center gap-4 text-xs font-jakarta font-bold text-black border-t border-gray-100 pt-3">
                <span>ELASTANE: 18%</span>
                <span>•</span>
                <span>BREATHABILITY: HIGH</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: CARE & SUSTAINABILITY GUARANTEE */}
        <section className="pt-16 border-t border-gray-200 mb-12">
          <div className="flex flex-col items-start mb-12">
            <div className="mb-2 text-black">
              <CornerTL style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            </div>
            <h2 className="font-orbitron font-extrabold uppercase tracking-[0.08em] text-black text-2xl md:text-4xl">
              SERVICE & GUARANTEE
            </h2>
            <span className="font-jakarta font-semibold uppercase tracking-[0.2em] text-gray-400 text-xs mt-1">
              VÉLORA COMMITMENT // LIFETIME REPAIR & CIRCULAR RECYCLING
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative border border-gray-200 p-6 bg-white hover:border-black transition-colors duration-300">
              <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

              <RefreshCw className="w-8 h-8 text-black mb-4" />
              <h3 className="font-orbitron font-bold text-lg uppercase tracking-wide text-black mb-2">
                CIRCULAR RECYCLING
              </h3>
              <p className="font-jakarta text-xs text-gray-600 leading-relaxed">
                Return worn garments anytime. We extrude 100% of synthetic fibers back into raw polymer threads for future series.
              </p>
            </div>

            <div className="relative border border-gray-200 p-6 bg-white hover:border-black transition-colors duration-300">
              <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

              <ShieldCheck className="w-8 h-8 text-black mb-4" />
              <h3 className="font-orbitron font-bold text-lg uppercase tracking-wide text-black mb-2">
                FREE LIFETIME REPAIR
              </h3>
              <p className="font-jakarta text-xs text-gray-600 leading-relaxed">
                Every seam, magnetic zip, and laser-bonded joint is covered under our lifetime repair guarantee.
              </p>
            </div>

            <div className="relative border border-gray-200 p-6 bg-white hover:border-black transition-colors duration-300">
              <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

              <Truck className="w-8 h-8 text-black mb-4" />
              <h3 className="font-orbitron font-bold text-lg uppercase tracking-wide text-black mb-2">
                GLOBAL STEALTH EXPRESS
              </h3>
              <p className="font-jakarta text-xs text-gray-600 leading-relaxed">
                Carbon-neutral global express shipping with custom weatherproof packaging and tracking.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
