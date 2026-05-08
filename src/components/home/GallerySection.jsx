import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems, galleryCategories } from '../../data/gallery';
import SectionTitle from '../common/SectionTitle';
import { Link } from 'react-router-dom';
import { Images, ZoomIn } from 'lucide-react';

export default function GallerySection({ limit = 8 }) {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'All'
    ? galleryItems.slice(0, limit)
    : galleryItems.filter(i => i.category === active).slice(0, limit);

  return (
    <section className="section-pad bg-warm-white">
      <div className="container-pad">
        <SectionTitle
          eyebrow="Our Gallery"
          title="A Glimpse Into Your Sanctuary"
          subtitle="Step inside Ocean Spa. Every corner is designed to transport you to a world of serenity and beauty."
          className="mb-10"
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-ocean-gradient text-white shadow-ocean'
                  : 'bg-white text-charcoal/60 hover:text-ocean-600 border border-sand-200 hover:border-ocean-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative group cursor-pointer break-inside-avoid rounded-xl overflow-hidden shadow-lg"
                onClick={() => setLightbox(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    item.size === 'large' ? 'h-72' : item.size === 'medium' ? 'h-48' : 'h-36'
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                      <p className="text-white/60 text-xs">{item.category}</p>
                    </div>
                    <ZoomIn className="w-5 h-5 text-white/80" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-10">
          <Link to="/gallery" className="inline-flex items-center gap-2 btn-outline-ocean">
            <Images className="w-4 h-4" />
            View Full Gallery
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.image} alt={lightbox.title} className="w-full h-auto max-h-[85vh] object-contain" />
              <div className="bg-charcoal p-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">{lightbox.title}</p>
                  <p className="text-white/40 text-xs">{lightbox.category}</p>
                </div>
                <button onClick={() => setLightbox(null)} className="text-white/50 hover:text-white transition-colors text-sm">
                  Close ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
