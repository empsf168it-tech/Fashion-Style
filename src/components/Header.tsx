import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import { PageType } from '../types';
import { CornerTL, CornerTR, CornerBL, CornerBR } from './SVGs';

interface HeaderProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  onOpenCart,
  cartCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { label: string; page: PageType }[] = [
    { label: 'HOME', page: 'HOME' },
    { label: 'SHOP', page: 'SHOP' },
    { label: 'COLLECTIONS', page: 'COLLECTIONS' },
    { label: 'JOURNAL', page: 'JOURNAL' },
    { label: 'CONTACT', page: 'CONTACT' },
  ];

  return (
    <header
      className="relative z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 transition-all duration-300"
      style={{
        paddingInline: 'var(--pad-x)',
        paddingTop: 'var(--header-pt)',
        paddingBottom: 'clamp(0.75rem, 1.5vh, 1.25rem)',
      }}
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo (left) */}
        <button
          onClick={() => handleNavClick('HOME')}
          className="font-orbitron font-black text-black tracking-[0.18em] flex items-center gap-2.5 transition-opacity hover:opacity-80 cursor-pointer"
          style={{ fontSize: 'var(--logo)' }}
          aria-label="VÉLORA Home"
        >
          <div className="w-5 h-5 border-2 border-black flex items-center justify-center rotate-45 shrink-0">
            <div className="w-2 h-2 bg-black" />
          </div>
          <span>VÉLORA</span>
        </button>

        {/* Right side container */}
        <div className="flex items-center gap-4">
          {/* Desktop Nav Links (hidden on mobile and tablet) */}
          <nav
            className="hidden lg:flex font-jakarta font-medium uppercase tracking-[0.2em] items-center"
            style={{
              fontSize: 'var(--nav)',
              gap: 'var(--gap-nav)',
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`transition-all cursor-pointer relative py-1 ${
                  currentPage === item.page
                    ? 'text-black font-bold border-b-2 border-black'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Cart Icon (Always visible) */}
          <button
            onClick={onOpenCart}
            className="relative transition-opacity hover:opacity-50 text-black flex items-center justify-center cursor-pointer p-1.5 border border-transparent hover:border-gray-200 rounded-md"
            aria-label="Shopping Bag"
          >
            <ShoppingBag
              strokeWidth={1.5}
              style={{ width: 'var(--icon)', height: 'var(--icon)' }}
            />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-black text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Hamburger Menu Toggle Button (Visible on Tablet & Mobile: lg:hidden) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-black border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all cursor-pointer rounded-md flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Full Screen Overlay Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-gray-300 shadow-2xl z-40 transition-all duration-300 animate-in slide-in-from-top-2">
          <div className="relative p-6 bg-white space-y-6">
            <CornerTL className="absolute top-2 left-2 text-gray-300" style={{ width: '12px', height: '12px' }} />
            <CornerTR className="absolute top-2 right-2 text-gray-300" style={{ width: '12px', height: '12px' }} />
            <CornerBL className="absolute bottom-2 left-2 text-gray-300" style={{ width: '12px', height: '12px' }} />
            <CornerBR className="absolute bottom-2 right-2 text-gray-300" style={{ width: '12px', height: '12px' }} />

            <div className="flex flex-col space-y-3 pt-2">
              <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 block mb-1">
                NAVIGATION DIRECTORY
              </span>

              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`w-full text-left font-orbitron font-extrabold text-lg uppercase tracking-wider py-3 px-4 border transition-all flex items-center justify-between cursor-pointer ${
                    currentPage === item.page
                      ? 'bg-black text-white border-black shadow-md'
                      : 'border-gray-200 text-gray-800 hover:border-black hover:bg-gray-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className={`w-4 h-4 ${currentPage === item.page ? 'text-white' : 'text-gray-400'}`} />
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between font-jakarta text-[11px] font-bold text-gray-400 uppercase tracking-widest">
              <span>VÉLORA ARCHIVE 2026</span>
              <span className="text-emerald-600 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                SYSTEM ONLINE
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
