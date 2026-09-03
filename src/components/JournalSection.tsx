import React from 'react';
import { CornerTL, CornerTR, CornerBL, CornerBR } from './SVGs';
import { ArrowUpRight } from 'lucide-react';
import { DrawerType } from '../types';

interface JournalSectionProps {
  setActiveDrawer: (drawer: DrawerType) => void;
}

const ARTICLES = [
  {
    id: 'j1',
    date: 'AUG 2026',
    readTime: '4 MIN READ',
    author: 'EDITORIAL TEAM',
    title: 'THE ARCHITECTURE OF NEXT-GEN TEXTILES',
    excerpt: 'An investigation into hydrophobic poly-weaves and how structural minimalism is transforming high-end technical outerwear for extreme urban climates.',
  },
  {
    id: 'j2',
    date: 'JUL 2026',
    readTime: '6 MIN READ',
    author: 'LAB RESEARCH',
    title: 'CIRCULAR DESIGN IN HIGH-END APPAREL',
    excerpt: 'How zero-waste pattern drafting and closed-loop synthetic polymers are redefining sustainable luxury without compromising structural aesthetic integrity.',
  },
  {
    id: 'j3',
    date: 'JUN 2026',
    readTime: '3 MIN READ',
    author: 'DISPATCH',
    title: 'MINIMALISM AS A FUNCTIONAL STATEMENT',
    excerpt: 'Stripping away unnecessary decoration to prioritize pure silhouette, utility, and uninhibited human movement in dense metropolitan environments.',
  },
];

export const JournalSection: React.FC<JournalSectionProps> = ({ setActiveDrawer }) => {
  return (
    <section
      id="journal"
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
            EDITORIAL JOURNAL
          </h2>
          <span className="font-jakarta font-semibold uppercase tracking-[0.2em] text-gray-500 text-xs">
            RESEARCH & DESIGN PHILOSOPHY // DISPATCHES
          </span>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ARTICLES.map((article) => (
          <div
            key={article.id}
            className="group relative border border-gray-200 p-6 flex flex-col justify-between hover:border-black transition-colors duration-300 bg-white cursor-pointer"
            onClick={() => setActiveDrawer('JOURNAL')}
          >
            {/* Corner Brackets */}
            <CornerTL className="absolute top-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerTR className="absolute top-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBL className="absolute bottom-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBR className="absolute bottom-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

            <div>
              <div className="flex items-center justify-between text-[11px] font-jakarta font-semibold uppercase tracking-widest text-gray-400 mb-4 pb-3 border-b border-gray-100">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>

              <h3 className="font-jakarta font-bold text-base uppercase tracking-wide text-black mb-3 group-hover:text-gray-600 transition-colors leading-snug">
                {article.title}
              </h3>

              <p className="font-jakarta text-xs text-gray-600 leading-relaxed mb-6">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between font-jakarta font-semibold text-xs uppercase tracking-widest text-black">
              <span>READ DISPATCH</span>
              <ArrowUpRight strokeWidth={1.8} className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
