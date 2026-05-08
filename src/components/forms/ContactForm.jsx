import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MessageSquare, Loader2, CheckCircle, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    console.log('Contact:', data);
    setLoading(false);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-400/30 rounded-xl text-green-600"
        >
          <CheckCircle className="w-5 h-5 shrink-0" />
          <p className="text-sm">Message sent! We'll get back to you within 24 hours.</p>
        </motion.div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-charcoal/70 mb-1.5">Full Name *</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30" />
            <input
              placeholder="Your name"
              className="luxury-input pl-11"
              {...register('name', { required: 'Name is required' })}
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-charcoal/70 mb-1.5">Email *</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30" />
            <input
              type="email"
              placeholder="your@email.com"
              className="luxury-input pl-11"
              {...register('email', { required: 'Email is required' })}
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-charcoal/70 mb-1.5">Phone</label>
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30" />
          <input
            type="tel"
            placeholder="+91 9821077366"
            className="luxury-input pl-11"
            {...register('phone')}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-charcoal/70 mb-1.5">Subject *</label>
        <select
          className="luxury-input appearance-none"
          {...register('subject', { required: 'Please select a subject' })}
        >
          <option value="">Select subject...</option>
          <option value="booking">Booking Inquiry</option>
          <option value="services">Services Information</option>
          <option value="pricing">Pricing & Packages</option>
          <option value="corporate">Corporate Wellness</option>
          <option value="gift">Gift Cards</option>
          <option value="other">Other</option>
        </select>
        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold text-charcoal/70 mb-1.5">Message *</label>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-charcoal/30" />
          <textarea
            rows={5}
            placeholder="Tell us how we can help..."
            className="luxury-input pl-11 resize-none"
            {...register('message', { required: 'Message is required' })}
          />
        </div>
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 bg-ocean-gradient text-white font-bold rounded-xl text-base
                   hover:shadow-ocean transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {loading ? (
          <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
        ) : (
          <><Send className="w-5 h-5" /> Send Message</>
        )}
      </motion.button>
    </form>
  );
}
