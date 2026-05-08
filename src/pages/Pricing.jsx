import PageBanner from '../components/common/PageBanner';
import PricingSection from '../components/home/PricingSection';
import CTASection from '../components/home/CTASection';
import SectionTitle from '../components/common/SectionTitle';
import { motion } from 'framer-motion';
import spaCandles from '../assets/images/spa_candles.png';
import { Check } from 'lucide-react';

const addOns = [
  { name: 'Hot Stone Enhancement', price: 800, desc: 'Add heated volcanic stones to any massage treatment' },
  { name: 'Aromatherapy Blend', price: 400, desc: 'Custom essential oil blend selected for your needs' },
  { name: 'Gold Facial', price: 1200, desc: 'Luxurious 24K gold facial treatment' },
  { name: 'Champagne Service', price: 600, desc: 'Chilled champagne or fresh juice welcome' },
  { name: 'Floral Foot Bath', price: 350, desc: 'Rose petal and salt foot bath before treatment' },
  { name: 'Extended Session +30min', price: 750, desc: 'Add 30 minutes to any standard treatment' },
];

export default function Pricing() {
  return (
    <>
      <PageBanner
        title="Packages & Pricing"
        subtitle="Transparent, inclusive pricing. No hidden charges, ever."
        breadcrumbs={[{ name: 'Pricing' }]}
        image={spaCandles}
      />

      <PricingSection />

      {/* Add-ons */}
      <section className="section-pad bg-warm-white">
        <div className="container-pad">
          <SectionTitle
            eyebrow="Enhance Your Experience"
            title="Luxury Add-Ons"
            subtitle="Personalise your treatment with our premium add-on options. Available with any booking."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon, i) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 flex gap-4"
              >
                <div className="w-10 h-10 bg-gold-500/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-charcoal text-sm">{addon.name}</h3>
                    <span className="text-ocean-600 font-bold text-sm whitespace-nowrap">+₹{addon.price}</span>
                  </div>
                  <p className="text-charcoal/55 text-xs mt-1">{addon.desc}</p>
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
