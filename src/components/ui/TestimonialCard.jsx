import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const colorMap = {
  ocean: 'bg-ocean-500',
  sand: 'bg-sand-500',
  gold: 'bg-gold-500',
};

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full flex flex-col
                 hover:bg-white/10 transition-all duration-300"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-white/75 text-sm leading-relaxed flex-1 mb-5 italic">
        "{testimonial.review}"
      </p>

      {/* Treatment tag */}
      <div className="mb-4">
        <span className="text-xs px-3 py-1 bg-ocean-500/30 text-ocean-200 rounded-full font-medium">
          {testimonial.treatment}
        </span>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <div
          className={`w-10 h-10 rounded-full ${colorMap[testimonial.avatarColor] || 'bg-ocean-500'}
                      flex items-center justify-center text-white text-xs font-bold shrink-0`}
        >
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{testimonial.name}</p>
          <p className="text-white/40 text-xs">{testimonial.location} · {testimonial.date}</p>
        </div>
      </div>
    </motion.div>
  );
}
