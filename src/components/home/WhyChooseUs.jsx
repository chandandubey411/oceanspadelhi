import { motion } from 'framer-motion';
import { Shield, Leaf, Gem, Clock, Star, HeartHandshake, FlowerIcon, Award } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const reasons = [
  {
    Icon: Award,
    title: 'Award-Winning Excellence',
    desc: 'Recognised as Delhi\'s Best Luxury Spa 2024 by Wellness India Awards. Our commitment to quality is unwavering.',
    color: 'gold',
  },
  {
    Icon: Gem,
    title: 'Luxury Without Compromise',
    desc: 'From the products we use to the robes you wear — every element of your experience is curated with absolute precision.',
    color: 'ocean',
  },
  {
    Icon: Leaf,
    title: 'Certified Organic Products',
    desc: 'We use only certified organic, cruelty-free products from Elemis, Thalgo, and our proprietary Ayurvedic blends.',
    color: 'green',
  },
  {
    Icon: Shield,
    title: 'Hygiene & Safety First',
    desc: 'All treatment rooms are sterilised between every client. Linens are freshly laundered for every booking. Your safety is paramount.',
    color: 'ocean',
  },
  {
    Icon: HeartHandshake,
    title: 'Personalised to You',
    desc: 'Every session begins with a detailed consultation. We customise pressure, technique, and aromatherapy to your exact needs.',
    color: 'gold',
  },
  {
    Icon: FlowerIcon,
    title: 'Serene Environment',
    desc: 'Our spa is designed as a sanctuary of absolute calm — no phones, no rush, no noise. Just pure, uninterrupted healing.',
    color: 'ocean',
  },
  {
    Icon: Clock,
    title: 'Flexible Scheduling',
    desc: 'Open 7 days a week with evening appointments available. Book online, by phone, or walk in — we work around your life.',
    color: 'gold',
  },
  {
    Icon: Star,
    title: '4.9★ Client Satisfaction',
    desc: 'Over 5,000 five-star reviews from clients across Delhi-NCR. Our reputation is built on genuine transformation, not just treatments.',
    color: 'ocean',
  },
];

const colorMap = {
  gold: 'bg-gold-500/10 text-gold-600',
  ocean: 'bg-ocean-50 text-ocean-600',
  green: 'bg-green-50 text-green-600',
};

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-pad">
        <SectionTitle
          eyebrow="Why Choose Ocean Spa"
          title="The Difference You Can Feel"
          subtitle="What sets Ocean Spa apart is not just what we do, but how deeply we care about your experience — before, during, and long after your visit."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-luxury hover:-translate-y-2 transition-all duration-400 group"
            >
              <div className={`w-12 h-12 rounded-xl ${colorMap[color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-charcoal mb-2">{title}</h3>
              <p className="text-sm text-charcoal/55 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
