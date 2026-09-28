import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { CornerTL, CornerBR } from './SVGs';

export const ScrollToBottomTop: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)));
      }
      setIsTop(scrollTop < 120);
      setIsBottom(scrollTop + window.innerHeight >= document.documentElement.scrollHeight - 120);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-2 pointer-events-auto select-none"
      aria-label="Scroll Navigation"
    >
      {/* Top to Bottom Scroll Button */}
      <button
        onClick={scrollToBottom}
        title="Scroll from Top to Bottom"
        aria-label="Scroll from Top to Bottom"
        className={`relative w-11 h-11 bg-white/95 backdrop-blur-md text-black border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300 shadow-xl flex items-center justify-center cursor-pointer group rounded-md ${
          isBottom ? 'opacity-50 pointer-events-none' : 'opacity-100'
        }`}
      >
        <CornerTL className="absolute top-1 left-1 text-gray-300 group-hover:text-white transition-colors" style={{ width: '8px', height: '8px' }} />
        <CornerBR className="absolute bottom-1 right-1 text-gray-300 group-hover:text-white transition-colors" style={{ width: '8px', height: '8px' }} />
        <ArrowDown strokeWidth={2} className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
      </button>

      {/* Bottom to Top Scroll Button */}
      <button
        onClick={scrollToTop}
        title="Scroll to Top"
        aria-label="Scroll to Top"
        className={`relative w-11 h-11 bg-white/95 backdrop-blur-md text-black border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300 shadow-xl flex items-center justify-center cursor-pointer group rounded-md ${
          isTop ? 'opacity-50 pointer-events-none' : 'opacity-100'
        }`}
      >
        <CornerTL className="absolute top-1 left-1 text-gray-300 group-hover:text-white transition-colors" style={{ width: '8px', height: '8px' }} />
        <CornerBR className="absolute bottom-1 right-1 text-gray-300 group-hover:text-white transition-colors" style={{ width: '8px', height: '8px' }} />
        <ArrowUp strokeWidth={2} className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
      </button>

      {/* Mini Progress Indicator */}
      <div className="w-8 bg-gray-200 h-1 rounded-full overflow-hidden mt-0.5">
        <div
          className="bg-black h-full transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
};
