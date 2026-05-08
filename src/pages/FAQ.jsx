import PageBanner from '../components/common/PageBanner';
import FAQSection from '../components/home/FAQSection';
import CTASection from '../components/home/CTASection';
import SectionTitle from '../components/common/SectionTitle';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import spaInterior from '../assets/images/spa_interior.png';

export default function FAQ() {
  return (
    <>
      <PageBanner
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before your visit"
        breadcrumbs={[{ name: 'FAQ' }]}
        image={spaInterior}
      />

      <FAQSection limit={10} />

      <section className="py-16 bg-warm-white">
        <div className="container-pad text-center">
          <SectionTitle
            eyebrow="Still Have Questions?"
            title="We're Happy to Help"
            subtitle="Can't find the answer you're looking for? Contact our team directly."
            className="mb-8"
          />
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary">Contact Us</Link>
            <a href="tel:+919821077366" className="btn-outline-ocean flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call +91 9821077366
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
