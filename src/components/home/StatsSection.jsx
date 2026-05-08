import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: 5000, suffix: '+', label: 'Happy Clients', desc: 'Across Delhi-NCR' },
  { value: 15, suffix: '+', label: 'Expert Therapists', desc: 'Internationally Certified' },
  { value: 8, suffix: '', label: 'Signature Treatments', desc: 'Curated for You' },
  { value: 10, suffix: '+', label: 'Years of Excellence', desc: 'Trusted in Delhi' },
  { value: 99, suffix: '%', label: 'Client Satisfaction', desc: 'Would Return' },
  { value: 4.9, suffix: '★', label: 'Average Rating', desc: 'Verified Reviews' },
];

function Counter({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const isDecimal = target % 1 !== 0;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
            if (current >= target) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className="font-serif text-4xl md:text-5xl font-bold text-white">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a3352 0%, #0d6b8c 50%, #0a3352 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />

      <div className="container-pad relative z-10">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold-400 mb-3">
            <span className="inline-flex items-center gap-2">
              <span className="w-6 h-px bg-gold-400" />
              Ocean Spa by Numbers
              <span className="w-6 h-px bg-gold-400" />
            </span>
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            Excellence, Measured in<br />
            <span className="gold-text">Moments of Transformation</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10
                         hover:bg-white/10 transition-all duration-300"
            >
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-white/80 font-semibold text-sm mt-1">{stat.label}</p>
              <p className="text-white/40 text-xs mt-0.5">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
