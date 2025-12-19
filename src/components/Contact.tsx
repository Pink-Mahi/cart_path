import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const LEADS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwYyUMXV7FKUYaa5uN-V5Q_H98q4lQnzt2MfeX3hE1wIDZ_xhXUbTkavSnNSbWgHiWY/exec';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organizationType: 'golf-course',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setSubmitting(true);
    setSubmitError(null);

    try {
      const payload = {
        ...formData,
        pageUrl: window.location.href,
        userAgent: navigator.userAgent
      };

      await fetch(LEADS_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(payload)
      });

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        organizationType: 'golf-course',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setSubmitError('Something went wrong. Please try again, or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience the future of cart path cleaning? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you manage a golf facility, country club, resort, or HOA community, we're here to answer your questions and
              provide a customized solution for your cart path and sidewalk cleaning needs.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 text-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <a href="tel:+19412070280" className="text-emerald-600 hover:text-emerald-700">
                    (941) 207-0280
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 text-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:info@cartpathcleaning.com" className="text-emerald-600 hover:text-emerald-700">
                    info@cartpathcleaning.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 text-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Service Area</h4>
                  <p className="text-gray-600">Serving golf facilities, country clubs, resorts, and HOAs nationwide</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
              <h4 className="font-semibold text-gray-900 mb-2">Patent Pending Technology</h4>
              <p className="text-gray-600 text-sm">
                Our innovative closed-loop surface cleaning system is patent pending, representing
                a groundbreaking advancement in mobile pressure washing technology.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="(941) 207-0280"
                />
              </div>

              <div>
                <label htmlFor="organizationType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Organization Type *
                </label>
                <select
                  id="organizationType"
                  required
                  value={formData.organizationType}
                  onChange={(e) => setFormData({...formData, organizationType: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="golf-course">Golf Facility</option>
                  <option value="country-club-resort">Country Club / Resort</option>
                  <option value="hoa">HOA / Community Association</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Tell us about your cart path or sidewalk cleaning needs..."
                />
              </div>

              {submitted ? (
                <div className="bg-emerald-100 text-emerald-800 px-6 py-4 rounded-lg text-center font-semibold">
                  Thank you! We'll be in touch soon.
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-5 h-5" />
                </button>
              )}

              {submitError ? (
                <div className="bg-red-50 text-red-800 px-6 py-4 rounded-lg text-center font-semibold">
                  {submitError}
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
