import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, Scissors, Clock, Calendar, CreditCard } from 'lucide-react';
import { SHOP_INFO } from '../data/mockData';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'appointment', label: 'Book Appointment' },
    { id: 'services', label: 'Services & Rates' },
    { id: 'gallery', label: 'Lookbook' },
    { id: 'team', label: 'About Team' },
    { id: 'payment', label: 'Payment & Invoice' },
    { id: 'contact', label: 'Contact & Location' },
  ];

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#121212]/95 backdrop-blur-md border-b border-[#2A2A2A] transition-all">
      {/* Top Banner - Phone & Address */}
      <div className="hidden sm:flex justify-between items-center px-6 py-1.5 bg-[#181818] border-b border-[#242424] text-xs text-gray-400">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors cursor-pointer" onClick={() => handleNavClick('contact')}>
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            {SHOP_INFO.address}
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <Clock className="w-3.5 h-3.5" />
            Open Today: 9:00 AM - 8:00 PM
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href={`tel:${SHOP_INFO.formattedPhone}`}
            className="flex items-center gap-1.5 text-[#D4AF37] font-semibold hover:underline"
          >
            <Phone className="w-3.5 h-3.5" />
            {SHOP_INFO.phone}
          </a>
        </div>
      </div>

      {/* Main Header Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#B38F24] p-0.5 shadow-lg group-hover:shadow-[#D4AF37]/20 transition-all">
              <div className="w-full h-full bg-[#121212] rounded-[7px] flex items-center justify-center">
                <Scissors className="w-5 h-5 text-[#D4AF37] group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold font-serif-heading tracking-wider text-white block">
                THE MODERN
              </span>
              <span className="text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-semibold block">
                BARBER SHOP
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 text-xs font-semibold transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#D4AF37]'
                      : 'text-gray-300 hover:text-white hover:bg-[#1E1E1E] rounded-md'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleNavClick('appointment')}
              className="hidden lg:flex items-center gap-1.5 bg-[#D4AF37] hover:bg-[#F59E0B] text-black font-extrabold text-xs uppercase tracking-wider px-4 py-2.5 rounded shadow-lg shadow-[#D4AF37]/10 hover:shadow-[#D4AF37]/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 fill-black" />
              Book Online
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-[#1E1E1E] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161616] border-b border-[#2A2A2A] px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                activeTab === link.id
                  ? 'bg-[#D4AF37]/15 text-[#D4AF37] border-l-4 border-[#D4AF37]'
                  : 'text-gray-300 hover:bg-[#202020]'
              }`}
            >
              <span>{link.label}</span>
              {activeTab === link.id && <Scissors className="w-4 h-4 text-[#D4AF37]" />}
            </button>
          ))}
          <div className="pt-4 border-t border-[#262626] space-y-2">
            <button
              onClick={() => handleNavClick('appointment')}
              className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] text-black font-extrabold py-3 rounded-lg uppercase text-sm tracking-wider"
            >
              <Calendar className="w-4 h-4 fill-black" />
              Book Appointment Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
