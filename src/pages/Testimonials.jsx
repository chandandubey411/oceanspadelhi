import PageBanner from '../components/common/PageBanner';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';
import SectionTitle from '../components/common/SectionTitle';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import aboutTeam from '../assets/images/about_team.png';

export default function Testimonials() {
  return (
    <>
      <PageBanner
        title="Client Stories"
        subtitle="Real experiences from our beloved guests"
        breadcrumbs={[{ name: 'Testimonials' }]}
        image={aboutTeam}
      />

      {/* Rating summary */}
      <section className="py-16 bg-cream">
        <div className="container-pad">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: 'Overall Rating', value: '4.9', out: '/5', stars: 5 },
              { label: 'Cleanliness', value: '5.0', out: '/5', stars: 5 },
              { label: 'Therapist Skill', value: '4.9', out: '/5', stars: 5 },
              { label: 'Value for Money', value: '4.8', out: '/5', stars: 5 },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg"
              >
                <p className="font-serif text-4xl font-bold text-charcoal">
                  {item.value}<span className="text-lg text-charcoal/40">{item.out}</span>
                </p>
                <div className="flex justify-center gap-0.5 my-2">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <p className="text-sm text-charcoal/55 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <SectionTitle
            eyebrow="5,000+ Reviews"
            title="What Our Guests Are Saying"
            subtitle="Every review represents a real person whose day, week, or life was touched by the Ocean Spa experience."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-luxury transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <p className="text-charcoal/70 text-sm leading-relaxed italic mb-4">"{t.review}"</p>
                <span className="inline-block text-xs px-3 py-1 bg-ocean-50 text-ocean-700 rounded-full mb-4">
                  {t.treatment}
                </span>
                <div className="flex items-center gap-3 pt-4 border-t border-sand-100">
                  <div className="w-10 h-10 rounded-full bg-ocean-gradient flex items-center justify-center text-white text-xs font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm">{t.name}</p>
                    <p className="text-charcoal/40 text-xs">{t.location} · {t.date}</p>
                  </div>
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
