import React, { useState, useMemo } from 'react';
import { SHOP_INFO } from '../data/mockData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, Navigation, Share2, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Inquiry / Walk-in Info',
    barberPreference: 'No Preference / First Available',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: null });
  const [copiedLink, setCopiedLink] = useState(false);

  // Live Open / Closed status based on local time
  const liveStatus = useMemo(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const day = now.getDay();

    let isOpen = false;
    if (day >= 1 && day <= 5) {
      isOpen = currentHour >= 9 && currentHour < 20;
    } else if (day === 6) {
      isOpen = currentHour >= 8 && currentHour < 19;
    } else if (day === 0) {
      isOpen = currentHour >= 10 && currentHour < 17;
    }

    return isOpen;
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShareLocation = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(SHOP_INFO.directionsUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'General Inquiry / Walk-in Info',
          barberPreference: 'No Preference / First Available',
          message: ''
        });
      } else {
        throw new Error(data.message || 'Failed to submit inquiry.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus({ loading: false, success: true, error: null });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-[#333] rounded-full text-xs font-semibold">
          <span className={`w-2.5 h-2.5 rounded-full ${liveStatus ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
          <span className={liveStatus ? 'text-emerald-400' : 'text-rose-400'}>
            {liveStatus ? 'OPEN NOW • Walk-Ins Welcome' : 'CLOSED NOW • Opens 9:00 AM'}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold font-serif-heading text-white">
          LOCATION & CONTACT
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed">
          Easily locate our urban grooming lounge, share our exact Google pin with friends, or send an inquiry directly to the concierge desk.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Info, Location Share & Map */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Location & Quick Navigation Card */}
          <div className="bg-[#181818] border border-[#2B2B2B] rounded-2xl p-6 space-y-6">
            <div className="flex justify-between items-center border-b border-[#262626] pb-3">
              <h2 className="text-xl font-serif-heading font-bold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
                Lounge Location
              </h2>

              <button
                onClick={handleShareLocation}
                className="bg-[#222] hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#333] flex items-center gap-1.5 transition-colors"
                title="Copy location link to share"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Pin Copied!' : 'Share Pin'}</span>
              </button>
            </div>

            {copiedLink && (
              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs text-center animate-fadeIn">
                Google Maps location link copied to clipboard!
              </div>
            )}

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <strong className="text-white block font-medium">Exact Address & Pin</strong>
                  <span className="text-gray-300">{SHOP_INFO.address}</span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <a
                      href={SHOP_INFO.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#D4AF37] text-black text-[11px] font-extrabold px-3 py-1.5 rounded flex items-center gap-1 hover:bg-[#F59E0B] transition-colors"
                    >
                      <Navigation className="w-3 h-3 fill-black" />
                      Google Maps
                    </a>
                    <a
                      href={`https://waze.com/ul?q=${encodeURIComponent(SHOP_INFO.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#222] text-gray-200 border border-[#3A3A3A] text-[11px] font-bold px-3 py-1.5 rounded flex items-center gap-1 hover:border-[#D4AF37] transition-colors"
                    >
                      Waze App
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <strong className="text-white block font-medium">Phone / Desk</strong>
                  <a href={`tel:${SHOP_INFO.formattedPhone}`} className="text-gray-300 hover:text-[#D4AF37] font-semibold">
                    {SHOP_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <strong className="text-white block font-medium">Email Concierge</strong>
                  <span className="text-gray-300">{SHOP_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours Table */}
          <div className="bg-[#181818] border border-[#2B2B2B] rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-serif-heading font-bold text-white border-b border-[#262626] pb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#D4AF37]" />
              Lounge Opening Hours
            </h2>
            <ul className="space-y-2.5 text-xs">
              {SHOP_INFO.hours.map((h, i) => (
                <li key={i} className="flex justify-between py-1.5 border-b border-[#222]">
                  <span className="text-gray-300 font-medium">{h.day}</span>
                  <span className="text-[#D4AF37] font-semibold">{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="bg-[#181818] border border-[#2B2B2B] rounded-2xl overflow-hidden shadow-lg h-64 relative">
            <iframe
              title="Modern Barber Shop Location Map Pin"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215707164102!2d-73.98657938459377!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-[#181818] border border-[#2B2B2B] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div>
              <h2 className="text-2xl font-serif-heading font-bold text-white mb-2">
                SEND AN INQUIRY
              </h2>
              <p className="text-gray-400 text-xs leading-relaxed">
                Fill out the form below for questions regarding service pricing, group events, or walk-in wait times.
              </p>
            </div>

            {status.success && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-start gap-3 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold text-sm">Inquiry Received!</strong>
                  Your inquiry has been submitted directly to the shop concierge desk.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1.5">
                    Your Full Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Michael Thorne"
                    className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-lg px-4 py-3 text-gray-200 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1.5">
                    Phone Number <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                    className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-lg px-4 py-3 text-gray-200 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1.5">
                  Email Address <span className="text-[#D4AF37]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="michael@example.com"
                  className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-lg px-4 py-3 text-gray-200 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1.5">
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-lg px-4 py-3 text-gray-200 outline-none"
                  >
                    <option>General Inquiry / Walk-in Info</option>
                    <option>The Executive Cut ($45)</option>
                    <option>Skin Fade & Sculpt ($50)</option>
                    <option>Royal Hot Towel Shave ($45)</option>
                    <option>The Modern Godfather VIP ($95)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1.5">
                    Barber Preference
                  </label>
                  <select
                    name="barberPreference"
                    value={formData.barberPreference}
                    onChange={handleChange}
                    className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-lg px-4 py-3 text-gray-200 outline-none"
                  >
                    <option>No Preference / First Available</option>
                    <option>Marcus Vance (Master Barber)</option>
                    <option>Dante Rossi (Senior Stylist)</option>
                    <option>Julian Kross (Beard Specialist)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1.5">
                  Message / Details <span className="text-[#D4AF37]">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Provide any specifics about your preferred date, time window, or custom request..."
                  className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-lg px-4 py-3 text-gray-200 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full bg-[#D4AF37] hover:bg-[#F59E0B] text-black font-extrabold text-xs uppercase tracking-wider py-4 rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                {status.loading ? 'Submitting...' : (
                  <>
                    <Send className="w-4 h-4 fill-black" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
