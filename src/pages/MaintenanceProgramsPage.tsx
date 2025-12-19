import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SiteHeader from '../components/SiteHeader';

export default function MaintenanceProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Recurring Cart Path Maintenance Programs | Cart Path Cleaning"
        description="Seasonal and recurring cart path and sidewalk cleaning programs for golf facilities, clubs, resorts, and HOA communities. Keep surfaces consistently clean all year."
        path="/maintenance"
      />
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Recurring Maintenance Programs</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          One deep clean helps, but consistent maintenance is what keeps paths looking premium, reduces algae buildup, and lowers slip risk.
          We offer flexible programs that fit your operations and event calendar.
        </p>

        <section className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">Seasonal Cleaning</h2>
            <p className="mt-3 text-gray-700">Ideal for algae/moss cycles, rainy seasons, and high-growth periods.</p>
          </div>
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">Event-Based Scheduling</h2>
            <p className="mt-3 text-gray-700">Prepare for tournaments, member-guest events, or peak season with targeted cleanups.</p>
          </div>
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">Recurring Programs</h2>
            <p className="mt-3 text-gray-700">Monthly or quarterly options to keep cart paths and sidewalks consistently presentable.</p>
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-emerald-50 border border-emerald-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900">What you get</h2>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>
              <span className="font-semibold text-gray-900">Predictable upkeep</span> that supports a premium experience.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Less disruption</span> with consistent scheduling.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Risk reduction</span> by addressing algae and slippery buildup.
            </li>
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
            >
              Get Program Pricing
            </Link>
            <Link
              to="/markets"
              className="inline-flex justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg border border-emerald-200 hover:bg-emerald-50 transition-colors"
            >
              See Who We Serve
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
