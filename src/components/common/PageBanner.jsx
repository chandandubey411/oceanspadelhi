import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function PageBanner({ title, subtitle, breadcrumbs = [], image }) {
  return (
    <section
      className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a3352 0%, #0d6b8c 50%, #1a4a6b 100%)',
      }}
    >
      {/* Background image */}
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-ocean-900/60 to-charcoal/80" />
        </div>
      )}

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-ocean-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl" />

      <div className="container-pad relative z-10 pt-32">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
          <Link to="/" className="flex items-center gap-1 hover:text-gold-400 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-gold-400 transition-colors">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-white/80">{crumb.name}</span>
              )}
            </span>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-gold-400 mb-3">
            <span className="w-6 h-px bg-gold-400" />
            Ocean Spa Delhi
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-white/60 max-w-xl">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
