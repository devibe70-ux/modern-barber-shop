import React from 'react';
import { Award, Scissors } from 'lucide-react';

export default function TeamCard({ member }) {
  return (
    <div className="bg-[#181818] border border-[#2B2B2B] rounded-2xl overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-300 group shadow-lg">
      <div className="relative h-72 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/40 to-transparent" />
        
        <span className="absolute top-4 right-4 bg-black/80 backdrop-blur border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow">
          <Award className="w-3.5 h-3.5" />
          {member.experience}
        </span>
      </div>

      <div className="p-6 relative -mt-6">
        <h3 className="text-white font-serif-heading text-xl font-bold mb-0.5 group-hover:text-[#D4AF37] transition-colors">
          {member.name}
        </h3>
        <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
          {member.role}
        </p>

        <p className="text-gray-400 text-xs leading-relaxed mb-5">
          {member.bio}
        </p>

        <div className="mb-5">
          <span className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold block mb-2">
            Specialties
          </span>
          <div className="flex flex-wrap gap-1.5">
            {member.specialties.map((spec, idx) => (
              <span
                key={idx}
                className="bg-[#222] border border-[#333] text-gray-300 text-[11px] px-2.5 py-1 rounded-md flex items-center gap-1"
              >
                <Scissors className="w-2.5 h-2.5 text-[#D4AF37]" />
                {spec}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-xs">
          <span className="text-gray-500 font-medium">{member.instagram}</span>
          <a
            href={`https://instagram.com/${member.instagram.replace('@','')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#D4AF37] hover:underline font-medium"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
