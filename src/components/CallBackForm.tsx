import { useState } from 'react';
import { Phone, X, Calendar, Clock } from 'lucide-react';

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
            <h3 className="font-semibold">Request a Call Back</h3>
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
              Your Name *
            </label>
            <input
              type="text"
              required
              value={formData.visitorName}
              onChange={(e) => setFormData({ ...formData, visitorName: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Email *
            </label>
            <input
              type="email"
              required
              value={formData.visitorEmail}
              onChange={(e) => setFormData({ ...formData, visitorEmail: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              value={formData.visitorPhone}
              onChange={(e) => setFormData({ ...formData, visitorPhone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Calendar className="inline w-4 h-4 mr-1" />
              Best Day to Call
            </label>
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="">Select a day...</option>
              <option value="Weekdays">Weekdays</option>
              <option value="Weekends">Weekends</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
              <option value="Anytime">Anytime</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Clock className="inline w-4 h-4 mr-1" />
              Best Time Range
            </label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="">Select a time...</option>
              <option value="Morning (8am-12pm)">Morning (8am-12pm)</option>
              <option value="Afternoon (12pm-4pm)">Afternoon (12pm-4pm)</option>
              <option value="Evening (4pm-8pm)">Evening (4pm-8pm)</option>
              <option value="Anytime">Anytime</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes (Optional)
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
              placeholder="Any additional information..."
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
            >
              Request Call Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
