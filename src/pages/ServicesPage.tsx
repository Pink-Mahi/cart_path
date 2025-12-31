import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SiteHeader from '../components/SiteHeader';
import { useLanguage } from '../contexts/LanguageContext';

export default function ServicesPage() {
  const { t } = useLanguage();
  const services = t('services.items') as Array<{ title: string; description: string }>;

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Cart Path & Sidewalk Pressure Washing Services | Power Washing for Golf Courses & HOAs"
        description="Professional cart path and sidewalk pressure washing services. Our closed-loop power washing system uses 90% less water than traditional pressure washing. Serving golf courses, country clubs, HOAs, and commercial properties."
        path="/services"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Golf Cart Path Cleaning & Sidewalk Cleaning',
          provider: {
            '@type': 'Organization',
            name: 'Cart Path Cleaning',
            url: 'https://cartpathcleaning.com/',
            telephone: '+1-941-207-0280',
          },
          areaServed: 'US',
          serviceType: ['Golf cart path cleaning', 'Sidewalk cleaning', 'Walkway cleaning'],
          description:
            'Closed-loop cart path and sidewalk cleaning for golf facilities, clubs, resorts, and HOA communities. Fast, low-disruption cleaning designed to reduce runoff and overall water consumption.',
          url: 'https://cartpathcleaning.com/services',
        }}
      />
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{t('services.title') as string}</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          {t('services.subtitle') as string}
        </p>

        <section className="mt-12 grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">{service.title}</h2>
              <p className="mt-3 text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-14 rounded-2xl bg-emerald-50 border border-emerald-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900">{t('servicesExtra.advancedTech.title') as string}</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            {t('servicesExtra.advancedTech.description') as string}
          </p>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(t('servicesExtra.advancedTech.features') as Array<{title: string; description: string}>).map((feature, index) => (
              <div key={index}>
                <div className="font-semibold text-gray-900">{feature.title}</div>
                <div className="text-gray-700 mt-1">{feature.description}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-gray-100 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{t('servicesExtra.protecting.title') as string}</h2>
          <p className="mt-4 text-gray-700 max-w-4xl">
            {t('servicesExtra.protecting.description') as string}
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {(t('servicesExtra.protecting.questions') as Array<{q: string; a: string}>).map((item, index) => (
              <div key={index}>
                <div className="font-semibold text-gray-900">{item.q}</div>
                <div className="mt-1 text-gray-700">{item.a}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-600 text-sm max-w-4xl">
            {t('servicesExtra.protecting.disclaimer') as string}
          </p>
        </section>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="inline-flex justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
          >
            {t('faq.cta') as string}
          </Link>
          <Link
            to="/markets"
            className="inline-flex justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg border border-emerald-200 hover:bg-emerald-50 transition-colors"
          >
            {t('maintenance.buttons.seeWhoWeServe') as string}
          </Link>
          <Link
            to="/maintenance"
            className="inline-flex justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg border border-emerald-200 hover:bg-emerald-50 transition-colors"
          >
            {t('nav.maintenance') as string}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
