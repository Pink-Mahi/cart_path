import { useState } from 'react';
import { Phone, X, Calendar, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export interface CallBackData {
  visitorName: string;
  visitorEmail: string;
  visitorPhone: string;
  bestTime: string;
  notes: string;
}

interface CallBackFormProps {
  onSubmit: (data: CallBackData) => void;
  onClose: () => void;
  visitorName?: string;
  visitorEmail?: string;
}

export default function CallBackForm({ onSubmit, onClose, visitorName = '', visitorEmail = '' }: CallBackFormProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<CallBackData>({
    visitorName: visitorName,
    visitorEmail: visitorEmail,
    visitorPhone: '',
    bestTime: '',
    notes: ''
  });
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.visitorName && formData.visitorEmail && formData.visitorPhone) {
      // Combine day and time into bestTime string
      const bestTimeStr = selectedDay && selectedTime 
        ? `${selectedDay}, ${selectedTime}`
        : selectedDay || selectedTime || '';
      
      onSubmit({
        ...formData,
        bestTime: bestTimeStr
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-emerald-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <h3 className="font-semibold">{t('contact.modals.callBack.title') as string}</h3>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-emerald-700 rounded-full p-1 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('contact.modals.callBack.nameLabel') as string} *
            </label>
            <input
              type="text"
              required
              value={formData.visitorName}
              onChange={(e) => setFormData({ ...formData, visitorName: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder={t('contact.modals.callBack.namePlaceholder') as string}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('contact.modals.callBack.emailLabel') as string} *
            </label>
            <input
              type="email"
              required
              value={formData.visitorEmail}
              onChange={(e) => setFormData({ ...formData, visitorEmail: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder={t('contact.modals.callBack.emailPlaceholder') as string}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('contact.modals.callBack.phoneLabel') as string} *
            </label>
            <input
              type="tel"
              required
              value={formData.visitorPhone}
              onChange={(e) => setFormData({ ...formData, visitorPhone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder={t('contact.modals.callBack.phonePlaceholder') as string}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Calendar className="inline w-4 h-4 mr-1" />
              {t('contact.modals.callBack.bestDayLabel') as string}
            </label>
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="">{t('contact.modals.callBack.bestDayPlaceholder') as string}</option>
              <option value="Weekdays">{t('contact.modals.callBack.days.weekdays') as string}</option>
              <option value="Weekends">{t('contact.modals.callBack.days.weekends') as string}</option>
              <option value="Monday">{t('contact.modals.callBack.days.monday') as string}</option>
              <option value="Tuesday">{t('contact.modals.callBack.days.tuesday') as string}</option>
              <option value="Wednesday">{t('contact.modals.callBack.days.wednesday') as string}</option>
              <option value="Thursday">{t('contact.modals.callBack.days.thursday') as string}</option>
              <option value="Friday">{t('contact.modals.callBack.days.friday') as string}</option>
              <option value="Saturday">{t('contact.modals.callBack.days.saturday') as string}</option>
              <option value="Sunday">{t('contact.modals.callBack.days.sunday') as string}</option>
              <option value="Anytime">{t('contact.modals.callBack.days.anytime') as string}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Clock className="inline w-4 h-4 mr-1" />
              {t('contact.modals.callBack.bestTimeLabel') as string}
            </label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="">{t('contact.modals.callBack.bestTimePlaceholder') as string}</option>
              <option value="Morning (8am-12pm)">{t('contact.modals.callBack.times.morning') as string}</option>
              <option value="Afternoon (12pm-4pm)">{t('contact.modals.callBack.times.afternoon') as string}</option>
              <option value="Evening (4pm-8pm)">{t('contact.modals.callBack.times.evening') as string}</option>
              <option value="Anytime">{t('contact.modals.callBack.times.anytime') as string}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('contact.modals.callBack.notesLabel') as string}
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
              placeholder={t('contact.modals.callBack.notesPlaceholder') as string}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              {t('contact.modals.callBack.cancel') as string}
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
            >
              {t('contact.modals.callBack.submit') as string}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
