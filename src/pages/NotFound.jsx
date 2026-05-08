import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Waves } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a3352 0%, #0d6b8c 50%, #1a1a2e 100%)',
      }}
    >
      {/* Blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-ocean-300/10 rounded-full blur-3xl" />

      <div className="container-pad text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated logo */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 border border-white/20"
          >
            <Waves className="w-12 h-12 text-gold-400" />
          </motion.div>

          <p className="text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Ocean Spa Delhi</p>
          <h1 className="font-serif text-8xl md:text-9xl font-bold text-white/10 mb-0">404</h1>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white -mt-6 mb-4">
            Page Not Found
          </h2>
          <div className="w-16 h-0.5 bg-gold-gradient mx-auto mb-6" />
          <p className="text-white/60 text-lg max-w-md mx-auto mb-10 leading-relaxed">
            This page has drifted away like a wave. Let us guide you back to your wellness journey.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-charcoal font-bold rounded-full hover:shadow-gold hover:-translate-y-1 transition-all"
            >
              <Home className="w-5 h-5" />
              Return Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { name: 'Services', path: '/services' },
              { name: 'Gallery', path: '/gallery' },
              { name: 'Pricing', path: '/pricing' },
              { name: 'Contact', path: '/contact' },
            ].map(link => (
              <Link key={link.path} to={link.path} className="text-white/40 text-sm hover:text-white/80 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
