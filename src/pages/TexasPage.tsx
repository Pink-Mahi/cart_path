import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SiteHeader from '../components/SiteHeader';

export default function TexasPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Texas Cart Path Cleaning | Fast Closed-Loop Sidewalk & Walkway Cleaning"
        description="Texas cart path and sidewalk cleaning for golf facilities, country clubs, resorts, and HOA communities. Efficient closed-loop cleaning for large properties and long path networks."
        path="/texas-cart-path-cleaning"
      />
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Texas Cart Path Cleaning</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          Texas properties often have long sidewalks, extensive cart paths, and large common areas. Our closed-loop system is built to clean
          efficiently across large footprints with minimal disruption.
        </p>

        <section className="mt-12 grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Built for scale</h2>
            <p className="mt-3 text-gray-700">
              Our workflow is designed for efficient progress across large properties, reducing setup time and operational headaches.
            </p>
          </div>
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900">Great fits in Texas</h2>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>
                <span className="font-semibold text-gray-900">Golf facilities</span> with high-traffic cart paths
              </li>
              <li>
                <span className="font-semibold text-gray-900">Master-planned communities</span> and HOAs
              </li>
              <li>
                <span className="font-semibold text-gray-900">Resorts</span> and premium properties
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-gray-100 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Get a quote</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            Tell us where in Texas the facility is located and what surfaces need cleaning. We’ll confirm logistics and provide pricing.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              to="/services"
              className="inline-flex justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg border border-emerald-200 hover:bg-emerald-50 transition-colors"
            >
              View Services
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
