import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Waves, MapPin, Phone, Mail, Clock, Globe, MessageCircle, Share2, Play,
  ArrowRight, Heart,
} from 'lucide-react';

const footerLinks = {
  'Quick Links': [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Pricing', path: '/pricing' },
  ],
  Treatments: [
    { name: 'Swedish Massage', path: '/services/swedish-massage' },
    { name: 'Hot Stone Therapy', path: '/services/hot-stone-therapy' },
    { name: 'Thai Massage', path: '/services/thai-massage' },
    { name: 'Aromatherapy', path: '/services/aromatherapy' },
    { name: 'Reflexology', path: '/services/reflexology' },
  ],
};

const socials = [
  { Icon: MessageCircle, href: '#', label: 'Instagram' },
  { Icon: Globe, href: '#', label: 'Facebook' },
  { Icon: Share2, href: '#', label: 'Twitter/X' },
  { Icon: Play, href: '#', label: 'YouTube' },
];

const hours = [
  { day: 'Monday – Sunday', time: '9:00 AM – 9:00 PM' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Main footer */}
      <div className="container-pad py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-ocean-gradient rounded-xl flex items-center justify-center shadow-ocean">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="block font-serif text-xl font-bold text-white">Ocean Spa</span>
                <span className="block text-[10px] text-gold-400 tracking-[0.2em] uppercase">Delhi</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Best spa in Vijay Nagar Delhi offering Luxury Spa Services. Experience professional massage therapy including Deep Tissue, Thai Massage, and Body Spa Treatments from certified massage therapists.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-ocean-500 flex items-center justify-center
                             transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-serif text-lg font-semibold text-white mb-5">{title}</h4>
              <div className="w-8 h-0.5 bg-gold-gradient mb-5" />
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-2 text-sm text-white/60 hover:text-gold-400 transition-colors group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-5">Get In Touch</h4>
            <div className="w-8 h-0.5 bg-gold-gradient mb-5" />
            <ul className="flex flex-col gap-4 mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span className="text-sm text-white/60">
                  2nd floor, G-15 Hudson Lane Cafe and Bar University Road,<br />736, Thekedaar Surjeet Marg, near Cafeteria Cafe,<br />Vijay Nagar, Delhi, 110033
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:+919821077366" className="text-sm text-white/60 hover:text-gold-400 transition-colors">
                  +91 9821077366
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="mailto:hello@oceanspa.in" className="text-sm text-white/60 hover:text-gold-400 transition-colors">
                  hello@oceanspa.in
                </a>
              </li>
            </ul>

            <h5 className="flex items-center gap-2 text-sm font-semibold text-white/80 mb-3">
              <Clock className="w-4 h-4 text-gold-400" />
              Opening Hours
            </h5>
            <ul className="flex flex-col gap-1.5">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between text-xs text-white/50 gap-2">
                  <span>{h.day}</span>
                  <span className="text-white/70">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <div className="max-w-lg mx-auto text-center mb-6">
            <h4 className="font-serif text-2xl font-semibold text-white mb-2">
              Join Our Wellness Circle
            </h4>
            <p className="text-sm text-white/50">
              Subscribe for exclusive offers, wellness tips, and priority booking access.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 bg-white/10 border border-white/20 rounded-full text-white text-sm
                         placeholder-white/40 focus:outline-none focus:border-gold-400 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gold-gradient text-charcoal text-sm font-bold rounded-full
                         hover:shadow-gold hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="container-pad flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© 2025 Ocean Spa Delhi. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> for wellness in Delhi
          </p>
          <div className="flex gap-4">
            <Link to="/faq" className="hover:text-white/80 transition-colors">Privacy</Link>
            <Link to="/faq" className="hover:text-white/80 transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-white/80 transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
