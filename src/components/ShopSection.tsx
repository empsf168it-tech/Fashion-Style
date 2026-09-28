import React from 'react';
import { CornerTL, CornerTR, CornerBL, CornerBR } from './SVGs';
import { Plus } from 'lucide-react';

interface ShopSectionProps {
  onAddToCart: (product: { id: string; title: string; price: number; tag?: string }) => void;
}

const PRODUCTS = [
  {
    id: '1',
    title: 'CYBER-TEX OVERCOAT',
    price: 850,
    tag: 'LIMITED EDITION',
    desc: 'High-density weatherproof membrane with structured shoulder architecture.',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'GEO-MESH TECH HOODIE',
    price: 320,
    tag: 'NEW DROP',
    desc: 'Thermal regulating micro-mesh with articulated thumb loops and high collar.',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    title: 'ORBITAL TAPERED TROUSERS',
    price: 290,
    tag: 'IN STOCK',
    desc: 'Ergonomic 4-way stretch poly-blend with concealed magnetic zip pockets.',
    img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    title: 'MODULAR ALL-WEATHER VEST',
    price: 410,
    tag: 'PRE-ORDER',
    desc: 'Detachable magnetic cargo utility pods with laser-perforated back ventilation.',
    img: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80',
  },
];

export const ShopSection: React.FC<ShopSectionProps> = ({ onAddToCart }) => {
  return (
    <section
      id="shop"
      className="relative z-10 py-20 border-t border-gray-200 bg-white text-black"
      style={{ paddingInline: 'var(--pad-x)' }}
    >
      {/* Section Title */}
      <div className="flex flex-col items-start mb-12">
        <div className="mb-2 text-black">
          <CornerTL style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
        </div>
        <div className="flex items-baseline justify-between w-full flex-wrap gap-4">
          <h2
            className="font-orbitron font-extrabold uppercase tracking-[0.08em] text-black"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 3rem)' }}
          >
            SHOP CATALOG
          </h2>
          <span className="font-jakarta font-semibold uppercase tracking-[0.2em] text-gray-500 text-xs">
            SERIES 2026 // FEATURED GARMENTS
          </span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {PRODUCTS.map((prod) => (
          <div
            key={prod.id}
            className="group relative border border-gray-200 p-5 flex flex-col justify-between hover:border-black transition-all duration-300 bg-white"
          >
            {/* Corner Brackets on Card */}
            <CornerTL
              className="absolute top-0 left-0 text-gray-300 group-hover:text-black transition-colors"
              style={{ width: 'var(--corner)', height: 'var(--corner)' }}
            />
            <CornerTR
              className="absolute top-0 right-0 text-gray-300 group-hover:text-black transition-colors"
              style={{ width: 'var(--corner)', height: 'var(--corner)' }}
            />
            <CornerBL
              className="absolute bottom-0 left-0 text-gray-300 group-hover:text-black transition-colors"
              style={{ width: 'var(--corner)', height: 'var(--corner)' }}
            />
            <CornerBR
              className="absolute bottom-0 right-0 text-gray-300 group-hover:text-black transition-colors"
              style={{ width: 'var(--corner)', height: 'var(--corner)' }}
            />

            <div>
              {/* Product Image Frame */}
              <div className="w-full aspect-[4/5] bg-gray-50 border border-gray-100 overflow-hidden mb-4 relative">
                <img
                  src={prod.img}
                  alt={prod.title}
                  className="w-full h-full object-cover object-center grayscale contrast-110 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-black text-white px-2.5 py-1 font-jakarta font-semibold uppercase text-[10px] tracking-widest">
                  {prod.tag}
                </span>
              </div>

              {/* Title & Price */}
              <h3 className="font-jakarta font-bold text-sm tracking-wide uppercase mb-1 text-black">
                {prod.title}
              </h3>
              <p className="font-jakarta text-xs text-gray-500 mb-3 leading-relaxed">
                {prod.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2 mt-4">
              <span className="font-jakarta font-extrabold text-base text-black shrink-0">
                ${prod.price}
              </span>
              <button
                onClick={() => onAddToCart(prod)}
                className="group/btn border border-black bg-black text-white hover:bg-white hover:text-black transition-colors px-3 py-1.5 font-jakarta font-semibold text-xs uppercase tracking-widest flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <span>ADD TO BAG</span>
                <Plus className="w-3.5 h-3.5 group-hover/btn:rotate-90 transition-transform duration-300" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
