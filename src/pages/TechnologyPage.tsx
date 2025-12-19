import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SiteHeader from '../components/SiteHeader';

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Closed-Loop Cart Path Cleaning Technology | Cart Path Cleaning"
        description="Learn how our patent-pending closed-loop cart path cleaning system supports efficient cleaning with reduced runoff and lower overall water consumption."
        path="/technology"
      />
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Closed-Loop Cleaning Technology</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          Traditional pressure washing on cart paths and walkways is slow, water-intensive, and disruptive. Our patent-pending closed-loop
          system is ideal for long path networks where uptime matters—using significantly less water than traditional methods.
        </p>

        <section className="mt-12 grid md:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">How it works</h2>
            <ol className="mt-4 space-y-4 text-gray-700">
              <li>
                <span className="font-semibold text-gray-900">1) Apply</span> pressurized water to lift algae, grime, and staining.
              </li>
              <li>
                <span className="font-semibold text-gray-900">2) Recover</span> wash water is captured at the point of cleaning, minimizing runoff and water loss.
              </li>
              <li>
                <span className="font-semibold text-gray-900">3) Condition</span> recovered water is conditioned for reuse.
              </li>
              <li>
                <span className="font-semibold text-gray-900">4) Reuse</span> recovered water is reused to support efficient, low-consumption cleaning operations.
              </li>
              <li>
                <span className="font-semibold text-gray-900">5) Post-treat</span> the surface to help prevent mold and algae regrowth.
              </li>
            </ol>
          </div>

          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900">Why facilities choose closed-loop</h2>
            <div className="mt-4 space-y-3 text-gray-700">
              <div>
                <div className="font-semibold text-gray-900">Golf-cart-sized equipment</div>
                <div className="mt-1">Our machine is the width of a golf cart or turf mower—not a full-sized truck. We go where golf carts go.</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Fast turnaround</div>
                <div className="mt-1">Most golf courses are completed in just 1–2 days depending on site conditions.</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Minimal disruption</div>
                <div className="mt-1">No long hoses blocking paths, no water trucks parked everywhere. We move efficiently through the course.</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Regrowth prevention</div>
                <div className="mt-1">Post-treatment helps slow mold and algae regrowth so your paths stay cleaner longer.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-gray-100 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Results that matter</h2>
          <p className="mt-4 text-gray-700 max-w-3xl">
            Surface condition, staining type, and site layout influence results, but our goal is always the same: deliver a visibly cleaner,
            safer path network while keeping your facility running.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/services"
              className="inline-flex justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="inline-flex justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg border border-emerald-200 hover:bg-emerald-50 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
