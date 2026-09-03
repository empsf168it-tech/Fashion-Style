import React, { useState } from 'react';
import { CornerTL, CornerTR, CornerBL, CornerBR } from '../components/SVGs';
import { JournalHero } from '../components/JournalHero';
import { ArrowUpRight, X, BookOpen, Volume2, Sparkles } from 'lucide-react';

const JOURNAL_ARTICLES_FULL = [
  {
    id: 'j1',
    date: 'AUG 2026',
    readTime: '4 MIN READ',
    author: 'EDITORIAL TEAM',
    category: 'TECHNICAL TEXTILES',
    title: 'THE ARCHITECTURE OF NEXT-GEN TEXTILES',
    excerpt: 'An investigation into hydrophobic poly-weaves and how structural minimalism is transforming high-end technical outerwear for extreme urban climates.',
    content: `Modern outerwear design has reached a critical juncture where aesthetic expression and functional performance are no longer distinct disciplines. Hydrophobic poly-weave developments over the past decade allow for complete weather protection without the stiffness or weight associated with traditional technical garments.

By utilizing laser-cut seam bonding and zero-waste pattern drafting, VÉLORA creates outerwear that maintains a razor-sharp structural silhouette while providing uninhibited freedom of movement. Micro-porous synthetic membranes allow moisture vapor to escape while completely repelling exterior water droplets.

The result is a new architectural language in apparel—one that commands presence through pure form and zero compromise.`,
  },
  {
    id: 'j2',
    date: 'JUL 2026',
    readTime: '6 MIN READ',
    author: 'LAB RESEARCH',
    category: 'CIRCULAR DESIGN',
    title: 'CIRCULAR DESIGN IN HIGH-END APPAREL',
    excerpt: 'How zero-waste pattern drafting and closed-loop synthetic polymers are redefining sustainable luxury without compromising structural aesthetic integrity.',
    content: `Sustainable apparel design often suffers from a compromise in structural durability or aesthetic precision. VÉLORA approaches circularity from an engineering perspective: every synthetic garment must be 100% recyclable back into base polymer chains at the end of its lifecycle.

Through mono-material construction—using matching polymer threads, magnetic hardware, and mono-blend fabrics—entire garments can be shredded and re-extruded into raw high-density yarn without requiring labor-intensive material separation.

Zero-waste pattern engineering further minimizes material loss during cutting, utilizing mathematical tessellation to fit garment pieces together like a seamless geometric puzzle.`,
  },
  {
    id: 'j3',
    date: 'JUN 2026',
    readTime: '3 MIN READ',
    author: 'DISPATCH',
    category: 'DESIGN PHILOSOPHY',
    title: 'MINIMALISM AS A FUNCTIONAL STATEMENT',
    excerpt: 'Stripping away unnecessary decoration to prioritize pure silhouette, utility, and uninhibited human movement in dense metropolitan environments.',
    content: `True minimalism is not merely the removal of color or ornamentation—it is the deliberate focus on functional essence. When decorative noise is eliminated, every stitch, pocket placement, and seam line carries structural purpose.

In dense urban environments, garments function as personal architecture. They protect the body, provide ergonomic utility through concealed storage pods, and establish visual identity through precise silhouette proportions.

VÉLORA’s Monochrome Zero series embodies this ethos: pure black and white forms that require no logos or branding to command immediate recognition.`,
  },
];

export const JournalPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<typeof JOURNAL_ARTICLES_FULL[0] | null>(null);

  return (
    <div className="min-h-screen bg-white text-black pb-16 relative z-10">
      {/* Hero Section */}
      <JournalHero />

      <div style={{ paddingInline: 'var(--pad-x)' }}>
        {/* SECTION 1: FEATURED EDITORIAL DISPATCHES */}
        <section className="mb-20">
          <div className="flex flex-col items-start mb-12">
            <div className="mb-2 text-black">
              <CornerTL style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            </div>
            <h2 className="font-orbitron font-extrabold uppercase tracking-[0.08em] text-black text-2xl md:text-4xl">
              FEATURED ESSAYS
            </h2>
            <span className="font-jakarta font-semibold uppercase tracking-[0.2em] text-gray-400 text-xs mt-1">
              CURRENT DISPATCHES // RESEARCH LAB PAPERS
            </span>
          </div>

          {/* Featured Main Article */}
          <div
            onClick={() => setSelectedArticle(JOURNAL_ARTICLES_FULL[0])}
            className="group relative border border-gray-200 p-8 md:p-12 mb-12 bg-white hover:border-black transition-colors duration-300 cursor-pointer"
          >
            <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-4 text-xs font-jakarta font-semibold uppercase tracking-widest text-gray-400">
                <span>{JOURNAL_ARTICLES_FULL[0].date}</span>
                <span>•</span>
                <span>{JOURNAL_ARTICLES_FULL[0].category}</span>
                <span>•</span>
                <span>{JOURNAL_ARTICLES_FULL[0].readTime}</span>
              </div>

              <h2 className="font-orbitron font-bold text-2xl md:text-4xl uppercase tracking-wider text-black group-hover:text-gray-700 transition-colors">
                {JOURNAL_ARTICLES_FULL[0].title}
              </h2>

              <p className="font-jakarta text-sm text-gray-600 leading-relaxed max-w-3xl">
                {JOURNAL_ARTICLES_FULL[0].excerpt}
              </p>

              <div className="pt-4 flex items-center gap-2 font-jakarta font-semibold text-xs uppercase tracking-widest text-black">
                <span>READ FULL DISPATCH</span>
                <ArrowUpRight strokeWidth={1.8} className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>

          {/* Grid of Remaining Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {JOURNAL_ARTICLES_FULL.slice(1).map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="group relative border border-gray-200 p-8 flex flex-col justify-between hover:border-black transition-colors duration-300 bg-white cursor-pointer"
              >
                <CornerTL className="absolute top-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                <CornerTR className="absolute top-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                <CornerBL className="absolute bottom-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                <CornerBR className="absolute bottom-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

                <div>
                  <div className="flex items-center justify-between text-xs font-jakarta font-semibold uppercase tracking-widest text-gray-400 mb-4 pb-3 border-b border-gray-100">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-orbitron font-bold text-xl uppercase tracking-wide text-black mb-3 group-hover:text-gray-600 transition-colors leading-snug">
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

        {/* SECTION 2: RESEARCH LAB NOTEBOOKS */}
        <section className="mb-20 pt-16 border-t border-gray-200">
          <div className="flex flex-col items-start mb-12">
            <div className="mb-2 text-black">
              <CornerTL style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            </div>
            <h2 className="font-orbitron font-extrabold uppercase tracking-[0.08em] text-black text-2xl md:text-4xl">
              RESEARCH LAB NOTEBOOKS
            </h2>
            <span className="font-jakarta font-semibold uppercase tracking-[0.2em] text-gray-400 text-xs mt-1">
              MATERIAL EXPERIMENTAL LOGS // LABORATORY DATA
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Lab Card 1 */}
            <div className="relative border border-gray-200 p-6 bg-white hover:border-black transition-colors duration-300">
              <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

              <div className="aspect-video bg-gray-100 border border-gray-200 overflow-hidden mb-5">
                <img
                  src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=85"
                  alt="HYDROPHOBIC MEMBRANE TEST"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="flex items-center gap-2 text-[10px] font-jakarta font-bold uppercase tracking-widest text-gray-400 mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>LAB LOG #048</span>
              </div>
              <h3 className="font-orbitron font-bold text-base uppercase tracking-wide text-black mb-2">
                HYDROPHOBIC WATER COLUMN TEST
              </h3>
              <p className="font-jakarta text-xs text-gray-600 leading-relaxed">
                Subjecting Cyber-Tex polymer shell to 20,000mm hydrostatic water column pressure without surface saturation.
              </p>
            </div>

            {/* Lab Card 2 */}
            <div className="relative border border-gray-200 p-6 bg-white hover:border-black transition-colors duration-300">
              <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

              <div className="aspect-video bg-gray-100 border border-gray-200 overflow-hidden mb-5">
                <img
                  src="https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=800&q=85"
                  alt="CARBON THREAD WEAVING"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="flex items-center gap-2 text-[10px] font-jakarta font-bold uppercase tracking-widest text-gray-400 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LAB LOG #049</span>
              </div>
              <h3 className="font-orbitron font-bold text-base uppercase tracking-wide text-black mb-2">
                ANTI-STATIC CARBON THREAD WEAVING
              </h3>
              <p className="font-jakarta text-xs text-gray-600 leading-relaxed">
                Integrating microscopic conductive carbon filaments into poly-mesh matrices to dissipate static charges.
              </p>
            </div>

            {/* Lab Card 3 */}
            <div className="relative border border-gray-200 p-6 bg-white hover:border-black transition-colors duration-300">
              <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

              <div className="aspect-video bg-gray-100 border border-gray-200 overflow-hidden mb-5">
                <img
                  src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=800&q=85"
                  alt="KINETIC HEAT MAPPING"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="flex items-center gap-2 text-[10px] font-jakarta font-bold uppercase tracking-widest text-gray-400 mb-2">
                <Volume2 className="w-3.5 h-3.5" />
                <span>LAB LOG #050</span>
              </div>
              <h3 className="font-orbitron font-bold text-base uppercase tracking-wide text-black mb-2">
                KINETIC HEAT MAPPING & VENTILATION
              </h3>
              <p className="font-jakarta text-xs text-gray-600 leading-relaxed">
                Infrared thermal imaging maps body heat concentration zones to position micro-perforation vents.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: DESIGN MANIFESTO & INTERVIEWS */}
        <section className="pt-16 border-t border-gray-200 mb-12">
          <div className="flex flex-col items-start mb-12">
            <div className="mb-2 text-black">
              <CornerTL style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            </div>
            <h2 className="font-orbitron font-extrabold uppercase tracking-[0.08em] text-black text-2xl md:text-4xl">
              DESIGN MANIFESTO & INTERVIEWS
            </h2>
            <span className="font-jakarta font-semibold uppercase tracking-[0.2em] text-gray-400 text-xs mt-1">
              CONVERSATIONS WITH CHIEF MATERIALS ENGINEERS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative border border-gray-200 p-8 bg-white hover:border-black transition-colors duration-300">
              <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

              <div className="aspect-[16/9] bg-gray-100 border border-gray-200 overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=85"
                  alt="MANIFESTO INTERVIEW"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <span className="font-jakarta font-semibold uppercase text-xs tracking-widest text-gray-400 block mb-2">
                INTERVIEW DISPATCH // ISSUE 04
              </span>
              <h3 className="font-orbitron font-bold text-2xl uppercase tracking-wider text-black mb-3">
                "FORM IS NOT AN AFTERTHOUGHT—IT IS THE FUNCTION."
              </h3>
              <p className="font-jakarta text-xs text-gray-600 leading-relaxed mb-6">
                An in-depth conversation with Lead Textile Designer Elena Vance on why future garments must synthesize raw environmental protection with absolute aesthetic purity.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="relative border border-gray-200 p-6 bg-white hover:border-black transition-colors duration-300">
                <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

                <h4 className="font-orbitron font-bold text-lg uppercase tracking-wide text-black mb-2">
                  AUDIO DISPATCH #012
                </h4>
                <p className="font-jakarta text-xs text-gray-500 mb-4">
                  Listen to the 15-minute podcast discussion on zero-waste mono-material poly recycling.
                </p>
                <div className="flex items-center gap-3 font-jakarta font-bold text-xs uppercase tracking-widest text-black border-t border-gray-100 pt-3">
                  <Volume2 className="w-4 h-4 text-black" />
                  <span>PLAY AUDIO DISPATCH (15:42)</span>
                </div>
              </div>

              <div className="relative border border-gray-200 p-6 bg-white hover:border-black transition-colors duration-300">
                <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

                <h4 className="font-orbitron font-bold text-lg uppercase tracking-wide text-black mb-2">
                  DOWNLOAD DESIGN MANIFESTO
                </h4>
                <p className="font-jakarta text-xs text-gray-500 mb-4">
                  Access the full technical specification whitepaper for VÉLORA Series 2026.
                </p>
                <div className="flex items-center justify-between font-jakarta font-bold text-xs uppercase tracking-widest text-black border-t border-gray-100 pt-3">
                  <span>DOWNLOAD PDF (4.2 MB)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Article Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/40 backdrop-blur-xs" onClick={() => setSelectedArticle(null)} />
            <div className="relative z-10 bg-white border border-black max-w-2xl w-full p-8 md:p-10 shadow-2xl max-h-[85vh] overflow-y-auto">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 text-black hover:opacity-60 transition-opacity cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-3 text-xs font-jakarta font-semibold uppercase tracking-widest text-gray-400 mb-4">
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.category}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <h2 className="font-orbitron font-extrabold text-2xl md:text-3xl uppercase tracking-wider text-black mb-6 border-b border-gray-200 pb-4">
                {selectedArticle.title}
              </h2>

              <div className="font-jakarta text-sm text-gray-700 leading-relaxed whitespace-pre-line space-y-4">
                {selectedArticle.content}
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="bg-black text-white font-jakarta text-xs uppercase font-semibold tracking-widest px-6 py-2.5 hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  CLOSE DISPATCH
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
