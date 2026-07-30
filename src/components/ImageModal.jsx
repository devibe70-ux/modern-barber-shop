import React from 'react';
import { X, Scissors, User } from 'lucide-react';

export default function ImageModal({ imageItem, onClose }) {
  if (!imageItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative max-w-3xl w-full bg-[#181818] border border-[#D4AF37]/40 rounded-2xl overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative max-h-[70vh] bg-black">
          <img
            src={imageItem.image}
            alt={imageItem.title}
            className="w-full h-full object-contain max-h-[70vh]"
          />
        </div>

        <div className="p-6 bg-[#181818] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-extrabold px-2.5 py-0.5 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30">
              {imageItem.category}
            </span>
            <h3 className="text-white font-serif-heading text-xl font-bold mt-2">
              {imageItem.title}
            </h3>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-400 bg-[#222] px-3 py-1.5 rounded-lg border border-[#333]">
            <User className="w-4 h-4 text-[#D4AF37]" />
            <span>Styled by: <strong className="text-white">{imageItem.barber}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
