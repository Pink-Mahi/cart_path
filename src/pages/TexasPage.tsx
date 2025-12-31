import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SiteHeader from '../components/SiteHeader';
import { useLanguage } from '../contexts/LanguageContext';

export default function TexasPage() {
  const { t } = useLanguage();
  const fits = t('statePages.texas.fits') as Array<{ label: string; text: string }>;

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t('statePages.texas.title') as string}
        description={t('statePages.texas.description') as string}
        path="/texas-cart-path-cleaning"
      />
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{t('statePages.texas.title') as string}</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          {t('statePages.texas.subtitle') as string}
        </p>

        <section className="mt-12 grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">{t('statePages.texas.builtForScaleTitle') as string}</h2>
            <p className="mt-3 text-gray-700">
              {t('statePages.texas.builtForScaleDescription') as string}
            </p>
          </div>
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900">{t('statePages.texas.greatFitsTitle') as string}</h2>
            <ul className="mt-3 space-y-2 text-gray-700">
              {fits.map((fit, index) => (
                <li key={index}>
                  <span className="font-semibold text-gray-900">{fit.label}</span> {fit.text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-gray-100 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{t('statePages.texas.quoteTitle') as string}</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            {t('statePages.texas.quoteDescription') as string}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
            >
              {t('statePages.common.requestQuote') as string}
            </Link>
            <Link
              to="/services"
              className="inline-flex justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg border border-emerald-200 hover:bg-emerald-50 transition-colors"
            >
              {t('statePages.common.viewServices') as string}
            </Link>
          </div>
        </section>

        <div className="mt-12">
          <Link to="/locations" className="text-emerald-700 font-semibold hover:underline">
            {t('statePages.common.seeAllLocations') as string}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
