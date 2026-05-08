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
          className="w-full h-full object-cover object-right md:object-center"
        />
        {/* Gradient overlays for cinematic left-focused look */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold-400/40 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 4) * 20}%`,
          }}
          animate={{ y: [-15, 15, -15], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      {/* Content */}
      <div className="container-pad relative z-10 w-full min-h-screen flex items-center pt-24 pb-16">
        <div className="max-w-2xl lg:max-w-3xl flex flex-col items-start w-full">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold-400/30 bg-gold-400/10 backdrop-blur-sm mb-6"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
              ))}
            </div>
            <span className="text-[11px] md:text-xs text-gold-400 tracking-[0.2em] uppercase font-sans font-bold">
              Delhi's Premium Wellness Sanctuary
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-bold text-white leading-[1.1] mb-6 tracking-tight"
          >
            Relax Your Body,<br />
            <span className="gold-text">Calm Your Mind</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg text-white/80 mb-10 max-w-xl leading-relaxed font-light"
          >
            Step into Ocean Spa Delhi — where ancient healing traditions meet modern luxury.
            Experience transformative treatments curated for your complete wellbeing.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <Link
              to="/book-appointment"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gold-gradient text-charcoal font-bold rounded-full
                         hover:shadow-gold hover:-translate-y-1 transition-all duration-300 tracking-wide text-sm md:text-base"
            >
              <CalendarCheck className="w-5 h-5" />
              Book Your Experience
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border border-white/30 bg-white/5 text-white font-medium rounded-full
                         hover:bg-white hover:text-ocean-900 hover:border-white hover:-translate-y-1 transition-all duration-300 tracking-wide backdrop-blur-md text-sm md:text-base"
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
            className="mt-14 w-full"
          >
            <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap items-center gap-y-6 md:gap-y-0 bg-charcoal/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 max-w-max shadow-2xl">
              {[
                { value: '5,000+', label: 'Happy Clients' },
                { value: '15+', label: 'Expert Therapists' },
                { value: '8', label: 'Luxury Treatments' },
                { value: '4.9★', label: 'Average Rating' },
              ].map((stat, i, arr) => (
                <div key={stat.label} className="flex items-center w-full md:w-auto justify-center md:justify-start">
                  <div className="flex flex-col items-center md:items-start px-4 sm:px-6">
                    <p className="font-serif text-3xl font-bold text-gold-400 mb-1">{stat.value}</p>
                    <p className="text-sm text-white/70 font-medium whitespace-nowrap uppercase tracking-wider text-[10px] sm:text-xs">{stat.label}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden md:block w-px h-12 bg-white/20 mx-2" />
                  )}
                  {i < arr.length - 1 && (
                    <div className="md:hidden w-1/2 h-px bg-white/20 my-4" />
                  )}
                </div>
              ))}
            </div>
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
