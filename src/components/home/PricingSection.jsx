import SectionTitle from '../common/SectionTitle';
import PricingCard from '../ui/PricingCard';
import { pricingPlans } from '../../data/pricing';

export default function PricingSection() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-pad">
        <SectionTitle
          eyebrow="Packages & Pricing"
          title="Investment in Your Wellbeing"
          subtitle="Choose the experience that speaks to you. Every package is thoughtfully designed to deliver lasting transformation."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        <p className="text-center text-sm text-charcoal/40 mt-10">
          * All prices in INR. Prices may vary for add-ons. GST applicable. Custom packages available on request.
        </p>
      </div>
    </section>
  );
}
