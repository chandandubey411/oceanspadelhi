import { motion } from 'framer-motion';
import PageBanner from '../components/common/PageBanner';
import BookingForm from '../components/forms/BookingForm';
import { CalendarCheck, Shield, Clock, Phone } from 'lucide-react';
import spaCandles from '../assets/images/spa_candles.png';

const assurances = [
  { Icon: CalendarCheck, text: 'Instant booking confirmation' },
  { Icon: Shield, text: 'Secure & private booking' },
  { Icon: Clock, text: 'Flexible rescheduling' },
  { Icon: Phone, text: '24hr cancellation policy' },
];

export default function BookAppointment() {
  return (
    <>
      <PageBanner
        title="Book Your Experience"
        subtitle="Reserve your Ocean Spa treatment in under 2 minutes"
        breadcrumbs={[{ name: 'Book Appointment' }]}
        image={spaCandles}
      />

      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Sidebar info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">
                  Your Appointment,<br />
                  <span className="gradient-ocean">Your Way</span>
                </h2>
                <div className="w-12 h-0.5 bg-gold-gradient mb-6" />
                <p className="text-charcoal/60 text-sm leading-relaxed mb-8">
                  Complete the form to submit your booking request. Our team will confirm your appointment within 2 hours and send all details to your email.
                </p>

                <div className="flex flex-col gap-3 mb-8">
                  {assurances.map(({ Icon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-ocean-50 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-ocean-600" />
                      </div>
                      <span className="text-sm text-charcoal/70 font-medium">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="p-5 bg-ocean-gradient rounded-2xl text-white">
                  <h3 className="font-serif text-lg font-bold mb-2">Prefer to Call?</h3>
                  <p className="text-white/70 text-sm mb-3">Our booking team is available 9 AM – 9 PM.</p>
                  <a
                    href="tel:+911234567890"
                    className="flex items-center gap-2 text-gold-400 font-bold text-sm hover:text-gold-300 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +91 12345 67890
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-luxury"
              >
                <h2 className="font-serif text-xl font-bold text-charcoal mb-1">Reserve Your Treatment</h2>
                <p className="text-charcoal/50 text-sm mb-6">All fields marked * are required.</p>
                <BookingForm dark={false} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
