import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

export default function ReviewCard({ review }) {
  return (
    <div className="bg-[#181818] border border-[#2A2A2A] rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all shadow-md group">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center space-x-1 text-[#D4AF37]">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
          ))}
        </div>
        <span className="text-xs text-gray-500">{review.date}</span>
      </div>

      <p className="text-gray-300 text-sm italic mb-4 leading-relaxed">
        "{review.comment}"
      </p>

      <div className="flex items-center justify-between pt-3 border-t border-[#242424] text-xs">
        <div>
          <h4 className="text-white font-semibold flex items-center gap-1.5">
            {review.author}
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" title="Verified Customer" />
          </h4>
          <span className="text-[#D4AF37] text-[11px]">{review.service}</span>
        </div>
        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] px-2 py-0.5 rounded-full font-medium">
          Verified Google Review
        </span>
      </div>
    </div>
  );
}
