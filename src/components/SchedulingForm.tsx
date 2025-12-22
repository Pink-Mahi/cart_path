import { useState } from 'react';
import { Calendar, Clock, MapPin, Home, X } from 'lucide-react';

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
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [propertyType, setPropertyType] = useState('golf-course');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('morning');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone || !address || !date) {
      alert('Please fill in all required fields');
      return;
    }

    onSchedule({
      visitorName,
      visitorEmail,
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
            <h3 className="font-semibold">Schedule On-Site Visit</h3>
          </div>
          <button
            onClick={onCancel}
            className="hover:bg-emerald-700 rounded-full p-1 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(555) 123-4567"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            required
          />
        </div>

        {/* Property Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <MapPin className="inline w-4 h-4 mr-1" />
            Property Address *
          </label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="123 Golf Club Drive, City, State ZIP"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            rows={2}
            required
          />
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Home className="inline w-4 h-4 mr-1" />
            Property Type
          </label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
          >
            <option value="golf-course">Golf Course</option>
            <option value="community">Community/HOA</option>
            <option value="commercial">Commercial Property</option>
            <option value="municipal">Municipal</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Preferred Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Calendar className="inline w-4 h-4 mr-1" />
            Preferred Date *
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
            Preferred Time
          </label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
          >
            <option value="morning">Morning (8am - 12pm)</option>
            <option value="afternoon">Afternoon (12pm - 4pm)</option>
            <option value="late-afternoon">Late Afternoon (4pm - 6pm)</option>
          </select>
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Notes
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any specific requirements or questions..."
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
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
          >
            Schedule Visit
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}
