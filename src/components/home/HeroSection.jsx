import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarCheck, Waves, Star } from 'lucide-react';
import heroSpa from '../../assets/images/hero_spa.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroSpa}
          alt="Ocean Spa luxury treatment"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold-400/40 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{ y: [-10, 10, -10], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}

      {/* Content */}
      <div className="container-pad relative z-10 pt-24">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-2 mb-5"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-gold-400 fill-gold-400" />
              ))}
            </div>
            <span className="text-xs text-gold-400/80 tracking-[0.25em] uppercase font-sans font-semibold">
              Delhi's Premium Wellness Sanctuary
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
          >
            Relax Your Body,
            <br />
            <span className="gold-text">Calm Your Mind</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="w-20 h-0.5 bg-gold-gradient mb-6"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-white/75 mb-10 max-w-lg leading-relaxed"
          >
            Step into Ocean Spa Delhi — where ancient healing traditions meet modern luxury. 
            Experience transformative treatments curated for your complete wellbeing.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/book-appointment"
              className="flex items-center gap-2 px-8 py-4 bg-gold-gradient text-charcoal font-bold rounded-full
                         hover:shadow-gold hover:-translate-y-1 hover:scale-105 transition-all duration-300 tracking-wide"
            >
              <CalendarCheck className="w-5 h-5" />
              Book Your Experience
            </Link>
            <Link
              to="/services"
              className="flex items-center gap-2 px-8 py-4 border-2 border-white/60 text-white font-semibold rounded-full
                         hover:bg-white hover:text-ocean-700 hover:-translate-y-1 transition-all duration-300 tracking-wide backdrop-blur-sm"
            >
              Explore Treatments
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/15"
          >
            {[
              { value: '5,000+', label: 'Happy Clients' },
              { value: '15+', label: 'Expert Therapists' },
              { value: '8', label: 'Luxury Treatments' },
              { value: '4.9★', label: 'Average Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl font-bold text-gold-400">{stat.value}</p>
                <p className="text-xs text-white/50 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating booking button (right side) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3"
      >
        <div className="w-px h-16 bg-white/20" />
        <Link
          to="/book-appointment"
          className="animate-floating flex flex-col items-center gap-2 px-4 py-5 glass-card rounded-2xl
                     hover:border-gold-400/40 transition-all duration-300 group"
        >
          <Waves className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] text-white/70 tracking-[0.2em] uppercase font-semibold [writing-mode:vertical-rl]">
            Book Now
          </span>
        </Link>
        <div className="w-px h-16 bg-white/20" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/40 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-gold-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
