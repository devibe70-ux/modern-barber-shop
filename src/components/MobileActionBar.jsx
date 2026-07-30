import React from 'react';
import { Phone, Navigation, Clock } from 'lucide-react';
import { SHOP_INFO } from '../data/mockData';

export default function MobileActionBar() {
  return (
    <aside aria-label="Quick action bar" className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#161616]/95 backdrop-blur-lg border-t border-[#D4AF37]/30 p-2.5 shadow-[0_-8px_25px_rgba(0,0,0,0.8)]">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {/* One-Tap Call Button */}
        <a
          href={`tel:${SHOP_INFO.formattedPhone}`}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-[#F59E0B] hover:to-[#D4AF37] text-black font-extrabold text-xs uppercase tracking-wider py-3 px-3 rounded-md shadow-md active:scale-[0.98] transition-transform"
        >
          <Phone className="w-4 h-4 fill-black" />
          <span>Call Now</span>
        </a>

        {/* One-Tap Get Directions Button */}
        <a
          href={SHOP_INFO.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#222222] hover:bg-[#2A2A2A] text-white font-bold text-xs uppercase tracking-wider py-3 px-3 rounded-md border border-[#3A3A3A] hover:border-[#D4AF37]/50 active:scale-[0.98] transition-transform"
        >
          <Navigation className="w-4 h-4 text-[#D4AF37]" />
          <span>Directions</span>
        </a>
      </div>
    </aside>
  );
}
