import { motion } from 'framer-motion';

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
  className = '',
}) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase mb-3
                     text-gold-500 font-sans"
        >
          <span className="w-6 h-px bg-gold-500" />
          {eyebrow}
          <span className="w-6 h-px bg-gold-500" />
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-charcoal'
        }`}
      >
        {title}
      </motion.h2>
      {center && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="gold-divider"
        />
      )}
      {!center && (
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="gold-divider-left"
        />
      )}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-base md:text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${
            light ? 'text-white/70' : 'text-charcoal/60'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
