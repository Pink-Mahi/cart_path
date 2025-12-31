import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SiteHeader from '../components/SiteHeader';
import { useLanguage } from '../contexts/LanguageContext';

export default function FaqPage() {
  const { t } = useLanguage();
  const faqs = t('faq.questions') as Array<{ q: string; a: string }>;

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Cart Path Cleaning FAQ | Closed-Loop Cleaning Questions Answered"
        description="Answers to common questions about closed-loop cart path and sidewalk cleaning: scheduling, water usage, surfaces, and pricing."
        path="/faq"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'FAQ', path: '/faq' },
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

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{t('faq.title') as string}</h1>
        <p className="mt-6 text-lg text-gray-700">
          {t('faq.subtitle') as string}
        </p>

        <div className="mt-10 space-y-6">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">{item.q}</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/contact"
            className="inline-flex justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
          >
            {t('faq.cta') as string}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
