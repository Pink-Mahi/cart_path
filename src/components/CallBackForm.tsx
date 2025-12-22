import { useState } from 'react';
import { Phone, X } from 'lucide-react';

export interface CallBackData {
  visitorName: string;
  visitorPhone: string;
  bestTime: string;
  notes: string;
}

interface CallBackFormProps {
  onSubmit: (data: CallBackData) => void;
  onClose: () => void;
  visitorName?: string;
}

export default function CallBackForm({ onSubmit, onClose, visitorName = '' }: CallBackFormProps) {
  const [formData, setFormData] = useState<CallBackData>({
    visitorName: visitorName,
    visitorPhone: '',
    bestTime: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.visitorName && formData.visitorPhone) {
      onSubmit(formData);
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
              Best Time to Call
            </label>
            <input
              type="text"
              value={formData.bestTime}
              onChange={(e) => setFormData({ ...formData, bestTime: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="e.g., Weekdays 9am-5pm"
            />
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
