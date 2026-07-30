import React from 'react';
import { Scissors, MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import { SHOP_INFO } from '../data/mockData';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#222222] text-gray-400 text-sm pt-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded bg-[#D4AF37] p-0.5">
                <div className="w-full h-full bg-[#121212] rounded flex items-center justify-center">
                  <Scissors className="w-5 h-5 text-[#D4AF37]" />
                </div>
              </div>
              <div>
                <span className="text-lg font-bold font-serif-heading text-white block">
                  THE MODERN
                </span>
                <span className="text-[10px] tracking-widest text-[#D4AF37] uppercase font-semibold block">
                  BARBER SHOP
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Metropolis's premier urban grooming lounge. Crafting tailored haircuts, razor skin fades, and luxury hot towel straight razor shaves since 2012.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-[#181818] border border-[#2D2D2D] flex items-center justify-center text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-[#181818] border border-[#2D2D2D] flex items-center justify-center text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-serif-heading text-base font-semibold mb-4 border-b border-[#222] pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-xs">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'services', label: 'Services Menu & Pricing' },
                { id: 'gallery', label: 'Hairstyle Lookbook' },
                { id: 'team', label: 'Meet the Barbers' },
                { id: 'contact', label: 'Location & Contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center text-gray-400 hover:text-[#D4AF37] transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-[#D4AF37] mr-1.5" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Hours of Operation */}
          <div>
            <h3 className="text-white font-serif-heading text-base font-semibold mb-4 border-b border-[#222] pb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              Opening Hours
            </h3>
            <ul className="space-y-2 text-xs">
              {SHOP_INFO.hours.map((h, i) => (
                <li key={i} className="flex justify-between py-1 border-b border-[#1A1A1A]">
                  <span className="text-gray-300 font-medium">{h.day}</span>
                  <span className="text-[#D4AF37]">{h.hours}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[11px] text-amber-500/90 italic">
              * Walk-ins welcome based on availability. Phone booking recommended.
            </p>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h3 className="text-white font-serif-heading text-base font-semibold mb-4 border-b border-[#222] pb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              Contact & Location
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-gray-300">{SHOP_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${SHOP_INFO.formattedPhone}`} className="text-gray-300 hover:text-[#D4AF37]">
                  {SHOP_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-gray-300">{SHOP_INFO.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-[#1C1C1C] flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {SHOP_INFO.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 text-[11px]">Designed for Urban Professionals • Starter Tier Core Presence</p>
        </div>
      </div>
    </footer>
  );
}
