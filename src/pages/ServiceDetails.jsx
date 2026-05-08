import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, IndianRupee, Check, ArrowLeft, ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import CTASection from '../components/home/CTASection';

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  const currentIndex = services.findIndex(s => s.slug === slug);
  const prev = services[currentIndex - 1];
  const next = services[currentIndex + 1];

  if (!service) return <Navigate to="/services" replace />;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-charcoal/30" />
        </div>
        <div className="container-pad relative z-10 pt-32">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            All Treatments
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="tag-pill mb-4 inline-block">{service.category}</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
              {service.name}
            </h1>
            <p className="text-xl text-gold-400 font-medium">{service.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">About This Treatment</h2>
                <div className="w-12 h-0.5 bg-gold-gradient mb-6" />
                <p className="text-charcoal/70 leading-relaxed text-lg mb-6">{service.description}</p>
                <p className="text-charcoal/65 leading-relaxed mb-8">{service.details}</p>

                <h3 className="font-serif text-xl font-bold text-charcoal mb-4">Key Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.benefits.map(benefit => (
                    <div key={benefit} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                      <div className="w-7 h-7 bg-ocean-50 rounded-lg flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-ocean-600" />
                      </div>
                      <span className="text-charcoal/80 text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar booking card */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-luxury p-6 sticky top-28"
              >
                <div className="text-6xl mb-4 text-center">{service.icon}</div>
                <h3 className="font-serif text-xl font-bold text-charcoal text-center mb-1">{service.name}</h3>
                <p className="text-ocean-600 text-sm text-center mb-6">{service.tagline}</p>

                <div className="flex items-center justify-between py-4 border-t border-b border-sand-100 mb-6">
                  <div className="flex items-center gap-2 text-charcoal/60 text-sm">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </div>
                  <div className="flex items-center gap-1 text-charcoal font-bold text-xl">
                    <IndianRupee className="w-4 h-4" />
                    {service.price.toLocaleString('en-IN')}
                  </div>
                </div>

                <Link
                  to="/book-appointment"
                  className="block w-full py-4 bg-gold-gradient text-charcoal text-center font-bold rounded-xl
                             hover:shadow-gold hover:-translate-y-0.5 transition-all duration-300 mb-3"
                >
                  Book This Treatment
                </Link>
                <a
                  href="tel:+911234567890"
                  className="block w-full py-3 border-2 border-ocean-200 text-ocean-600 text-center font-semibold rounded-xl
                             hover:bg-ocean-50 transition-colors text-sm"
                >
                  Call to Book
                </a>

                <div className="mt-6 p-4 bg-ocean-50 rounded-xl">
                  <p className="text-xs text-ocean-700 font-semibold mb-1">Free Consultation</p>
                  <p className="text-xs text-ocean-600/70">Not sure which treatment to choose? Call us for a free 10-minute wellness consultation.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Prev / Next navigation */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-sand-200">
            {prev && (
              <Link
                to={`/services/${prev.slug}`}
                className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex-1"
              >
                <ArrowLeft className="w-5 h-5 text-ocean-600 shrink-0" />
                <div>
                  <p className="text-xs text-charcoal/40">Previous</p>
                  <p className="font-semibold text-charcoal text-sm">{prev.name}</p>
                </div>
              </Link>
            )}
            {next && (
              <Link
                to={`/services/${next.slug}`}
                className="flex items-center justify-end gap-3 px-6 py-4 bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex-1 ml-auto"
              >
                <div className="text-right">
                  <p className="text-xs text-charcoal/40">Next</p>
                  <p className="font-semibold text-charcoal text-sm">{next.name}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-ocean-600 shrink-0" />
              </Link>
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
