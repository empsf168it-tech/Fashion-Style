import React, { useState } from 'react';
import { CornerTL, CornerTR, CornerBL, CornerBR } from './SVGs';
import { PageType } from '../types';
import { ArrowUpRight, Check, Send, Instagram, Twitter, Youtube, Linkedin, MessageSquare } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative z-20 bg-black text-white border-t border-gray-800 pt-16 pb-12 overflow-hidden">
      {/* Outer Padding Container */}
      <div style={{ paddingInline: 'var(--pad-x)' }} className="max-w-7xl mx-auto">
        {/* Main Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-800">
          {/* Brand & Manifesto Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 border-2 border-white flex items-center justify-center rotate-45 shrink-0 shadow-lg">
                  <div className="w-3 h-3 bg-white" />
                </div>
                <span className="font-orbitron font-extrabold text-3xl tracking-[0.18em] text-white">
                  VÉLORA
                </span>
              </div>
              <span className="font-jakarta font-bold text-xs uppercase tracking-[0.25em] text-gray-400 block mb-4">
                FUTURE FORWARD FASHION // EST. 2026
              </span>
              <p className="font-jakarta text-xs text-gray-400 leading-relaxed max-w-sm">
                Architectural apparel, weatherproof synthetic membranes, and zero-waste pattern drafting engineered for high performance in hostile urban environments.
              </p>
            </div>

            <div className="relative border border-white/20 p-4 bg-white/5 backdrop-blur-xs max-w-sm">
              <CornerTL className="absolute top-0 left-0 text-white" style={{ width: '12px', height: '12px' }} />
              <CornerTR className="absolute top-0 right-0 text-white" style={{ width: '12px', height: '12px' }} />
              <CornerBL className="absolute bottom-0 left-0 text-white" style={{ width: '12px', height: '12px' }} />
              <CornerBR className="absolute bottom-0 right-0 text-white" style={{ width: '12px', height: '12px' }} />

              <div className="flex items-center justify-between text-[11px] font-jakarta font-semibold uppercase tracking-widest text-gray-300 mb-3 border-b border-white/10 pb-2">
                <span>SYSTEM STATUS: ONLINE</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Social Media Icons Bar */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-white hover:bg-white/10 transition-all cursor-pointer rounded-xs"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter / X"
                  className="w-8 h-8 border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-white hover:bg-white/10 transition-all cursor-pointer rounded-xs"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-white hover:bg-white/10 transition-all cursor-pointer rounded-xs"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-white hover:bg-white/10 transition-all cursor-pointer rounded-xs"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Discord"
                  className="w-8 h-8 border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-white hover:bg-white/10 transition-all cursor-pointer rounded-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-orbitron font-bold text-sm uppercase tracking-widest text-white mb-6 border-b border-gray-800 pb-2">
              PAGES
            </h4>
            <ul className="space-y-3 font-jakarta text-xs uppercase tracking-widest font-semibold text-gray-400">
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('HOME');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 group"
                >
                  <span>HOME</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('SHOP');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 group"
                >
                  <span>SHOP</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('COLLECTIONS');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 group"
                >
                  <span>COLLECTIONS</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('JOURNAL');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 group"
                >
                  <span>JOURNAL</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('CONTACT');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 group"
                >
                  <span>CONTACT</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* Collections Column (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-orbitron font-bold text-sm uppercase tracking-widest text-white mb-6 border-b border-gray-800 pb-2">
              SERIES
            </h4>
            <ul className="space-y-3 font-jakarta text-xs uppercase tracking-widest font-semibold text-gray-400">
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('COLLECTIONS');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 group text-left"
                >
                  <span>SERIES 01 — HORIZONS</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('COLLECTIONS');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 group text-left"
                >
                  <span>SERIES 02 — KINETIC</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('COLLECTIONS');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 group text-left"
                >
                  <span>SERIES 03 — ZERO</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Stealth Network (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-orbitron font-bold text-sm uppercase tracking-widest text-white mb-6 border-b border-gray-800 pb-2">
              STEALTH DISPATCH NETWORK
            </h4>
            <p className="font-jakarta text-xs text-gray-400 leading-relaxed mb-4">
              Subscribe to receive encrypted notifications for limited-edition garment drops and private lab research releases.
            </p>

            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER EMAIL ADDRESS..."
                required
                className="w-full bg-gray-900/80 border border-gray-700 text-white font-jakarta text-xs px-4 py-3 focus:outline-hidden focus:border-white transition-colors placeholder:text-gray-600 uppercase"
              />
              <button
                type="submit"
                className="bg-white text-black px-4 py-3 font-jakarta font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
              >
                {subscribed ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>JOINED</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>JOIN</span>
                  </>
                )}
              </button>
            </form>
            {subscribed && (
              <span className="font-jakarta text-[11px] text-emerald-400 uppercase tracking-widest block mt-2">
                SUCCESS: ENCRYPTED ADDRESS ADDED TO NETWORK
              </span>
            )}
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-jakarta text-xs text-gray-500 uppercase tracking-widest">
          <div>
            © 2026 VÉLORA — FUTURE FORWARD FASHION. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">PRIVACY POLICY</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">TERMS & CONDITIONS</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">ACCESSIBILITY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
