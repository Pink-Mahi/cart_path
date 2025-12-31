import { Zap, Droplets, Clock, Leaf, DollarSign, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Benefits() {
  const { t } = useLanguage();
  const benefitItems = t('benefits.items') as Array<{ title: string; description: string }>;

  const benefitIcons = [
    { icon: Zap, color: "text-yellow-600", bgColor: "bg-yellow-50" },
    { icon: Droplets, color: "text-blue-600", bgColor: "bg-blue-50" },
    { icon: Clock, color: "text-emerald-600", bgColor: "bg-emerald-50" },
    { icon: Leaf, color: "text-green-600", bgColor: "bg-green-50" },
    { icon: DollarSign, color: "text-teal-600", bgColor: "bg-teal-50" },
    { icon: CheckCircle2, color: "text-emerald-600", bgColor: "bg-emerald-50" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('benefits.title') as string}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('benefits.subtitle') as string}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitItems.map((benefit, index) => {
            const iconData = benefitIcons[index];
            const Icon = iconData.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`${iconData.bgColor} ${iconData.color} w-14 h-14 rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
