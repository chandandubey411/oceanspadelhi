import { motion } from 'framer-motion';
import PageBanner from '../components/common/PageBanner';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/forms/ContactForm';
import { MapPin, Phone, Mail, Clock, Globe, MessageCircle } from 'lucide-react';
import spaReception from '../assets/images/spa_reception.png';

const contactItems = [
  {
    Icon: MapPin,
    title: 'Our Location',
    lines: ['2nd floor, G-15 Hudson Lane', 'Vijay Nagar, Delhi, 110033'],
    link: 'https://goo.gl/maps/vijaynagar',
    linkText: 'View on Map',
  },
  {
    Icon: Phone,
    title: 'Phone & WhatsApp',
    lines: ['+91 9821077366'],
    link: 'tel:+919821077366',
    linkText: 'Call Now',
  },
  {
    Icon: Mail,
    title: 'Email Us',
    lines: ['hello@oceanspa.in', 'bookings@oceanspa.in'],
    link: 'mailto:hello@oceanspa.in',
    linkText: 'Send Email',
  },
  {
    Icon: Clock,
    title: 'Opening Hours',
    lines: ['Mon–Sun: 9:00 AM – 9:00 PM'],
  },
];

export default function Contact() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="We'd love to hear from you — reach out anytime"
        breadcrumbs={[{ name: 'Contact' }]}
        image={spaReception}
      />

      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <SectionTitle
                eyebrow="Get In Touch"
                title="We're Here to Help"
                subtitle="Questions about treatments, bookings, or anything else — our team is ready to assist."
                center={false}
                className="mb-10"
              />

              <div className="flex flex-col gap-4 mb-10">
                {contactItems.map(({ Icon, title, lines, link, linkText }) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-11 h-11 bg-ocean-gradient rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal text-sm mb-1">{title}</h4>
                      {lines.map((l, i) => <p key={i} className="text-charcoal/60 text-sm">{l}</p>)}
                      {link && (
                        <a href={link} className="text-ocean-600 text-xs font-semibold hover:text-ocean-700 transition-colors mt-1 inline-block">
                          {linkText} →
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social */}
              <div className="flex gap-3">
                {[
                  { Icon: MessageCircle, href: 'https://instagram.com', color: 'bg-pink-500', label: 'instagram' },
                  { Icon: Globe, href: 'https://facebook.com', color: 'bg-blue-600', label: 'facebook' },
                ].map(({ Icon, href, color, label }) => (
                  <a
                    key={label}
                    href={href}
                    className={`${color} w-10 h-10 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-luxury">
                <h2 className="font-serif text-2xl font-bold text-charcoal mb-2">Send Us a Message</h2>
                <p className="text-charcoal/55 text-sm mb-6">We'll respond within 24 hours.</p>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="mt-16 rounded-2xl overflow-hidden shadow-luxury h-64 bg-ocean-100 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-ocean-500 mx-auto mb-2" />
              <p className="text-charcoal/60 font-medium text-sm">2nd floor, G-15 Hudson Lane Cafe and Bar University Road, 736, Thekedaar Surjeet Marg, near Cafeteria Cafe, Vijay Nagar, Delhi, 110033</p>
              <a
                href="https://goo.gl/maps/vijaynagar"
                target="_blank"
                rel="noreferrer"
                className="text-ocean-600 text-sm font-semibold hover:text-ocean-700 mt-1 inline-block"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
