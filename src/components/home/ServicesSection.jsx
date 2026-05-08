import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from '../ui/ServiceCard';
import { services } from '../../data/services';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-pad">
        <SectionTitle
          eyebrow="Our Treatments"
          title={<>Signature <em className="not-italic gradient-ocean">Healing</em> Experiences</>}
          subtitle="From ancient Eastern traditions to modern wellness science — our curated menu of treatments restores harmony to body, mind, and spirit."
          className="mb-14"
        />

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {services.map((service, i) => (
            <SwiperSlide key={service.id}>
              <ServiceCard service={service} index={i} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-6">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ocean-600 hover:text-ocean-700 transition-colors group"
          >
            View All Treatments
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
