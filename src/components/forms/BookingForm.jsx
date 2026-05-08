import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { CalendarCheck, User, Mail, Phone, Clock, MessageSquare, Loader2, CheckCircle } from 'lucide-react';
import { services } from '../../data/services';
import { useState } from 'react';

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM',
];

export default function BookingForm({ dark = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          form_name: "Booking Form",
          ...data,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        reset();
      } else {
        console.error("Form submission error", result);
        alert("Something went wrong! Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong! Please try again later.");
    } finally {
      setLoading(false);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const inputClass = dark ? 'luxury-input-dark' : 'luxury-input';
  const labelClass = dark ? 'text-white/70' : 'text-charcoal/70';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-400/30 rounded-xl text-green-400"
        >
          <CheckCircle className="w-5 h-5 shrink-0" />
          <p className="text-sm">Your appointment request has been received! We'll confirm within 2 hours.</p>
        </motion.div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className={`block text-xs font-semibold mb-1.5 ${labelClass}`}>
            Full Name *
          </label>
          <div className="relative">
            <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${dark ? 'text-white/30' : 'text-charcoal/30'}`} />
            <input
              type="text"
              placeholder="Your full name"
              className={`${inputClass} pl-11`}
              {...register('fullName', { required: 'Name is required' })}
            />
          </div>
          {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className={`block text-xs font-semibold mb-1.5 ${labelClass}`}>Email Address *</label>
          <div className="relative">
            <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${dark ? 'text-white/30' : 'text-charcoal/30'}`} />
            <input
              type="email"
              placeholder="your@email.com"
              className={`${inputClass} pl-11`}
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
              })}
            />
          </div>
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className={`block text-xs font-semibold mb-1.5 ${labelClass}`}>Phone Number *</label>
          <div className="relative">
            <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${dark ? 'text-white/30' : 'text-charcoal/30'}`} />
            <input
              type="tel"
              placeholder="+91 9821077366"
              className={`${inputClass} pl-11`}
              {...register('phone', { required: 'Phone is required' })}
            />
          </div>
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        {/* Service */}
        <div>
          <label className={`block text-xs font-semibold mb-1.5 ${labelClass}`}>Select Treatment *</label>
          <select
            className={`${inputClass} appearance-none`}
            {...register('service', { required: 'Please select a treatment' })}
          >
            <option value="">Choose a treatment...</option>
            {services.map((s) => (
              <option key={s.id} value={s.slug}>{s.name}</option>
            ))}
          </select>
          {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
        </div>

        {/* Date */}
        <div>
          <label className={`block text-xs font-semibold mb-1.5 ${labelClass}`}>Preferred Date *</label>
          <input
            type="date"
            min={new Date().toISOString().split('T')[0]}
            className={inputClass}
            {...register('date', { required: 'Please choose a date' })}
          />
          {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date.message}</p>}
        </div>

        {/* Time */}
        <div>
          <label className={`block text-xs font-semibold mb-1.5 ${labelClass}`}>Preferred Time *</label>
          <div className="relative">
            <Clock className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${dark ? 'text-white/30' : 'text-charcoal/30'}`} />
            <select
              className={`${inputClass} pl-11 appearance-none`}
              {...register('time', { required: 'Please select a time' })}
            >
              <option value="">Select time slot...</option>
              {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time.message}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className={`block text-xs font-semibold mb-1.5 ${labelClass}`}>Special Requests</label>
        <div className="relative">
          <MessageSquare className={`absolute left-4 top-4 w-4 h-4 ${dark ? 'text-white/30' : 'text-charcoal/30'}`} />
          <textarea
            rows={4}
            placeholder="Any special requirements, health conditions, or preferences..."
            className={`${inputClass} pl-11 resize-none`}
            {...register('message')}
          />
        </div>
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 bg-gold-gradient text-charcoal font-bold rounded-xl text-base
                   hover:shadow-gold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <CalendarCheck className="w-5 h-5" />
            Confirm Appointment
          </>
        )}
      </motion.button>

      <p className="text-xs text-center text-charcoal/40">
        We'll send confirmation within 2 hours. Cancellation policy applies.
      </p>
    </form>
  );
}
