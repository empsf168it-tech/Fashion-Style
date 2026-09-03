import React from 'react';
import { X, ShoppingBag, ChevronRight, Trash2 } from 'lucide-react';
import { DrawerType, CartItem } from '../types';

interface DrawerProps {
  activeDrawer: DrawerType;
  onClose: () => void;
  cart: CartItem[];
  onAddToCart: (item: { id: string; title: string; price: number; tag?: string }) => void;
  onRemoveFromCart: (id: string) => void;
  onCheckout: () => void;
}

const CATALOG_PRODUCTS = [
  { id: '1', title: 'CYBER-TEX OVERCOAT', price: 850, tag: 'LIMITED EDITION' },
  { id: '2', title: 'GEO-MESH TECH HOODIE', price: 320, tag: 'NEW DROP' },
  { id: '3', title: 'ORBITAL TAPERED TROUSERS', price: 290, tag: 'IN STOCK' },
  { id: '4', title: 'MODULAR ALL-WEATHER VEST', price: 410, tag: 'PRE-ORDER' },
];

const COLLECTIONS_DATA = [
  {
    id: 'c1',
    series: 'SERIES 01',
    title: 'SYNTHETIC HORIZONS',
    desc: 'Ultra-durable weather-sealed fabrics with minimalist silhouette architecture.',
  },
  {
    id: 'c2',
    series: 'SERIES 02',
    title: 'KINETIC FORM',
    desc: 'Ergonomic streetwear designed for maximum mobility and temperature equilibrium.',
  },
  {
    id: 'c3',
    series: 'SERIES 03',
    title: 'MONOCHROME ZERO',
    desc: 'Pure black and white structural tailoring crafted from 100% recycled polymers.',
  },
];

const JOURNAL_DATA = [
  {
    id: 'j1',
    date: 'AUG 2026',
    title: 'THE ARCHITECTURE OF NEXT-GEN TEXTILES',
    readTime: '4 MIN READ',
  },
  {
    id: 'j2',
    date: 'JUL 2026',
    title: 'CIRCULAR DESIGN IN HIGH-END APPAREL',
    readTime: '6 MIN READ',
  },
  {
    id: 'j3',
    date: 'JUN 2026',
    title: 'MINIMALISM AS A FUNCTIONAL STATEMENT',
    readTime: '3 MIN READ',
  },
];

export const Drawer: React.FC<DrawerProps> = ({
  activeDrawer,
  onClose,
  cart,
  onAddToCart,
  onRemoveFromCart,
  onCheckout,
}) => {
  if (!activeDrawer) return null;

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Right Drawer Container */}
      <div
        className="relative z-10 w-full bg-white text-black h-full flex flex-col justify-between border-l border-gray-200 shadow-2xl transition-transform duration-300 overflow-hidden"
        style={{
          maxWidth: 'var(--drawer-max)',
          padding: 'var(--drawer-pad)',
        }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
          <h2 className="font-orbitron font-bold uppercase text-black tracking-widest text-lg">
            {activeDrawer === 'SHOP' && 'Catalog'}
            {activeDrawer === 'COLLECTIONS' && 'Archive 2026'}
            {activeDrawer === 'JOURNAL' && 'Editorial'}
            {activeDrawer === 'CART' && 'Shopping Bag'}
          </h2>

          <button
            onClick={onClose}
            className="p-1 hover:opacity-60 text-black transition-opacity cursor-pointer"
            aria-label="Close Drawer"
          >
            <X strokeWidth={1.5} className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body Content */}
        <div className="flex-1 overflow-y-auto py-6 space-y-6">
          {/* 1. SHOP / CATALOG */}
          {activeDrawer === 'SHOP' && (
            <div>
              <p className="font-jakarta text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 font-semibold">
                Featured Garments
              </p>
              <div className="space-y-6">
                {CATALOG_PRODUCTS.map((prod) => (
                  <div
                    key={prod.id}
                    className="p-4 border border-gray-200 rounded-md flex flex-col justify-between gap-3 hover:border-gray-400 transition-colors"
                  >
                    <div>
                      <span
                        className="font-jakarta uppercase font-semibold text-gray-400 block mb-1"
                        style={{ fontSize: 'var(--micro)' }}
                      >
                        {prod.tag}
                      </span>
                      <h3 className="font-jakarta font-semibold text-black text-sm tracking-wide">
                        {prod.title}
                      </h3>
                      <p className="font-jakarta font-medium text-black text-sm mt-1">
                        ${prod.price}
                      </p>
                    </div>

                    <button
                      onClick={() => onAddToCart(prod)}
                      className="w-full mt-2 py-2 bg-black text-white font-jakarta text-xs uppercase tracking-[0.15em] font-semibold rounded hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                      ADD
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. COLLECTIONS */}
          {activeDrawer === 'COLLECTIONS' && (
            <div>
              <p className="font-jakarta text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 font-semibold">
                Season Lineup
              </p>
              <div className="space-y-6">
                {COLLECTIONS_DATA.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 border border-gray-200 rounded-md space-y-2 hover:border-gray-400 transition-colors"
                  >
                    <span
                      className="font-jakarta font-semibold uppercase text-gray-400 block"
                      style={{ fontSize: 'var(--micro)' }}
                    >
                      {item.series}
                    </span>
                    <h3 className="font-orbitron font-bold text-black text-sm tracking-wider">
                      {item.title}
                    </h3>
                    <p className="font-jakarta text-xs text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. JOURNAL */}
          {activeDrawer === 'JOURNAL' && (
            <div>
              <p className="font-jakarta text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 font-semibold">
                Latest Dispatches
              </p>
              <div className="space-y-6">
                {JOURNAL_DATA.map((article) => (
                  <div
                    key={article.id}
                    className="p-4 border border-gray-200 rounded-md space-y-2 hover:border-gray-400 transition-colors cursor-pointer"
                  >
                    <div className="flex justify-between items-center text-gray-400 text-[10px] font-jakarta tracking-wider font-semibold">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="font-jakarta font-semibold text-black text-xs leading-snug tracking-wide">
                      {article.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. CART */}
          {activeDrawer === 'CART' && (
            <div>
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center text-gray-400">
                  <ShoppingBag strokeWidth={1.2} className="w-12 h-12 mb-3" />
                  <p className="font-jakarta text-sm uppercase tracking-wider">
                    Your shopping bag is empty.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 border border-gray-200 rounded-md flex items-center justify-between gap-4"
                    >
                      <div>
                        <h4 className="font-jakarta font-semibold text-xs text-black tracking-wide">
                          {item.title}
                        </h4>
                        <p className="font-jakarta text-xs text-gray-500 mt-1">
                          ${item.price} × {item.quantity}
                        </p>
                      </div>

                      <button
                        onClick={() => onRemoveFromCart(item.id)}
                        className="text-gray-400 hover:text-black transition-colors p-1 cursor-pointer"
                        aria-label="Remove item"
                      >
                        <Trash2 strokeWidth={1.5} className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="pt-4 border-t border-gray-200">
          {activeDrawer === 'CART' && cart.length > 0 ? (
            <div className="space-y-4">
              <div className="flex justify-between items-center font-jakarta font-semibold text-sm">
                <span className="uppercase tracking-wider">Total</span>
                <span>${totalAmount}</span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full py-3.5 bg-black text-white font-jakarta text-xs uppercase tracking-[0.2em] font-semibold rounded flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <span>CHECKOUT NOW</span>
                <ChevronRight strokeWidth={1.5} className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <p
              className="font-jakarta text-center text-gray-400 uppercase tracking-[0.2em] select-none"
              style={{ fontSize: 'var(--micro)' }}
            >
              VÉLORA © 2026 — FUTURE FORWARD FASHION
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
