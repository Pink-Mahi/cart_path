import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SiteHeader from '../components/SiteHeader';

export default function FloridaPage() {
  const faqs = [
    {
      q: 'Do you have to close holes or stop play to clean cart paths?',
      a: 'In many cases, no. We schedule around tee times, events, and maintenance operations to reduce disruption. Final scheduling depends on safety, access, and your facility workflow.',
    },
    {
      q: 'Why do Florida golf cart paths get slippery?',
      a: 'Humidity, shade, and frequent rain can accelerate algae and organic buildup on cart paths and walkways. Regular cleaning helps restore appearance and reduce slick areas.',
    },
    {
      q: 'Can you handle long cart path networks without dragging hoses everywhere?',
      a: 'Yes. Our water cart refills from an onsite water source and carries water to the cleaning machine—no hoses stretched across the course. Most golf courses are completed in just 1–2 days.',
    },
    {
      q: 'What about mold and algae coming back after cleaning?',
      a: 'After cleaning, we apply a post-treatment to the surface that helps prevent mold and algae regrowth. This is especially important in Florida\'s humid climate where regrowth can happen quickly.',
    },
    {
      q: 'Do you offer recurring maintenance for golf facilities?',
      a: 'Yes. We offer seasonal and recurring maintenance programs so cart paths stay consistently clean through Florida growth cycles and peak season.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Sarasota & Florida Cart Path Cleaning | Closed-Loop Golf Path & Sidewalk Cleaning"
        description="Sarasota-based Florida golf cart path cleaning for golf courses, country clubs, and resorts. Closed-loop cleaning designed for long cart paths, humid Florida algae buildup, and tee-time-friendly scheduling."
        path="/florida-cart-path-cleaning"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
          { name: 'Florida', path: '/florida-cart-path-cleaning' },
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.a,
            },
          })),
        }}
      />
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Sarasota Golf Cart Path Cleaning (Florida)</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          We’re based in Sarasota, Florida — which means faster mobilization, easier scheduling, and the ability to support recurring
          maintenance. We regularly serve Sarasota-area golf facilities and can travel statewide for larger projects.
        </p>

        <section className="mt-12 grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Built for Sarasota & Florida conditions</h2>
            <p className="mt-3 text-gray-700">
              Sarasota’s humidity and frequent rain can accelerate algae and organic buildup on shaded cart paths and walkways. Regular
              cleaning helps maintain curb appeal and reduces slippery areas.
            </p>
            <p className="mt-4 text-gray-700">
              We’re a strong fit for:
              <span className="font-semibold text-gray-900"> golf courses</span>,
              <span className="font-semibold text-gray-900"> country clubs</span>,
              <span className="font-semibold text-gray-900"> resorts</span>, and
              <span className="font-semibold text-gray-900"> HOA communities</span> throughout Sarasota County and the Gulf Coast.
            </p>
          </div>
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900">Facilities we serve</h2>
            <p className="mt-3 text-gray-700">
              Sarasota, Bradenton, Lakewood Ranch, Venice, Nokomis, Osprey, Englewood, and surrounding areas — plus statewide Florida
              projects.
            </p>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-gray-100 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Golf-course-first cleaning (cart paths, crossings, and high-traffic areas)</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            Golf facilities can’t afford to shut down holes or create a mess during peak play. Our approach is built for cart path networks
            where operational uptime matters. We focus on producing a visible improvement while coordinating around tee times, events, and
            maintenance windows.
          </p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="font-semibold text-gray-900">Tee-time-friendly scheduling</div>
              <div className="mt-1 text-gray-700">Plan work to minimize interference with daily play and tournaments.</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Golf-cart-sized equipment</div>
              <div className="mt-1 text-gray-700">Our machine is the width of a golf cart—not a full-sized truck. We go where carts go, no hoses needed.</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Fast turnaround</div>
              <div className="mt-1 text-gray-700">Most golf courses are completed in just 1–2 days.</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Post-treatment included</div>
              <div className="mt-1 text-gray-700">We treat surfaces after cleaning to help prevent mold and algae regrowth.</div>
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/services"
              className="inline-flex justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg border border-emerald-200 hover:bg-emerald-50 transition-colors"
            >
              Golf Cart Path Cleaning Services
            </Link>
            <Link
              to="/gallery"
              className="inline-flex justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg border border-emerald-200 hover:bg-emerald-50 transition-colors"
            >
              View Before & After Gallery
            </Link>
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-emerald-50 border border-emerald-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900">Cart paths are a major asset—maintenance protects the investment</h2>
          <p className="mt-3 text-gray-700 max-w-4xl">
            Concrete and asphalt cart paths are expensive infrastructure. Many 18-hole properties end up with miles of cart paths, and
            installation projects can be significant. Regular cleaning helps remove algae/grime buildup, improves traction, and supports
            protective programs (like sealing) by preparing the surface.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div>
              <div className="font-semibold text-gray-900">Long path networks</div>
              <div className="mt-1 text-gray-700">
                Cart path systems can add up quickly on 18 holes—often multiple miles. For example, 7 miles is about 36,960 linear feet.
              </div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Replacement is costly</div>
              <div className="mt-1 text-gray-700">
                That’s why many facilities invest in upkeep instead of deferring until replacement. Commonly cited cart path installation
                ranges (by linear foot) can put a 7-mile system into seven-figure territory depending on scope and current market.
              </div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Reduce slip risk</div>
              <div className="mt-1 text-gray-700">Florida algae buildup can create slick surfaces in shaded, damp areas.</div>
            </div>
          </div>
          <p className="mt-6 text-gray-600 text-sm max-w-4xl">
            Results vary by surface condition, drainage, shade, and traffic. We’ll recommend frequency based on your site and goals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/maintenance"
              className="inline-flex justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg border border-emerald-200 hover:bg-emerald-100 transition-colors"
            >
              Maintenance Programs
            </Link>
            <Link
              to="/contact"
              className="inline-flex justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
            >
              Get a Sarasota Golf Quote
            </Link>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-gray-100 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Get a quote</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            Tell us where you’re located (Sarasota-area or elsewhere in Florida), the approximate length/area of cart paths and sidewalks,
            any staining or algae issues, and your preferred timeline. We’ll respond with next steps and pricing guidance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
            >
              Request a Sarasota Quote
            </Link>
            <Link
              to="/maintenance"
              className="inline-flex justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg border border-emerald-200 hover:bg-emerald-50 transition-colors"
            >
              View Maintenance Programs
            </Link>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900">Sarasota golf cart path cleaning FAQ</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">{item.q}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
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
