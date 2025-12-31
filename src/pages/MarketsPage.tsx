import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SiteHeader from '../components/SiteHeader';
import { useLanguage } from '../contexts/LanguageContext';

export default function MarketsPage() {
  const { t } = useLanguage();
  const cards = t('marketsPage.cards') as Array<{ title: string; description: string }>;

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t('marketsPage.title') as string}
        description={t('marketsPage.description') as string}
        path="/markets"
      />
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{t('marketsPage.title') as string}</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          {t('marketsPage.subtitle') as string}
        </p>

        <section className="mt-12 grid md:grid-cols-2 gap-10">
          {cards.map((card, index) => (
            <div key={index} className="rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">{card.title}</h2>
              <p className="mt-3 text-gray-700">{card.description}</p>
            </div>
          ))}
        </section>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="inline-flex justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
          >
            {t('marketsPage.buttons.getQuote') as string}
          </Link>
          <Link
            to="/services"
            className="inline-flex justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg border border-emerald-200 hover:bg-emerald-50 transition-colors"
          >
            {t('marketsPage.buttons.viewServices') as string}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
