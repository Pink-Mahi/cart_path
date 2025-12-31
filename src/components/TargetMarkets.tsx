import { Building2, TreePine } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function TargetMarkets() {
  const { t } = useLanguage();
  const golf = t('targetMarkets.golf') as { title: string; description: string; features: string[] };
  const clubs = t('targetMarkets.clubs') as { title: string; description: string; features: string[] };
  const hoa = t('targetMarkets.hoa') as { title: string; description: string; features: string[] };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('targetMarkets.title') as string}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('targetMarkets.subtitle') as string}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <TreePine className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{golf.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {golf.description}
            </p>
            <ul className="space-y-3">
              {golf.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-emerald-100 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <TreePine className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{clubs.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {clubs.description}
            </p>
            <ul className="space-y-3">
              {clubs.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-indigo-100 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-teal-100 text-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{hoa.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {hoa.description}
            </p>
            <ul className="space-y-3">
              {hoa.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-teal-100 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
