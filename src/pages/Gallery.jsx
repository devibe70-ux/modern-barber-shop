import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/mockData';
import ImageModal from '../components/ImageModal';
import { Camera, Eye, User } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const categories = ['All', 'Fades & Tapers', 'Beard Grooming', 'Classic Cuts', 'Shop Interior'];

  const filteredImages = selectedCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-extrabold px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full inline-flex items-center gap-1.5">
          <Camera className="w-3.5 h-3.5" />
          <span>Barber Shop Portfolio</span>
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-serif-heading text-white">
          LOOKBOOK & GALLERY
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed">
          Browse recent precision cuts, razor sharp line-ups, custom beard sculptures, and our industrial grooming lounge interior.
        </p>
      </div>

      {/* Category Filter Buttons */}
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

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveImage(item)}
            className="group relative bg-[#181818] border border-[#262626] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:border-[#D4AF37]/60 transition-all duration-300"
          >
            <div className="h-72 overflow-hidden relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              {/* Hover overlay button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-[#D4AF37] text-black text-xs font-extrabold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 transform scale-90 group-hover:scale-100 transition-transform">
                  <Eye className="w-4 h-4" />
                  Inspect Photo
                </span>
              </div>
            </div>

            <div className="p-4 bg-[#181818] relative z-10 flex justify-between items-center border-t border-[#262626]">
              <div>
                <span className="text-[10px] text-[#D4AF37] font-semibold uppercase tracking-widest block mb-0.5">
                  {item.category}
                </span>
                <h3 className="text-white font-bold text-sm group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
              </div>
              <div className="text-[11px] text-gray-400 flex items-center gap-1 bg-[#222] px-2.5 py-1 rounded border border-[#333]">
                <User className="w-3 h-3 text-[#D4AF37]" />
                <span>{item.barber}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <ImageModal imageItem={activeImage} onClose={() => setActiveImage(null)} />
    </div>
  );
}
