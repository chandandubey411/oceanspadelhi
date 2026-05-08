import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/faqs';
import SectionTitle from '../common/SectionTitle';

export default function FAQSection({ limit = 6 }) {
  const [open, setOpen] = useState(null);
  const displayed = faqs.slice(0, limit);

  return (
    <section className="section-pad bg-cream">
      <div className="container-pad">
        <SectionTitle
          eyebrow="FAQ"
          title="Everything You Need to Know"
          subtitle="Have questions? We have answers. Explore our most frequently asked questions below."
          className="mb-14"
        />

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {displayed.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === faq.id ? 'border-ocean-300 shadow-ocean' : 'border-sand-100 shadow-sm'
              }`}
            >
              <button
                id={`faq-${faq.id}`}
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
                aria-expanded={open === faq.id}
              >
                <span className={`font-semibold text-sm md:text-base transition-colors ${
                  open === faq.id ? 'text-ocean-600' : 'text-charcoal group-hover:text-ocean-500'
                }`}>
                  {faq.question}
                </span>
                <span className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                  open === faq.id ? 'bg-ocean-500 rotate-180' : 'bg-sand-100'
                }`}>
                  <ChevronDown className={`w-4 h-4 transition-colors ${open === faq.id ? 'text-white' : 'text-charcoal/60'}`} />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p className="px-6 pb-5 text-sm text-charcoal/65 leading-relaxed border-t border-sand-100 pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
