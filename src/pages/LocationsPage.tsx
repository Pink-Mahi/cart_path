import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SiteHeader from '../components/SiteHeader';

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Cart Path Cleaning Locations | Florida + Nationwide Service"
        description="Cart Path Cleaning is based in Florida and serves golf facilities, resorts, country clubs, and HOA communities nationwide. Explore state-specific pages and request a quote."
        path="/locations"
      />
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Service Locations</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          We’re headquartered in Florida and travel for the right projects. Our closed-loop system is a strong fit for large-scale path
          networks, and we’re building teams to operate across the United States.
        </p>

        <section className="mt-12 grid md:grid-cols-3 gap-8">
          <Link
            to="/florida-cart-path-cleaning"
            className="rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-bold text-gray-900">Florida</h2>
            <p className="mt-3 text-gray-700">Local-first scheduling, fast mobilization, and recurring maintenance programs.</p>
          </Link>
        </section>

        <section className="mt-14 rounded-2xl bg-emerald-50 border border-emerald-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900">Nationwide projects</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            If you’re outside these states, we can still help. Tell us where your facility is located and what you need cleaned — we’ll
            confirm feasibility and provide a quote.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
            >
              Request a Free Quote
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
