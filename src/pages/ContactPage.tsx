import React, { useState } from 'react';
import { ContactHero } from '../components/ContactHero';
import { CornerTL, CornerTR, CornerBL, CornerBR } from '../components/SVGs';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Check,
  ChevronDown,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  MessageSquare,
  Globe,
} from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'SHIPPING & LOGISTICS',
    question: 'HOW DOES VÉLORA STEALTH EXPRESS SHIPPING WORK?',
    answer: 'All orders are dispatched from our Tokyo or Paris fulfillment centers via carbon-neutral stealth express couriers. Standard delivery takes 2-4 business days worldwide. Custom weatherproof vacuum packaging protects every garment.',
  },
  {
    id: 'faq-2',
    category: 'TECHNICAL FABRICS',
    question: 'HOW DO I CARE FOR CYBER-TEX & GEO-MESH APPAREL?',
    answer: 'Wash garments inside out in cool water (30°C) with mild detergent. Do not dry clean or use bleach. Tumble dry on low heat for 10 minutes to reactivate the hydrophobic DWR shell coating.',
  },
  {
    id: 'faq-3',
    category: 'LIFETIME REPAIR',
    question: 'WHAT IS COVERED UNDER THE LIFETIME REPAIR GUARANTEE?',
    answer: 'We cover all magnetic zip replacements, laser-bonded seam re-sealing, torn mesh linings, and structural hardware repairs free of charge for the lifetime of your garment.',
  },
  {
    id: 'faq-4',
    category: 'RETURNS & RECYCLING',
    question: 'HOW DOES THE CIRCULAR GARMENT TRADE-IN PROGRAM WORK?',
    answer: 'Return any worn VÉLORA garment anytime. We issue a 20% store credit voucher toward future drops and extrude 100% of the returned poly-fibers back into raw polymer threads.',
  },
  {
    id: 'faq-5',
    category: 'CUSTOM SIZING & APPOINTMENTS',
    question: 'CAN I BOOK A PRIVATE FITTING AT YOUR TOKYO OR PARIS STUDIOS?',
    answer: 'Yes. VIP clients can request private 1-on-1 tailoring appointments at our Tokyo (Shibuya) or Paris (Le Marais) flagship ateliers through our stealth concierge contact form.',
  },
];

const FLAGSHIP_LOCATIONS = [
  {
    city: 'TOKYO FLAGSHIP',
    address: '5-7-22 MINAMIAOYAMA, MINATO-KU, TOKYO 107-0062',
    hours: 'MON - SUN: 11:00 — 20:00 JST',
    coords: '35.6634° N, 139.7153° E',
    phone: '+81 3 5468 9120',
  },
  {
    city: 'PARIS ATELIER',
    address: '14 RUE DE SEVIGNE, 75004 PARIS, FRANCE',
    hours: 'MON - SAT: 10:00 — 19:00 CET',
    coords: '48.8566° N, 2.3522° E',
    phone: '+33 1 42 68 00 11',
  },
  {
    city: 'NEW YORK STUDIO',
    address: '422 BROOME ST, NEW YORK, NY 10013',
    hours: 'MON - SUN: 11:00 — 19:00 EST',
    coords: '40.7209° N, 74.0007° W',
    phone: '+1 212 966 4300',
  },
];

const SOCIAL_LINKS = [
  { name: 'INSTAGRAM', handle: '@VELORA_FUTURE', icon: Instagram, url: 'https://instagram.com' },
  { name: 'X / TWITTER', handle: '@VELORA_OFFICIAL', icon: Twitter, url: 'https://twitter.com' },
  { name: 'YOUTUBE', handle: 'VÉLORA ARCHIVE', icon: Youtube, url: 'https://youtube.com' },
  { name: 'LINKEDIN', handle: 'VÉLORA LABS', icon: Linkedin, url: 'https://linkedin.com' },
  { name: 'DISCORD', handle: 'STEALTH COMMUNITY', icon: MessageSquare, url: 'https://discord.com' },
];

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'GENERAL INQUIRY', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'GENERAL INQUIRY', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white text-black pb-16 relative z-10">
      {/* Hero Section */}
      <ContactHero />

      <div style={{ paddingInline: 'var(--pad-x)' }}>
        {/* SECTION 1: DIRECT CONTACT FORM & FLAGSHIP DETAILS */}
        <section className="mb-20">
          <div className="flex flex-col items-start mb-12">
            <div className="mb-2 text-black">
              <CornerTL style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            </div>
            <h2 className="font-orbitron font-extrabold uppercase tracking-[0.08em] text-black text-2xl md:text-4xl">
              ENCRYPTED DISPATCH FORM
            </h2>
            <span className="font-jakarta font-semibold uppercase tracking-[0.2em] text-gray-400 text-xs mt-1">
              DIRECT INQUIRIES // CLIENT CONCIERGE & VIP APPOINTMENTS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Contact Form (7 cols) */}
            <div className="lg:col-span-7 relative border border-gray-200 p-8 md:p-10 bg-white hover:border-black transition-colors duration-300">
              <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
              <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-jakarta font-bold text-xs uppercase tracking-widest text-black mb-2">
                      YOUR FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="E.G. ALEXANDER VANCE"
                      className="w-full border border-gray-300 p-3 text-xs font-jakarta uppercase focus:outline-hidden focus:border-black transition-colors bg-gray-50/50"
                    />
                  </div>

                  <div>
                    <label className="block font-jakarta font-bold text-xs uppercase tracking-widest text-black mb-2">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="NAME@DOMAIN.COM"
                      className="w-full border border-gray-300 p-3 text-xs font-jakarta uppercase focus:outline-hidden focus:border-black transition-colors bg-gray-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-jakarta font-bold text-xs uppercase tracking-widest text-black mb-2">
                    INQUIRY CATEGORY
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full border border-gray-300 p-3 text-xs font-jakarta uppercase focus:outline-hidden focus:border-black transition-colors bg-gray-50/50 cursor-pointer"
                  >
                    <option value="GENERAL INQUIRY">GENERAL INQUIRY</option>
                    <option value="VIP FITTING APPOINTMENT">VIP FITTING APPOINTMENT</option>
                    <option value="LIFETIME REPAIR CLAIM">LIFETIME REPAIR CLAIM</option>
                    <option value="CIRCULAR TRADE-IN">CIRCULAR TRADE-IN</option>
                    <option value="PRESS & MEDIA RELATIONS">PRESS & MEDIA RELATIONS</option>
                  </select>
                </div>

                <div>
                  <label className="block font-jakarta font-bold text-xs uppercase tracking-widest text-black mb-2">
                    ENCRYPTED MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="ENTER YOUR MESSAGE OR BESPOKE SIZING SPECIFICATIONS..."
                    className="w-full border border-gray-300 p-3 text-xs font-jakarta uppercase focus:outline-hidden focus:border-black transition-colors bg-gray-50/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors py-4 font-jakarta font-extrabold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>DISPATCH TRANSMITTED</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>TRANSMIT ENCRYPTED DISPATCH</span>
                    </>
                  )}
                </button>

                {submitted && (
                  <div className="bg-emerald-50 border border-emerald-300 p-4 text-emerald-800 text-xs font-jakarta font-semibold uppercase tracking-wider text-center">
                    CONFIRMATION: YOUR MESSAGE HAS BEEN ROUTED TO OUR VIP CLIENT CONCIERGE. RESPONSE WITHIN 2 HOURS.
                  </div>
                )}
              </form>
            </div>

            {/* Right Direct Channels & Flagships (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="relative border border-gray-200 p-6 bg-white hover:border-black transition-colors duration-300">
                <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

                <h3 className="font-orbitron font-bold text-lg uppercase tracking-wide text-black mb-4 border-b border-gray-100 pb-3">
                  DIRECT CHANNELS
                </h3>

                <div className="space-y-4 font-jakarta text-xs">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block uppercase text-black">CLIENT CONCIERGE:</span>
                      <span className="text-gray-600">CONCIERGE@VELORA-FUTURE.COM</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block uppercase text-black">GLOBAL HEADQUARTERS:</span>
                      <span className="text-gray-600">+81 3 5468 9120 / +33 1 42 68 00 11</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block uppercase text-black">OPERATIONAL HOURS:</span>
                      <span className="text-gray-600">24/7 ENCRYPTED RESPONSE NETWORK</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flagship Locations List */}
              <div className="relative border border-gray-200 p-6 bg-white hover:border-black transition-colors duration-300 flex-1">
                <CornerTL className="absolute top-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                <CornerTR className="absolute top-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                <CornerBL className="absolute bottom-0 left-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                <CornerBR className="absolute bottom-0 right-0 text-black" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

                <h3 className="font-orbitron font-bold text-lg uppercase tracking-wide text-black mb-4 border-b border-gray-100 pb-3">
                  FLAGSHIP ATELIERS
                </h3>

                <div className="space-y-4 font-jakarta text-xs">
                  {FLAGSHIP_LOCATIONS.map((loc, idx) => (
                    <div key={idx} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                      <div className="flex items-center justify-between font-bold text-black uppercase mb-1">
                        <span>{loc.city}</span>
                        <span className="text-[10px] text-gray-400 font-mono">{loc.coords}</span>
                      </div>
                      <p className="text-gray-600 text-[11px] leading-snug mb-1">{loc.address}</p>
                      <span className="text-[10px] text-gray-400 font-semibold block">{loc.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: INTERACTIVE CAD MAP & GLOBAL LOCATIONS */}
        <section className="mb-20 pt-16 border-t border-gray-200">
          <div className="flex flex-col items-start mb-12">
            <div className="mb-2 text-black">
              <CornerTL style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            </div>
            <h2 className="font-orbitron font-extrabold uppercase tracking-[0.08em] text-black text-2xl md:text-4xl">
              GLOBAL ATELIER MAP
            </h2>
            <span className="font-jakarta font-semibold uppercase tracking-[0.2em] text-gray-400 text-xs mt-1">
              GEOGRAPHIC COORDINATES // TOKYO • PARIS • NEW YORK
            </span>
          </div>

          <div className="relative border border-gray-200 bg-black text-white p-8 overflow-hidden rounded-lg shadow-2xl">
            <CornerTL className="absolute top-4 left-4 text-white z-20" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerTR className="absolute top-4 right-4 text-white z-20" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBL className="absolute bottom-4 left-4 text-white z-20" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            <CornerBR className="absolute bottom-4 right-4 text-white z-20" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

            {/* Futuristic Map Graphic Background */}
            <div className="relative w-full aspect-[21/9] min-h-[300px] bg-slate-950 border border-gray-800 rounded-md overflow-hidden flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1600&q=85"
                alt="GLOBAL MAP NETWORK"
                className="w-full h-full object-cover opacity-30 filter contrast-125"
              />

              {/* Map Hotspot Pins */}
              <div className="absolute inset-0 flex items-center justify-around px-12">
                {/* Tokyo Pin */}
                <div className="group relative flex flex-col items-center cursor-pointer">
                  <div className="w-4 h-4 rounded-full bg-white animate-ping absolute" />
                  <MapPin className="w-7 h-7 text-white relative z-10 drop-shadow-md" />
                  <div className="bg-black/90 border border-white/30 px-3 py-1.5 rounded-sm mt-2 backdrop-blur-md text-center">
                    <span className="font-orbitron font-bold text-xs text-white block">TOKYO</span>
                    <span className="font-jakarta text-[10px] text-gray-400 block font-mono">35.6634° N</span>
                  </div>
                </div>

                {/* Paris Pin */}
                <div className="group relative flex flex-col items-center cursor-pointer">
                  <div className="w-4 h-4 rounded-full bg-white animate-ping absolute" />
                  <MapPin className="w-7 h-7 text-white relative z-10 drop-shadow-md" />
                  <div className="bg-black/90 border border-white/30 px-3 py-1.5 rounded-sm mt-2 backdrop-blur-md text-center">
                    <span className="font-orbitron font-bold text-xs text-white block">PARIS</span>
                    <span className="font-jakarta text-[10px] text-gray-400 block font-mono">48.8566° N</span>
                  </div>
                </div>

                {/* New York Pin */}
                <div className="group relative flex flex-col items-center cursor-pointer">
                  <div className="w-4 h-4 rounded-full bg-white animate-ping absolute" />
                  <MapPin className="w-7 h-7 text-white relative z-10 drop-shadow-md" />
                  <div className="bg-black/90 border border-white/30 px-3 py-1.5 rounded-sm mt-2 backdrop-blur-md text-center">
                    <span className="font-orbitron font-bold text-xs text-white block">NEW YORK</span>
                    <span className="font-jakarta text-[10px] text-gray-400 block font-mono">40.7209° N</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 font-jakarta text-xs text-gray-400 uppercase tracking-widest pt-4 border-t border-gray-800">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-white" />
                <span>GLOBAL SATELLITE NETWORK ACTIVE</span>
              </div>
              <span>STEALTH DIRECTORY v2.0</span>
            </div>
          </div>
        </section>

        {/* SECTION 3: FREQUENTLY ASKED QUESTIONS (FAQ) */}
        <section className="mb-20 pt-16 border-t border-gray-200">
          <div className="flex flex-col items-start mb-12">
            <div className="mb-2 text-black">
              <CornerTL style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            </div>
            <h2 className="font-orbitron font-extrabold uppercase tracking-[0.08em] text-black text-2xl md:text-4xl">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <span className="font-jakarta font-semibold uppercase tracking-[0.2em] text-gray-400 text-xs mt-1">
              LOGISTICS, TECHNICAL CARE & LIFETIME WARRANTY
            </span>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="relative border border-gray-200 bg-white hover:border-black transition-colors duration-300"
                >
                  <CornerTL className="absolute top-0 left-0 text-gray-300 hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                  <CornerTR className="absolute top-0 right-0 text-gray-300 hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                  <CornerBL className="absolute bottom-0 left-0 text-gray-300 hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                  <CornerBR className="absolute bottom-0 right-0 text-gray-300 hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div>
                      <span className="font-jakarta font-bold text-[10px] tracking-widest text-gray-400 block mb-1 uppercase">
                        {faq.category}
                      </span>
                      <h3 className="font-orbitron font-bold text-sm md:text-base uppercase tracking-wide text-black">
                        {faq.question}
                      </h3>
                    </div>

                    <ChevronDown
                      className={`w-5 h-5 text-black shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 font-jakarta text-xs text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 4: SOCIAL MEDIA CONNECTIONS */}
        <section className="pt-16 border-t border-gray-200 mb-12">
          <div className="flex flex-col items-start mb-12">
            <div className="mb-2 text-black">
              <CornerTL style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
            </div>
            <h2 className="font-orbitron font-extrabold uppercase tracking-[0.08em] text-black text-2xl md:text-4xl">
              SOCIAL CHANNELS & COMMUNITY
            </h2>
            <span className="font-jakarta font-semibold uppercase tracking-[0.2em] text-gray-400 text-xs mt-1">
              CONNECT ACROSS DIGITAL PLATFORMS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
            {SOCIAL_LINKS.map((soc, idx) => {
              const IconComp = soc.icon;
              const isLastOdd = idx === SOCIAL_LINKS.length - 1;
              return (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`group relative border border-gray-200 p-6 bg-white hover:border-black transition-colors duration-300 flex flex-col justify-between items-start h-full min-h-[210px] w-full ${
                    isLastOdd ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <CornerTL className="absolute top-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                  <CornerTR className="absolute top-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                  <CornerBL className="absolute bottom-0 left-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />
                  <CornerBR className="absolute bottom-0 right-0 text-gray-300 group-hover:text-black transition-colors" style={{ width: 'var(--corner)', height: 'var(--corner)' }} />

                  <div className="w-10 h-10 border border-gray-200 bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <div className="w-full">
                    <h4 className="font-orbitron font-bold text-sm uppercase tracking-wide text-black mb-1">
                      {soc.name}
                    </h4>
                    <span className="font-jakarta text-xs text-gray-500 font-semibold uppercase block mb-4">
                      {soc.handle}
                    </span>
                  </div>

                  <span className="font-jakarta font-bold text-[10px] uppercase tracking-widest text-black border-b border-black pb-0.5 group-hover:opacity-70 transition-opacity">
                    FOLLOW CHANNEL →
                  </span>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
