import { useState, useEffect } from 'react';
import { ImageRevealBackground } from './components/ImageRevealBackground';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { JournalPage } from './pages/JournalPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';
import { Drawer } from './components/Drawer';
import { Toast } from './components/Toast';
import { PageType, DrawerType, CartItem, ToastMessage } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('HOME');
  const [activeDrawer, setActiveDrawer] = useState<DrawerType>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Sync hash routing (e.g. #shop, #collections, #journal, #contact)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '');
      if (hash === 'shop') setCurrentPage('SHOP');
      else if (hash === 'collections') setCurrentPage('COLLECTIONS');
      else if (hash === 'journal') setCurrentPage('JOURNAL');
      else if (hash === 'contact') setCurrentPage('CONTACT');
      else if (hash === 'home' || hash === '') setCurrentPage('HOME');
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const changePage = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page === 'HOME' ? '' : page.toLowerCase();
  };

  const addToast = (text: string) => {
    const id = Date.now().toString() + Math.random().toString();
    setToasts((prev) => [...prev, { id, text }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const handleAddToCart = (product: { id: string; title: string; price: number; tag?: string }) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    addToast(`Added "${product.title}" to your shopping bag.`);
  };

  const handleRemoveFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    addToast('Order submitted successfully!');
    setCart([]);
    setActiveDrawer(null);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-black font-jakarta flex flex-col justify-between relative overflow-x-hidden">
      {/* Interactive Desktop Dual-Image Spotlight Background on Home Page */}
      {currentPage === 'HOME' && <ImageRevealBackground />}

      {/* Global Navigation Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={changePage}
        onOpenCart={() => setActiveDrawer('CART')}
        cartCount={cartCount}
      />

      {/* Page Routing Views */}
      <main className="flex-1">
        {currentPage === 'HOME' && <HomePage setCurrentPage={changePage} />}
        {currentPage === 'SHOP' && <ShopPage onAddToCart={handleAddToCart} />}
        {currentPage === 'COLLECTIONS' && <CollectionsPage />}
        {currentPage === 'JOURNAL' && <JournalPage />}
        {currentPage === 'CONTACT' && <ContactPage />}
      </main>

      {/* Global Page Footer */}
      <Footer setCurrentPage={changePage} />

      {/* Slide-out Shopping Bag Drawer */}
      <Drawer
        activeDrawer={activeDrawer}
        onClose={() => setActiveDrawer(null)}
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />

      {/* Toast Notifications */}
      <Toast toasts={toasts} />
    </div>
  );
}
