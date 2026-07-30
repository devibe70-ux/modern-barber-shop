import React, { useState } from 'react';
import { SERVICES, SHOP_INFO } from '../data/mockData';
import ServiceCard from '../components/ServiceCard';
import { Scissors, Phone, CheckCircle, Info } from 'lucide-react';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...SERVICES.map(c => c.category)];

  const filteredCategories = selectedCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(c => c.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-extrabold px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full">
          Transparent Pricing & Premium Care
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-serif-heading text-white">
          SERVICES & RATES
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed">
          Every haircut includes a scalp analysis, hot towel neck steam, and neck razor line-up. No hidden fees or unexpected add-ons.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 pb-4 border-b border-[#262626]">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
              selectedCategory === cat
                ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20'
                : 'bg-[#1C1C1C] text-gray-300 hover:bg-[#282828] border border-[#2E2E2E]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Services Categories & Cards */}
      <div className="space-y-12">
        {filteredCategories.map((group) => (
          <div key={group.category} className="space-y-6">
            <div className="flex items-center space-x-3 border-l-4 border-[#D4AF37] pl-4">
              <Scissors className="w-5 h-5 text-[#D4AF37]" />
              <h2 className="text-2xl font-serif-heading font-bold text-white">
                {group.category}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map(item => (
                <ServiceCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Grooming Lounge Notice Box */}
      <div className="bg-[#181818] border border-[#2B2B2B] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#D4AF37] shrink-0 mt-1">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-white font-bold text-base mb-1">
              Need a Custom Grooming Package?
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xl">
              We accommodate wedding parties, corporate groups, and private after-hours lounge bookings. Contact our master barber team for customized package pricing.
            </p>
          </div>
        </div>

        <a
          href={`tel:${SHOP_INFO.formattedPhone}`}
          className="w-full md:w-auto shrink-0 bg-[#D4AF37] hover:bg-[#F59E0B] text-black font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4 fill-black" />
          <span>Call Lounge Desk ({SHOP_INFO.phone})</span>
        </a>
      </div>
    </div>
  );
}
