import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, X, IndianRupee, Star } from 'lucide-react';

const colorStyles = {
  ocean: {
    bg: 'bg-ocean-gradient',
    badge: 'bg-ocean-100 text-ocean-700',
    button: 'bg-ocean-500 hover:bg-ocean-600 text-white',
    border: 'border-ocean-200',
    check: 'text-ocean-500',
  },
  gold: {
    bg: 'bg-gold-gradient',
    badge: 'bg-gold-100 text-gold-700',
    button: 'bg-gold-gradient text-charcoal hover:shadow-gold',
    border: 'border-gold-200',
    check: 'text-gold-600',
  },
  charcoal: {
    bg: 'bg-charcoal',
    badge: 'bg-white/10 text-white',
    button: 'bg-charcoal text-white hover:bg-charcoal/80',
    border: 'border-charcoal/20',
    check: 'text-green-400',
  },
};

export default function PricingCard({ plan, index = 0 }) {
  const styles = colorStyles[plan.color] || colorStyles.ocean;
  const isGold = plan.color === 'gold';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative rounded-2xl overflow-hidden border ${styles.border} ${
        plan.popular ? 'scale-105 shadow-2xl' : 'shadow-luxury'
      } bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-gold-gradient text-charcoal text-xs font-bold rounded-full">
          <Star className="w-3 h-3 fill-charcoal" />
          Most Popular
        </div>
      )}

      {/* Header */}
      <div className={`${isGold ? 'bg-gold-gradient' : plan.color === 'charcoal' ? 'bg-charcoal' : 'bg-ocean-gradient'} p-8`}>
        <p className={`text-xs font-bold tracking-widest uppercase mb-2 ${isGold ? 'text-charcoal/70' : 'text-white/60'}`}>
          {plan.subtitle}
        </p>
        <h3 className={`font-serif text-2xl font-bold mb-4 ${isGold ? 'text-charcoal' : 'text-white'}`}>
          {plan.name}
        </h3>
        <div className={`flex items-baseline gap-1 ${isGold ? 'text-charcoal' : 'text-white'}`}>
          <IndianRupee className="w-5 h-5 mb-1" />
          <span className="font-serif text-5xl font-bold">{plan.price.toLocaleString('en-IN')}</span>
        </div>
        <p className={`text-sm mt-1 ${isGold ? 'text-charcoal/60' : 'text-white/60'}`}>{plan.duration}</p>
      </div>

      {/* Features */}
      <div className="p-6">
        <ul className="flex flex-col gap-3 mb-8">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-charcoal/80">
              <Check className={`w-4 h-4 mt-0.5 shrink-0 ${styles.check}`} />
              {feature}
            </li>
          ))}
          {plan.notIncluded?.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-charcoal/30 line-through">
              <X className="w-4 h-4 mt-0.5 shrink-0 text-charcoal/30" />
              {feature}
            </li>
          ))}
        </ul>

        <Link
          to="/book-appointment"
          className={`block w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 ${styles.button}`}
        >
          Book This Package
        </Link>
      </div>
    </motion.div>
  );
}
