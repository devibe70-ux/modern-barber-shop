import React from 'react';
import { Scissors, ShieldCheck, Flame, Award, Phone, ArrowRight, Star, MapPin, Clock } from 'lucide-react';
import { SHOP_INFO, SERVICES, REVIEWS } from '../data/mockData';
import ServiceCard from '../components/ServiceCard';
import ReviewCard from '../components/ReviewCard';

export default function Home({ setActiveTab }) {
  const featuredServices = SERVICES.flatMap(cat => cat.items).filter(item => item.featured).slice(0, 3);

  return (
    <div className="space-y-20 pb-12">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden rounded-b-3xl border-b border-[#2A2A2A]">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=80"
            alt="Barber Lounge Interior"
            className="w-full h-full object-cover filter brightness-[0.35] contrast-125 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#121212]/50 to-[#121212]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 py-20">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-extrabold mb-6 shadow-lg">
            <Scissors className="w-3.5 h-3.5" />
            <span>Premier Grooming Lounge • Walk-Ins & Appointments</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-serif-heading text-white tracking-tight leading-tight mb-6">
            SHARP CUTS. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#D4AF37]">
              CLASSIC CRAFT.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg leading-relaxed mb-10">
            Metropolis’s destination for high-precision skin fades, hot towel straight razor shaves, and custom beard engineering. Tailored for urban professionals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${SHOP_INFO.formattedPhone}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#D4AF37] hover:bg-[#F59E0B] text-black font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-lg shadow-xl shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40 transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>Call to Book ({SHOP_INFO.phone})</span>
            </a>

            <button
              onClick={() => {
                setActiveTab('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#222222]/90 hover:bg-[#2C2C2C] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-lg border border-[#3A3A3A] hover:border-[#D4AF37]/60 transition-all"
            >
              <span>Explore Menu & Rates</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>

          {/* Quick Stats Banner */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8 border-t border-white/10 text-left">
            <div>
              <span className="block text-2xl font-extrabold text-[#D4AF37]">12+</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider">Years of Craft</span>
            </div>
            <div>
              <span className="block text-2xl font-extrabold text-[#D4AF37]">4.9 ★</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider">Google Rating</span>
            </div>
            <div>
              <span className="block text-2xl font-extrabold text-[#D4AF37]">15k+</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider">Satisfied Clients</span>
            </div>
            <div>
              <span className="block text-2xl font-extrabold text-[#D4AF37]">100%</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider">Razor Line Precision</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Key Value Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-extrabold block mb-2">
            Why Urban Professionals Choose Us
          </span>
          <h2 className="text-3xl font-serif-heading font-bold text-white">
            UNCOMPROMISING STANDARDS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Scissors,
              title: "Precision Hair Architecture",
              desc: "Every cut is customized to your head shape, hair density, and personal style goals."
            },
            {
              icon: Flame,
              title: "3-Step Hot Towel Steams",
              desc: "Experience old-school relaxation with pre-shave essential oils and steaming towels."
            },
            {
              icon: ShieldCheck,
              title: "Master Craftsmen",
              desc: "Seasoned barbers with a minimum 7+ years experience in heritage and modern fading."
            },
            {
              icon: Award,
              title: "Complimentary Beverage",
              desc: "Enjoy craft espresso or cold beverages with every haircut experience in our lounge."
            }
          ].map((pillar, i) => (
            <div key={i} className="bg-[#181818] border border-[#2A2A2A] rounded-xl p-6 hover:border-[#D4AF37]/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-5 group-hover:scale-110 transition-transform">
                <pillar.icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-serif-heading text-lg font-bold mb-2 group-hover:text-[#D4AF37] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-extrabold block mb-2">
              Featured Menu
            </span>
            <h2 className="text-3xl font-serif-heading font-bold text-white">
              POPULAR GROOMING SERVICES
            </h2>
          </div>
          <button
            onClick={() => {
              setActiveTab('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="mt-4 md:mt-0 text-xs font-bold text-[#D4AF37] hover:underline flex items-center gap-1 uppercase tracking-wider"
          >
            <span>View Full Service Menu & Rates</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredServices.map(item => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="bg-[#161616] border-y border-[#262626] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-[#D4AF37] mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#D4AF37]" />
              ))}
            </div>
            <h2 className="text-3xl font-serif-heading font-bold text-white mb-2">
              WHAT OUR CLIENTS SAY
            </h2>
            <p className="text-gray-400 text-xs">
              4.9 Stars based on over 450+ verified Google Reviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map(rev => (
              <ReviewCard key={rev.id} review={rev} />
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1A1A1A] via-[#222222] to-[#1A1A1A] border border-[#D4AF37]/40 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-extrabold text-white">
              READY FOR A FRESH LOOK?
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Walk-ins welcome or give us a quick call to ensure immediate seating with your preferred master barber.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${SHOP_INFO.formattedPhone}`}
                className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#F59E0B] text-black font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 rounded-lg shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-black" />
                Call {SHOP_INFO.phone}
              </a>
              <button
                onClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-[#262626] hover:bg-[#303030] text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-lg border border-[#3E3E3E] flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                Get Location & Hours
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
