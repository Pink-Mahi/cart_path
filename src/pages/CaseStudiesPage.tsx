import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SiteHeader from '../components/SiteHeader';
import { useLanguage } from '../contexts/LanguageContext';

export default function CaseStudiesPage() {
  const { t } = useLanguage();
  const studies = t('caseStudiesPage.studies') as Array<{
    title: string;
    objective: string;
    bullets: Array<{ label: string; text: string }>;
  }>;

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t('caseStudiesPage.title') as string}
        description={t('caseStudiesPage.subtitle') as string}
        path="/case-studies"
      />
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{t('caseStudiesPage.title') as string}</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          {t('caseStudiesPage.subtitle') as string}
        </p>

        <section className="mt-12 grid md:grid-cols-2 gap-10">
          {studies.map((study, index) => (
            <div key={index} className="rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">{study.title}</h2>
              <p className="mt-3 text-gray-700">{study.objective}</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                {study.bullets.map((b, bIndex) => (
                  <li key={bIndex}>
                    <span className="font-semibold text-gray-900">{b.label}</span> {b.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-14 rounded-2xl bg-emerald-50 border border-emerald-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900">{t('caseStudiesPage.featured.title') as string}</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            {t('caseStudiesPage.featured.subtitle') as string}
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
            >
              {t('caseStudiesPage.featured.button') as string}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
