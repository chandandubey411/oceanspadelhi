import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Waves, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-charcoal/95 backdrop-blur-xl shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-pad flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-ocean-gradient rounded-xl flex items-center justify-center shadow-ocean group-hover:scale-110 transition-transform">
            <Waves className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <span className="block font-serif text-xl font-bold text-white tracking-wide">Ocean Spa</span>
            <span className="block text-[10px] text-gold-400 tracking-[0.2em] uppercase font-sans">Delhi</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 group ${
                  isActive ? 'text-gold-400' : 'text-white/80 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gold-gradient rounded-full transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919821077366"
            className="flex items-center gap-2 text-sm text-white/70 hover:text-gold-400 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+91 9821077366</span>
          </a>
          <Link
            to="/book-appointment"
            className="px-6 py-2.5 bg-gold-gradient text-charcoal text-sm font-bold rounded-full
                       hover:shadow-gold hover:-translate-y-0.5 transition-all duration-300 tracking-wide"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-white hover:text-gold-400 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-charcoal/98 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="container-pad py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                        isActive
                          ? 'text-gold-400 bg-white/5'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="tel:+919821077366"
                  className="flex items-center gap-2 px-4 py-3 text-white/70 hover:text-gold-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 9821077366
                </a>
                <Link
                  to="/book-appointment"
                  className="btn-gold text-center justify-center"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
