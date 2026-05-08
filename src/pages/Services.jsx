import { useState } from 'react';
import PageBanner from '../components/common/PageBanner';
import SectionTitle from '../components/common/SectionTitle';
import ServiceCard from '../components/ui/ServiceCard';
import CTASection from '../components/home/CTASection';
import { services } from '../data/services';
import spaInterior from '../assets/images/spa_interior.png';

const categories = ['All', ...new Set(services.map(s => s.category))];

export default function Services() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? services : services.filter(s => s.category === active);

  return (
    <>
      <PageBanner
        title="Our Treatments"
        subtitle="Eight transformative healing experiences curated for your complete wellbeing"
        breadcrumbs={[{ name: 'Services' }]}
        image={spaInterior}
      />

      <section className="section-pad bg-cream">
        <div className="container-pad">
          <SectionTitle
            eyebrow="All Treatments"
            title="Find Your Perfect Therapy"
            subtitle="From ancient traditional techniques to modern wellness science — every treatment is a journey, not just a session."
            className="mb-10"
          />

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? 'bg-ocean-gradient text-white shadow-ocean'
                    : 'bg-white text-charcoal/60 hover:text-ocean-600 border border-sand-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
