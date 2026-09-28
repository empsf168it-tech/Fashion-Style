export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  tag?: string;
  img?: string;
}

export type PageType = 'HOME' | 'SHOP' | 'COLLECTIONS' | 'JOURNAL' | 'CONTACT';

export type DrawerType = 'CART' | 'SHOP' | 'COLLECTIONS' | 'JOURNAL' | null;

export interface ToastMessage {
  id: string;
  text: string;
}
