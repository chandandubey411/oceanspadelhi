import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Heart, Users } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import aboutTeam from '../../assets/images/about_team.png';
import spaInterior from '../../assets/images/spa_interior.png';

const highlights = [
  { Icon: Award, label: 'Award Winning', desc: 'Best Luxury Spa Delhi 2024' },
  { Icon: Heart, label: 'Holistic Care', desc: 'Mind, Body & Spirit' },
  { Icon: Users, label: 'Expert Team', desc: '15+ certified therapists' },
];

export default function AboutPreview() {
  return (
    <section className="section-pad bg-warm-white">
      <div className="container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 shadow-luxury">
              <img
                src={aboutTeam}
                alt="Ocean Spa expert team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/30 to-transparent" />
            </div>

            {/* Floating secondary image */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-8 -right-8 w-40 h-40 rounded-2xl overflow-hidden shadow-luxury border-4 border-white hidden md:block"
            >
              <img
                src={spaInterior}
                alt="Spa interior"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Years badge */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gold-gradient rounded-2xl flex flex-col items-center justify-center shadow-gold">
              <span className="font-serif text-2xl font-bold text-charcoal">10+</span>
              <span className="text-[9px] text-charcoal/70 tracking-wide uppercase font-semibold">Years</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SectionTitle
              eyebrow="About Ocean Spa"
              title={<>Delhi's Most Beloved <em className="not-italic gradient-ocean">Wellness Sanctuary</em></>}
              center={false}
            />
            <p className="text-charcoal/60 leading-relaxed mb-6">
              Founded in the heart of Delhi, Ocean Spa is a sanctuary where the healing power of the ocean meets the wisdom of ancient wellness traditions. Our philosophy is simple: every person deserves to experience profound restoration.
            </p>
            <p className="text-charcoal/60 leading-relaxed mb-8">
              Our team of internationally trained therapists brings together expertise from Thailand, Bali, Kerala, and Hawaii to create experiences that go far beyond massage — we offer complete transformation.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {highlights.map(({ Icon, label, desc }) => (
                <div key={label} className="text-center p-4 bg-ocean-50 rounded-xl">
                  <div className="w-10 h-10 bg-ocean-gradient rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-semibold text-charcoal text-xs">{label}</p>
                  <p className="text-charcoal/50 text-[10px] mt-0.5">{desc}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-ocean-gradient text-white font-semibold rounded-full
                         hover:shadow-ocean hover:-translate-y-1 transition-all duration-300"
            >
              Discover Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
