import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SiteHeader from '../components/SiteHeader';

export default function NevadaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Nevada Cart Path Cleaning | Water-Efficient Closed-Loop Cleaning"
        description="Nevada cart path and walkway cleaning designed for water-scarce environments. Closed-loop cleaning recovers and reuses wash water to reduce overall water consumption on large path networks."
        path="/nevada-cart-path-cleaning"
      />
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Nevada Cart Path Cleaning</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          In Nevada, water efficiency and operational cleanliness matter. Our closed-loop approach helps reduce fresh-water demand while
          keeping sites cleaner with reduced runoff.
        </p>

        <section className="mt-12 grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Built for water-scarce markets</h2>
            <p className="mt-3 text-gray-700">
              Our system is designed to recover and reuse wash water during cleaning. This is a strong fit for desert facilities and long
              cart path networks.
            </p>
          </div>
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900">Great for</h2>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>
                <span className="font-semibold text-gray-900">Golf courses</span> with extensive cart paths
              </li>
              <li>
                <span className="font-semibold text-gray-900">Resorts</span> with high-visibility walkways
              </li>
              <li>
                <span className="font-semibold text-gray-900">Communities</span> with long sidewalks and common areas
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-gray-100 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Request a quote</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            Share the site location, approximate footage, and any access restrictions. We’ll confirm scheduling and provide a quote.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              to="/technology"
              className="inline-flex justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg border border-emerald-200 hover:bg-emerald-50 transition-colors"
            >
              Learn About the Technology
            </Link>
          </div>
        </section>

        <div className="mt-12">
          <Link to="/locations" className="text-emerald-700 font-semibold hover:underline">
            See all service locations
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
