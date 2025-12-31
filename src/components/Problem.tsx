import { XCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Problem() {
  const { t } = useLanguage();
  const problems = t('problem.problems') as string[];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('problem.title') as string}
              <span className="block text-red-600 mt-2">{t('problem.subtitle') as string}</span>
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              {t('problem.description') as string}
            </p>

            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{problem}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <picture>
              <source srcSet="/dirty-cart-path.webp" type="image/webp" />
              <img
                src="/dirty-cart-path.jpg"
                alt="Dirty cart path"
                className="rounded-lg shadow-2xl"
                loading="lazy"
              />
            </picture>
            <div className="absolute inset-0 bg-gray-900/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
