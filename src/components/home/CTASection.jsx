import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarCheck, Phone, ArrowRight } from 'lucide-react';
import oceanBg from '../../assets/images/ocean_bg.png';

export default function CTASection() {
  return (
    <section className="relative section-pad overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img src={oceanBg} alt="Ocean Spa booking" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-ocean-900/80 to-charcoal/85" />
      </div>

      {/* Glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/15 rounded-full blur-3xl" />

      <div className="container-pad relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-gold-400 mb-5">
            <span className="w-6 h-px bg-gold-400" />
            Begin Your Journey
            <span className="w-6 h-px bg-gold-400" />
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            Your Transformation
            <br />
            <span className="gold-text">Awaits You</span>
          </h2>
          <p className="text-white/65 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Take the first step towards deep restoration. Book your Ocean Spa experience today and discover what it means to truly relax.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gold-gradient text-charcoal font-bold rounded-full
                         text-base hover:shadow-gold hover:-translate-y-1 hover:scale-105 transition-all duration-300 tracking-wide"
            >
              <CalendarCheck className="w-5 h-5" />
              Book Your Experience
            </Link>
            <a
              href="tel:+911234567890"
              className="inline-flex items-center gap-2 px-10 py-5 border-2 border-white/50 text-white font-semibold rounded-full
                         text-base hover:bg-white hover:text-ocean-700 transition-all duration-300 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>

          <p className="text-white/30 text-sm mt-8">
            Open 7 days · Delhi-NCR · Instant Confirmation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
