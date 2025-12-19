import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SiteHeader from '../components/SiteHeader';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Before & After Cart Path Cleaning | Gallery"
        description="Before-and-after examples of cart path and walkway cleaning. See the difference closed-loop cleaning can make for golf facilities and communities."
        path="/gallery"
      />
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Before &amp; After Gallery</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          Visual proof matters. Below are representative examples of surfaces before and after cleaning. Surface conditions vary, and results
          depend on staining type, time-in-place, and job specifications.
        </p>

        <section className="mt-12 grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <picture>
              <source srcSet="/dirty-cart-path.webp" type="image/webp" />
              <img
                src="/dirty-cart-path.jpg"
                alt="Dirty cart path before cleaning"
                className="w-full h-auto"
                loading="lazy"
              />
            </picture>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900">Before</h2>
              <p className="mt-2 text-gray-700">Typical algae buildup and staining on high-traffic areas.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <picture>
              <source srcSet="/clean-cart-path.webp" type="image/webp" />
              <img
                src="/clean-cart-path.jpg"
                alt="Clean cart path after cleaning"
                className="w-full h-auto"
                loading="lazy"
              />
            </picture>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900">After</h2>
              <p className="mt-2 text-gray-700">Cleaner, safer surfaces with improved curb appeal.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
