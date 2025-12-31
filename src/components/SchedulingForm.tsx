import { useState } from 'react';
import { Calendar, Clock, MapPin, Home, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface SchedulingFormProps {
  visitorName: string;
  visitorEmail: string;
  onSchedule: (scheduleData: ScheduleData) => void;
  onCancel: () => void;
}

export interface ScheduleData {
  visitorName: string;
  visitorEmail: string;
  visitorPhone: string;
  propertyAddress: string;
  propertyType: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

export default function SchedulingForm({ visitorName, visitorEmail, onSchedule, onCancel }: SchedulingFormProps) {
  const { t } = useLanguage();
  const [name, setName] = useState(visitorName || '');
  const [email, setEmail] = useState(visitorEmail || '');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [propertyType, setPropertyType] = useState('golf-course');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('morning');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone || !address || !date) {
      alert(t('contact.modals.scheduling.requiredFieldsAlert') as string);
      return;
    }

    onSchedule({
      visitorName: name,
      visitorEmail: email,
      visitorPhone: phone,
      propertyAddress: address,
      propertyType,
      preferredDate: date,
      preferredTime: time,
      notes
    });
  };

  // Get minimum date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-emerald-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <h3 className="font-semibold">{t('contact.modals.scheduling.title') as string}</h3>
          </div>
          <button
            onClick={onCancel}
            className="hover:bg-emerald-700 rounded-full p-1 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('contact.modals.scheduling.nameLabel') as string} *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('contact.modals.scheduling.namePlaceholder') as string}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('contact.modals.scheduling.emailLabel') as string} *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('contact.modals.scheduling.emailPlaceholder') as string}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('contact.modals.scheduling.phoneLabel') as string} *
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={t('contact.modals.scheduling.phonePlaceholder') as string}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            required
          />
        </div>

        {/* Property Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <MapPin className="inline w-4 h-4 mr-1" />
            {t('contact.modals.scheduling.addressLabel') as string} *
          </label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder={t('contact.modals.scheduling.addressPlaceholder') as string}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            rows={2}
            required
          />
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Home className="inline w-4 h-4 mr-1" />
            {t('contact.modals.scheduling.propertyTypeLabel') as string}
          </label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
          >
            <option value="golf-course">{t('contact.modals.scheduling.propertyTypes.golfCourse') as string}</option>
            <option value="community">{t('contact.modals.scheduling.propertyTypes.community') as string}</option>
            <option value="commercial">{t('contact.modals.scheduling.propertyTypes.commercial') as string}</option>
            <option value="municipal">{t('contact.modals.scheduling.propertyTypes.municipal') as string}</option>
            <option value="other">{t('contact.modals.scheduling.propertyTypes.other') as string}</option>
          </select>
        </div>

        {/* Preferred Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Calendar className="inline w-4 h-4 mr-1" />
            {t('contact.modals.scheduling.preferredDateLabel') as string} *
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={minDate}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            required
          />
        </div>

        {/* Preferred Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Clock className="inline w-4 h-4 mr-1" />
            {t('contact.modals.scheduling.preferredTimeLabel') as string}
          </label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
          >
            <option value="morning">{t('contact.modals.scheduling.timeOptions.morning') as string}</option>
            <option value="afternoon">{t('contact.modals.scheduling.timeOptions.afternoon') as string}</option>
            <option value="late-afternoon">{t('contact.modals.scheduling.timeOptions.lateAfternoon') as string}</option>
          </select>
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('contact.modals.scheduling.notesLabel') as string}
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder={t('contact.modals.scheduling.notesPlaceholder') as string}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            rows={2}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            {t('contact.modals.scheduling.cancel') as string}
          </button>
          <button
            type="submit"
            className="flex-1 px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
          >
            {t('contact.modals.scheduling.submit') as string}
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}
