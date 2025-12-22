import { useState } from 'react';
import { Calendar, Clock, MapPin, Home } from 'lucide-react';

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
    <div className="p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">📅 Schedule On-Site Visit</h3>
      
      <form onSubmit={handleSubmit} className="space-y-3">
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
        <div className="flex gap-2 pt-2">
          <button
            type="submit"
            className="flex-1 bg-emerald-600 text-white py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors text-sm"
          >
            Schedule Visit
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-4 bg-gray-200 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors text-sm"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
