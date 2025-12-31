import { Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Solution() {
  const { t } = useLanguage();
  const steps = t('solution.steps') as Array<{ title: string; description: string }>;

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {t('solution.badge') as string}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('solution.title') as string}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('solution.description') as string}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <picture>
              <source srcSet="/clean-cart-path.webp" type="image/webp" />
              <img
                src="/clean-cart-path.jpg"
                alt="Clean golf cart path"
                className="rounded-lg shadow-2xl"
                loading="lazy"
              />
            </picture>
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {t('solution.systemTitle') as string}
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              {t('solution.systemDescription1') as string}
            </p>
            <p className="text-lg text-gray-700 mb-6">
              {t('solution.systemDescription2') as string}
            </p>
            <p className="text-lg text-gray-700 mb-6">
              {t('solution.systemDescription3') as string}
            </p>
            <div className="flex items-center gap-2 text-emerald-600 font-semibold">
              <Sparkles className="w-5 h-5" />
              <span>{t('solution.sparklingPaths') as string}</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {t('solution.howItWorks') as string}
          </h3>
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-2xl font-bold text-emerald-600">{index + 1}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
