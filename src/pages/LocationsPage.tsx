import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SiteHeader from '../components/SiteHeader';
import { useLanguage } from '../contexts/LanguageContext';

export default function LocationsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t('locationsPage.title') as string}
        description={t('locationsPage.subtitle') as string}
        path="/locations"
      />
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{t('locationsPage.title') as string}</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          {t('locationsPage.subtitle') as string}
        </p>

        <section className="mt-12 grid md:grid-cols-3 gap-8">
          <Link
            to="/florida-cart-path-cleaning"
            className="rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-bold text-gray-900">{t('locationsPage.floridaTitle') as string}</h2>
            <p className="mt-3 text-gray-700">{t('locationsPage.floridaDescription') as string}</p>
          </Link>
        </section>

        <section className="mt-14 rounded-2xl bg-emerald-50 border border-emerald-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900">{t('locationsPage.nationwideTitle') as string}</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            {t('locationsPage.nationwideDescription') as string}
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
            >
              {t('locationsPage.cta') as string}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
