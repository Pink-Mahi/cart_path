import { Phone, Mail, MapPin, Send, Calendar } from 'lucide-react';
import { FormEvent, useState } from 'react';
import SchedulingForm, { ScheduleData } from './SchedulingForm';
import CallBackForm, { CallBackData } from './CallBackForm';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const CHAT_API_URL = import.meta.env.VITE_CHAT_API_URL || 'ws://localhost:3001';
  const CHAT_API_HTTP = CHAT_API_URL.replace('ws://', 'http://').replace('wss://', 'https://');

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

  const [showScheduling, setShowScheduling] = useState(false);
  const [showCallBack, setShowCallBack] = useState(false);
  const [scheduleSubmitted, setScheduleSubmitted] = useState(false);
  const [callSubmitted, setCallSubmitted] = useState(false);
  const [scheduleSubmitting, setScheduleSubmitting] = useState(false);
  const [callSubmitting, setCallSubmitting] = useState(false);
  const [scheduleError, setScheduleError] = useState<string | null>(null);
  const [callError, setCallError] = useState<string | null>(null);

  const openSchedule = () => {
    if (!formData.name || !formData.email) {
      alert('Please enter your name and email first.');
      return;
    }
    setShowScheduling(true);
  };

  const openCallBack = () => {
    if (!formData.name || !formData.email) {
      alert('Please enter your name and email first.');
      return;
    }
    setShowCallBack(true);
  };

  const handleScheduleVisit = async (scheduleData: ScheduleData) => {
    setScheduleSubmitting(true);
    setScheduleError(null);
    try {
      const response = await fetch(`${CHAT_API_HTTP}/api/public/scheduled-visits`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(scheduleData)
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to schedule visit');
      }

      setShowScheduling(false);
      setScheduleSubmitted(true);
      setTimeout(() => setScheduleSubmitted(false), 5000);
    } catch (e) {
      setScheduleError(e instanceof Error ? e.message : 'Failed to schedule visit');
    } finally {
      setScheduleSubmitting(false);
    }
  };

  const handleRequestCall = async (data: CallBackData) => {
    setCallSubmitting(true);
    setCallError(null);
    try {
      const response = await fetch(`${CHAT_API_HTTP}/api/public/call-requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          visitorName: data.visitorName,
          visitorEmail: formData.email,
          visitorPhone: data.visitorPhone,
          bestTime: data.bestTime,
          notes: data.notes
        })
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to request a call');
      }

      setShowCallBack(false);
      setCallSubmitted(true);
      setTimeout(() => setCallSubmitted(false), 5000);
    } catch (e) {
      setCallError(e instanceof Error ? e.message : 'Failed to request a call');
    } finally {
      setCallSubmitting(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(`${CHAT_API_HTTP}/api/public/contact-submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          visitorName: formData.name,
          visitorEmail: formData.email,
          visitorPhone: formData.phone,
          organizationType: formData.organizationType,
          message: formData.message
        })
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to submit contact form');
      }

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
            {t('contact.title') as string}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle') as string}
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
                  <h4 className="font-semibold text-gray-900 mb-1">{t('contact.info.phone') as string}</h4>
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
                  <h4 className="font-semibold text-gray-900 mb-1">{t('contact.info.email') as string}</h4>
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
                  <h4 className="font-semibold text-gray-900 mb-1">{t('contact.info.location') as string}</h4>
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
            <div className="mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={openSchedule}
                  disabled={scheduleSubmitting || callSubmitting}
                  className="w-full bg-white border border-emerald-200 text-emerald-700 px-4 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-all shadow-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>{scheduleSubmitting ? (t('contact.form.submitting') as string) : (t('contact.form.scheduleVisit') as string)}</span>
                </button>
                <button
                  type="button"
                  onClick={openCallBack}
                  disabled={scheduleSubmitting || callSubmitting}
                  className="w-full bg-white border border-blue-200 text-blue-700 px-4 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>{callSubmitting ? (t('contact.form.submitting') as string) : (t('contact.form.requestCall') as string)}</span>
                </button>
              </div>

              {scheduleSubmitted ? (
                <div className="mt-4 bg-emerald-100 text-emerald-800 px-6 py-4 rounded-lg text-center font-semibold">
                  Visit request received! We'll confirm shortly.
                </div>
              ) : null}

              {callSubmitted ? (
                <div className="mt-4 bg-emerald-100 text-emerald-800 px-6 py-4 rounded-lg text-center font-semibold">
                  Call request received! We'll reach out soon.
                </div>
              ) : null}

              {scheduleError ? (
                <div className="mt-4 bg-red-50 text-red-800 px-6 py-4 rounded-lg text-center font-semibold">
                  {scheduleError}
                </div>
              ) : null}

              {callError ? (
                <div className="mt-4 bg-red-50 text-red-800 px-6 py-4 rounded-lg text-center font-semibold">
                  {callError}
                </div>
              ) : null}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('contact.form.name') as string} *
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
                  {t('contact.form.email') as string} *
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
                  {t('contact.form.phone') as string}
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

            {/* Scheduling Form Modal */}
            {showScheduling && (
              <SchedulingForm
                onSchedule={handleScheduleVisit}
                onCancel={() => setShowScheduling(false)}
                visitorName={formData.name}
                visitorEmail={formData.email}
              />
            )}

            {/* Call Back Form Modal */}
            {showCallBack && (
              <CallBackForm
                onSubmit={handleRequestCall}
                onClose={() => setShowCallBack(false)}
                visitorName={formData.name}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

