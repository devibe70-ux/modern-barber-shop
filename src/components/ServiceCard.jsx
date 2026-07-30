import React from 'react';
import { Clock, Scissors, Phone } from 'lucide-react';
import { SHOP_INFO } from '../data/mockData';

export default function ServiceCard({ item }) {
  return (
    <div className={`relative bg-[#1A1A1A] border rounded-xl p-6 transition-all duration-300 flex flex-col justify-between group ${
      item.featured 
        ? 'border-[#D4AF37]/50 shadow-[0_0_20px_rgba(212,175,55,0.1)] bg-gradient-to-b from-[#1C1C1C] to-[#161616]' 
        : 'border-[#2D2D2D] hover:border-[#444]'
    }`}>
      {item.featured && (
        <span className="absolute -top-3 right-4 bg-[#D4AF37] text-black text-[10px] uppercase tracking-wider font-extrabold px-3 py-0.5 rounded-full shadow">
          Popular Choice
        </span>
      )}

      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-white font-serif-heading text-lg font-bold group-hover:text-[#D4AF37] transition-colors">
            {item.name}
          </h3>
          <span className="text-xl font-extrabold text-[#D4AF37] ml-2">
            {item.price}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-amber-500/90 mb-3 font-medium">
          <Clock className="w-3.5 h-3.5" />
          <span>{item.duration}</span>
        </div>

        <p className="text-gray-400 text-xs leading-relaxed mb-6">
          {item.description}
        </p>
      </div>

      <div className="pt-4 border-t border-[#262626] flex items-center justify-between">
        <span className="text-[11px] text-gray-500 flex items-center gap-1">
          <Scissors className="w-3 h-3 text-[#D4AF37]" />
          Hot Towel Included
        </span>
        <a
          href={`tel:${SHOP_INFO.formattedPhone}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-white transition-colors"
        >
          <Phone className="w-3 h-3" />
          Call to Book
        </a>
      </div>
    </div>
  );
}
