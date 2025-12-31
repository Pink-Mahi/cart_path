import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SiteHeader from '../components/SiteHeader';
import { useLanguage } from '../contexts/LanguageContext';

export default function FloridaPage() {
  const { t } = useLanguage();
  const faqs = t('statePages.florida.faqs') as Array<{ q: string; a: string }>;
  const golfFirstCards = t('statePages.florida.golfFirstCards') as Array<{ title: string; description: string }>;
  const assetCards = t('statePages.florida.assetCards') as Array<{ title: string; description: string }>;

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Sarasota & Florida Cart Path Cleaning | Closed-Loop Golf Path & Sidewalk Cleaning"
        description="Sarasota-based Florida golf cart path cleaning for golf courses, country clubs, and resorts. Closed-loop cleaning designed for long cart paths, humid Florida algae buildup, and tee-time-friendly scheduling."
        path="/florida-cart-path-cleaning"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
          { name: 'Florida', path: '/florida-cart-path-cleaning' },
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.a,
            },
          })),
        }}
      />
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{t('statePages.florida.title') as string}</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          {t('statePages.florida.intro') as string}
        </p>

        <section className="mt-12 grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">{t('statePages.florida.builtForTitle') as string}</h2>
            <p className="mt-3 text-gray-700">
              {t('statePages.florida.builtForDescription1') as string}
            </p>
            <p className="mt-4 text-gray-700">
              {t('statePages.florida.builtForDescription2Prefix') as string}
              <span className="font-semibold text-gray-900"> {t('targetMarkets.golf.title') as string}</span>,
              <span className="font-semibold text-gray-900"> {t('targetMarkets.clubs.title') as string}</span>,
              <span className="font-semibold text-gray-900"> {t('contact.orgTypes.resort') as string}</span>,
              <span className="font-semibold text-gray-900"> {t('targetMarkets.hoa.title') as string}</span>.
            </p>
          </div>
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900">{t('statePages.florida.facilitiesTitle') as string}</h2>
            <p className="mt-3 text-gray-700">
              {t('statePages.florida.facilitiesDescription') as string}
            </p>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-gray-100 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{t('statePages.florida.golfFirstTitle') as string}</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            {t('statePages.florida.golfFirstDescription') as string}
          </p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {golfFirstCards.map((card, index) => (
              <div key={index}>
                <div className="font-semibold text-gray-900">{card.title}</div>
                <div className="mt-1 text-gray-700">{card.description}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/services"
              className="inline-flex justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg border border-emerald-200 hover:bg-emerald-50 transition-colors"
            >
              {t('statePages.florida.golfServicesButton') as string}
            </Link>
            <Link
              to="/gallery"
              className="inline-flex justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg border border-emerald-200 hover:bg-emerald-50 transition-colors"
            >
              {t('statePages.florida.galleryButton') as string}
            </Link>
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-emerald-50 border border-emerald-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900">{t('statePages.florida.assetTitle') as string}</h2>
          <p className="mt-3 text-gray-700 max-w-4xl">
            {t('statePages.florida.assetDescription') as string}
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {assetCards.map((card, index) => (
              <div key={index}>
                <div className="font-semibold text-gray-900">{card.title}</div>
                <div className="mt-1 text-gray-700">{card.description}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-600 text-sm max-w-4xl">
            {t('statePages.florida.assetDisclaimer') as string}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/maintenance"
              className="inline-flex justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg border border-emerald-200 hover:bg-emerald-100 transition-colors"
            >
              {t('statePages.florida.maintenanceButton') as string}
            </Link>
            <Link
              to="/contact"
              className="inline-flex justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
            >
              {t('statePages.florida.quoteButton') as string}
            </Link>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-gray-100 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{t('statePages.florida.quoteBlockTitle') as string}</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            {t('statePages.florida.quoteBlockDescription') as string}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
            >
              {t('statePages.florida.quoteButton') as string}
            </Link>
            <Link
              to="/maintenance"
              className="inline-flex justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg border border-emerald-200 hover:bg-emerald-50 transition-colors"
            >
              {t('statePages.florida.maintenanceProgramsButton') as string}
            </Link>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900">{t('statePages.florida.faqTitle') as string}</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((item, index) => (
              <div key={index} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">{item.q}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
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
