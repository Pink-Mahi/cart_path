import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SiteHeader from '../components/SiteHeader';
import { useLanguage } from '../contexts/LanguageContext';

export default function MaintenanceProgramsPage() {
  const { t } = useLanguage();
  const whatYouGetItems = t('maintenance.whatYouGet.items') as Array<{ title: string; description: string }>;

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Recurring Cart Path Maintenance Programs | Cart Path Cleaning"
        description="Seasonal and recurring cart path and sidewalk cleaning programs for golf facilities, clubs, resorts, and HOA communities. Keep surfaces consistently clean all year."
        path="/maintenance"
      />
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{t('maintenance.title') as string}</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          {t('maintenance.subtitle') as string}
        </p>

        <section className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">{t('maintenance.seasonal.title') as string}</h2>
            <p className="mt-3 text-gray-700">{t('maintenance.seasonal.description') as string}</p>
          </div>
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">{t('maintenance.eventBased.title') as string}</h2>
            <p className="mt-3 text-gray-700">{t('maintenance.eventBased.description') as string}</p>
          </div>
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">{t('maintenance.recurring.title') as string}</h2>
            <p className="mt-3 text-gray-700">{t('maintenance.recurring.description') as string}</p>
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-emerald-50 border border-emerald-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900">{t('maintenance.whatYouGet.title') as string}</h2>
          <ul className="mt-4 space-y-2 text-gray-700">
            {whatYouGetItems.map((item, index) => (
              <li key={index}>
                <span className="font-semibold text-gray-900">{item.title}</span> {item.description}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
            >
              {t('maintenance.buttons.getPricing') as string}
            </Link>
            <Link
              to="/markets"
              className="inline-flex justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg border border-emerald-200 hover:bg-emerald-50 transition-colors"
            >
              {t('maintenance.buttons.seeWhoWeServe') as string}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
