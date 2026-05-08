import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, IndianRupee } from 'lucide-react';

export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-luxury transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />

        {/* Category tag */}
        <div className="absolute top-4 left-4">
          <span className="tag-pill">{service.category}</span>
        </div>

        {/* Emoji icon */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm
                        flex items-center justify-center text-xl border border-white/30">
          {service.icon}
        </div>

        {/* Price overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <h3 className="font-serif text-xl font-bold text-white">{service.name}</h3>
          <div className="flex items-center gap-0.5 text-gold-400 font-bold text-lg">
            <IndianRupee className="w-4 h-4" />
            {service.price.toLocaleString('en-IN')}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs text-ocean-500 font-semibold mb-2 tracking-wide">{service.tagline}</p>
        <p className="text-sm text-charcoal/60 line-clamp-2 mb-4 leading-relaxed">
          {service.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs text-charcoal/50">
            <Clock className="w-3.5 h-3.5" />
            {service.duration}
          </span>
          <Link
            to={`/services/${service.slug}`}
            className="flex items-center gap-1 text-sm font-semibold text-ocean-600 hover:text-ocean-700
                       group-hover:gap-2 transition-all duration-300"
          >
            Explore
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
