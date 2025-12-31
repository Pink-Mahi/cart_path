import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SiteHeader from '../components/SiteHeader';
import { useLanguage } from '../contexts/LanguageContext';

export default function GalleryPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t('galleryPage.title') as string}
        description={t('galleryPage.subtitle') as string}
        path="/gallery"
      />
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{t('galleryPage.title') as string}</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          {t('galleryPage.subtitle') as string}
        </p>

        <section className="mt-12 grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <picture>
              <source srcSet="/dirty-cart-path.webp" type="image/webp" />
              <img
                src="/dirty-cart-path.jpg"
                alt={t('galleryPage.beforeTitle') as string}
                className="w-full h-auto"
                loading="lazy"
              />
            </picture>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900">{t('galleryPage.beforeTitle') as string}</h2>
              <p className="mt-2 text-gray-700">{t('galleryPage.beforeDescription') as string}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <picture>
              <source srcSet="/clean-cart-path.webp" type="image/webp" />
              <img
                src="/clean-cart-path.jpg"
                alt={t('galleryPage.afterTitle') as string}
                className="w-full h-auto"
                loading="lazy"
              />
            </picture>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900">{t('galleryPage.afterTitle') as string}</h2>
              <p className="mt-2 text-gray-700">{t('galleryPage.afterDescription') as string}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
