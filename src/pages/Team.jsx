import React from 'react';
import { TEAM_MEMBERS, SHOP_INFO } from '../data/mockData';
import TeamCard from '../components/TeamCard';
import { Scissors, Phone, ShieldCheck } from 'lucide-react';

export default function Team() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-extrabold px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full inline-flex items-center gap-1.5">
          <Scissors className="w-3.5 h-3.5" />
          <span>Craftsmen & Stylists</span>
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-serif-heading text-white">
          MEET THE BARBERS
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed">
          Our team consists of master craftsmen dedicated to precision haircutting, custom beard sculpting, and heritage straight razor shaves.
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TEAM_MEMBERS.map(member => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>

      {/* Craftsmanship Guarantee Box */}
      <div className="bg-[#181818] border border-[#D4AF37]/30 rounded-2xl p-8 text-center max-w-4xl mx-auto relative overflow-hidden">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
            <ShieldCheck className="w-6 h-6" />
          </div>
        </div>
        <h3 className="text-2xl font-serif-heading font-bold text-white mb-2">
          THE 100% PRECISION GUARANTEE
        </h3>
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto mb-6">
          If your cut or beard line-up isn't exactly as you requested, let your barber know before leaving the chair. We will re-sculpt or tweak it free of charge. Your satisfaction is our benchmark.
        </p>
        <a
          href={`tel:${SHOP_INFO.formattedPhone}`}
          className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#F59E0B] text-black font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-md"
        >
          <Phone className="w-4 h-4 fill-black" />
          <span>Call to Request Your Preferred Barber ({SHOP_INFO.phone})</span>
        </a>
      </div>
    </div>
  );
}
