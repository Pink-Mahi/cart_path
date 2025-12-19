import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SiteHeader from '../components/SiteHeader';

export default function MarketsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Who We Serve | Golf Facilities, Country Clubs, Resorts & HOAs"
        description="Specialized cart path and sidewalk cleaning for golf facilities, country clubs, resorts, and HOA communities. Clean faster with less water and minimal disruption."
        path="/markets"
      />
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Who We Serve</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          Our closed-loop cleaning system was built for environments where presentation, safety, and operational uptime matter.
          We work nationwide with teams that understand the expectations of premium facilities and communities.
        </p>

        <section className="mt-12 grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Golf Facilities</h2>
            <p className="mt-3 text-gray-700">
              Keep cart paths clean without dragging long hoses across the course or forcing extended closures. Ideal for daily play,
              tournaments, and member events.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Country Clubs & Resorts</h2>
            <p className="mt-3 text-gray-700">
              Discreet, efficient cleaning that maintains a premium guest experience. Great for entry areas, walkways, cart paths,
              and high-visibility zones.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">HOA Communities</h2>
            <p className="mt-3 text-gray-700">
              Improve curb appeal and reduce slip hazards on sidewalks and common-area paths with minimal disruption to residents.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Other Large-Scale Path Networks</h2>
            <p className="mt-3 text-gray-700">
              If you manage a property with extensive walkways and limited water access, our self-contained approach may be a fit.
              Contact us and we’ll help evaluate your site.
            </p>
          </div>
        </section>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="inline-flex justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
          >
            Get a Quote
          </Link>
          <Link
            to="/services"
            className="inline-flex justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg border border-emerald-200 hover:bg-emerald-50 transition-colors"
          >
            View Services
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
