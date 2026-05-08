import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '../../data/testimonials';
import { Link } from 'react-router-dom';
import { MessageSquareQuote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #0d2945 60%, #1a1a2e 100%)',
      }}
    >
      {/* Decorative */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-ocean-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gold-500/8 rounded-full blur-3xl" />

      <div className="container-pad relative z-10">
        <SectionTitle
          eyebrow="Client Stories"
          title={<>What Our Guests <span className="gold-text">Say</span></>}
          subtitle="Real experiences from real people. Discover why over 5,000 clients choose Ocean Spa as their wellness home."
          light
          className="mb-14"
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={t.id} className="h-auto flex">
              <TestimonialCard testimonial={t} index={i} />
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/70
                       rounded-full text-sm hover:border-gold-400/60 hover:text-gold-400 transition-all duration-300"
          >
            <MessageSquareQuote className="w-4 h-4" />
            Read All Reviews
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
