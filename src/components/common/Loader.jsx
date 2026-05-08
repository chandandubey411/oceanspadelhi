import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Waves } from 'lucide-react';

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #0a3352 0%, #0d6b8c 60%, #1a4a6b 100%)',
          }}
        >
          {/* Animated waves */}
          <div className="relative mb-8">
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 w-24 h-24 rounded-full bg-white/10 blur-xl"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="w-20 h-20 rounded-full border-2 border-gold-400/40 border-t-gold-400 flex items-center justify-center"
            >
              <Waves className="w-8 h-8 text-gold-400" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-serif text-3xl font-bold text-white mb-2 tracking-wide">Ocean Spa</h1>
            <p className="text-gold-400 text-xs tracking-[0.3em] uppercase font-sans">
              Relax Your Body, Calm Your Mind
            </p>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gold-gradient"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
