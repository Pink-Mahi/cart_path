import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SiteHeader from '../components/SiteHeader';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Cart Path Cleaning Case Studies | Results & Outcomes"
        description="Real-world outcomes from cart path and walkway cleaning projects: cleaner surfaces, improved safety, and minimal disruption to operations."
        path="/case-studies"
      />
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Case Studies</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          Google rewards proof. Case studies also help prospects understand what success looks like. We’ll keep expanding this library as new
          projects are completed.
        </p>

        <section className="mt-12 grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Golf Facility Path Refresh</h2>
            <p className="mt-3 text-gray-700">
              Objective: remove algae buildup and restore appearance across a high-traffic path network while minimizing disruption.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>
                <span className="font-semibold text-gray-900">Approach:</span> closed-loop, efficient workflow.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Outcome:</span> improved appearance and reduced slick areas.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Operations:</span> scheduling aligned with facility needs.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">HOA Sidewalk Improvement</h2>
            <p className="mt-3 text-gray-700">
              Objective: clean common-area walkways and entry zones to improve curb appeal and reduce slip risk.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>
                <span className="font-semibold text-gray-900">Approach:</span> targeted sections and efficient pass-through workflow.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Outcome:</span> visibly cleaner surfaces with less resident disruption.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-emerald-50 border border-emerald-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900">Want your facility featured?</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            We can document before/after results and share a short write-up after your project (with your approval). This content supports
            both credibility and SEO.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
