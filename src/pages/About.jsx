import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Heart, Users, Leaf, Globe, Star } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import SectionTitle from '../components/common/SectionTitle';
import CTASection from '../components/home/CTASection';
import aboutTeam from '../assets/images/about_team.png';
import spaInterior from '../assets/images/spa_interior.png';
import spaCandles from '../assets/images/spa_candles.png';

const values = [
  { Icon: Heart, title: 'Compassionate Care', desc: 'Every client is treated as a guest in our home. We listen, adapt, and create experiences tailored uniquely to you.' },
  { Icon: Leaf, title: 'Natural & Organic', desc: 'Only certified organic, cruelty-free products touch your skin. We believe in the power of nature\'s ingredients.' },
  { Icon: Star, title: 'Excellence Always', desc: 'Our standards never slip. Every treatment, every day, every client receives the full Ocean Spa experience.' },
  { Icon: Globe, title: 'Global Wisdom', desc: 'We draw from healing traditions across Thailand, Bali, Hawaii, India, and Japan to offer the world\'s best therapies.' },
  { Icon: Award, title: 'Certified Expertise', desc: 'Our therapists hold international certifications and undergo 3-month in-house training before serving clients.' },
  { Icon: Users, title: 'Community Impact', desc: 'We support local wellness initiatives and employ therapists from across India, creating careers in healing arts.' },
];

const team = [
  { name: 'Priyanka Malhotra', role: 'Wellness Director', exp: '12 years', spec: 'Holistic Wellness' },
  { name: 'Arjun Krishnamurthy', role: 'Lead Therapist', exp: '10 years', spec: 'Thai & Shiatsu' },
  { name: 'Sunita Patel', role: 'Senior Aromatherapist', exp: '8 years', spec: 'Aromatherapy & Ayurveda' },
  { name: 'Meena Kapoor', role: 'Wellness Consultant', exp: '15 years', spec: 'Holistic Healing' },
];

export default function About() {
  return (
    <>
      <PageBanner
        title="About Ocean Spa"
        subtitle="A sanctuary of healing, a home of transformation"
        breadcrumbs={[{ name: 'About Us' }]}
        image={aboutTeam}
      />

      {/* Our Story */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle
                eyebrow="Our Story"
                title="Born from a Passion for Healing"
                center={false}
              />
              <div className="space-y-5 text-charcoal/65 leading-relaxed">
                <p>
                  Ocean Spa was founded in 2014 with a single belief: that every person in Delhi deserves access to world-class wellness experiences. As the best spa in Vijay Nagar Delhi, we offer a sanctuary where luxury meets holistic healing. Our founder, Priyanka Malhotra, returned from years of studying healing arts across Asia and Polynesia with a vision to create something truly extraordinary.
                </p>
                <p>
                  What began as a small therapy studio in Vijay Nagar has blossomed into Delhi's most celebrated luxury wellness sanctuary. We have grown not by compromising our values, but by deepening our commitment to them.
                </p>
                <p>
                  The name "Ocean Spa" reflects our philosophy. The ocean is both powerful and deeply calming. It heals, it cleanses, it restores. Like the ocean, we meet every client where they are and gently carry them to a place of profound peace.
                </p>
              </div>
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-ocean-gradient text-white font-semibold rounded-full hover:shadow-ocean hover:-translate-y-1 transition-all duration-300"
              >
                Experience It Yourself
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative rounded-2xl overflow-hidden h-64 shadow-luxury">
                <img src={spaInterior} alt="Spa interior" className="w-full h-full object-cover" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-64 shadow-luxury mt-8">
                <img src={spaCandles} alt="Spa candles" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-2 p-6 bg-ocean-gradient rounded-2xl text-center">
                <p className="font-serif text-3xl font-bold text-white">10+ Years</p>
                <p className="text-white/70 text-sm mt-1">of excellence in Vijay Nagar wellness</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-warm-white">
        <div className="container-pad">
          <SectionTitle
            eyebrow="Our Values"
            title="What We Stand For"
            subtitle="Our values are not just words. They guide every decision, every treatment, every interaction at Ocean Spa."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-luxury hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-ocean-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-ocean-600" />
                </div>
                <h3 className="font-serif text-lg font-bold text-charcoal mb-2">{title}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <SectionTitle
            eyebrow="Our Team"
            title="Meet Your Healers"
            subtitle="Skilled, compassionate, and deeply passionate — our therapists are the heart of Ocean Spa."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-luxury hover:-translate-y-2 transition-all duration-400 text-center"
              >
                <div className="h-48 bg-ocean-gradient flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center">
                    <span className="font-serif text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-base font-bold text-charcoal">{member.name}</h3>
                  <p className="text-ocean-600 text-sm font-medium mt-0.5">{member.role}</p>
                  <p className="text-charcoal/50 text-xs mt-1">{member.exp} experience</p>
                  <span className="inline-block mt-3 px-3 py-1 bg-ocean-50 text-ocean-700 text-xs rounded-full">
                    {member.spec}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
