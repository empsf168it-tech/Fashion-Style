import React from 'react';
import { Check } from 'lucide-react';
import { ToastMessage } from '../types';

interface ToastProps {
  toasts: ToastMessage[];
}

export const Toast: React.FC<ToastProps> = ({ toasts }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-black text-white px-4 py-3 rounded-md shadow-xl flex items-center gap-3 text-xs font-jakarta tracking-wide animate-fade-in pointer-events-auto border border-gray-800"
        >
          <Check strokeWidth={2} className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toast.text}</span>
        </div>
      ))}
    </div>
  );
};
