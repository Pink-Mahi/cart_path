import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SiteHeader from '../components/SiteHeader';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Golf Cart Path Cleaning Services | Cart Path Cleaning"
        description="Closed-loop cart path and sidewalk cleaning for golf facilities, clubs, resorts, and HOA communities. Faster cleaning, less water usage, and minimal disruption."
        path="/services"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Golf Cart Path Cleaning & Sidewalk Cleaning',
          provider: {
            '@type': 'Organization',
            name: 'Cart Path Cleaning',
            url: 'https://cartpathcleaning.com/',
            telephone: '+1-941-207-0280',
          },
          areaServed: 'US',
          serviceType: ['Golf cart path cleaning', 'Sidewalk cleaning', 'Walkway cleaning'],
          description:
            'Closed-loop cart path and sidewalk cleaning for golf facilities, clubs, resorts, and HOA communities. Fast, low-disruption cleaning designed to reduce runoff and overall water consumption.',
          url: 'https://cartpathcleaning.com/services',
        }}
      />
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Cart Path & Sidewalk Cleaning Services</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          Cart Path Cleaning provides closed-loop, low-disruption surface cleaning designed for high-traffic golf and community
          environments. Our patent-pending system recovers and reuses wash water as part of a closed-loop process to help reduce runoff
          and overall water consumption.
        </p>

        <section className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">Golf Cart Path Cleaning</h2>
            <p className="mt-3 text-gray-700">
              Improve curb appeal and safety while keeping play moving. We clean efficiently so you can maintain spotless paths with
              minimal operational disruption.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">Sidewalk & Walkway Cleaning</h2>
            <p className="mt-3 text-gray-700">
              Remove algae, grime, and staining from sidewalks and pedestrian areas to reduce slip hazards and keep common spaces
              welcoming.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">Recurring Maintenance Programs</h2>
            <p className="mt-3 text-gray-700">
              Keep surfaces consistently clean with seasonal or scheduled service. Ideal for clubs, resorts, and HOA communities.
            </p>
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-emerald-50 border border-emerald-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900">Why Closed-Loop Cleaning Matters</h2>
          <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="font-semibold text-gray-900">Dramatically less water</div>
              <div className="text-gray-700 mt-1">Wash water is recovered and reused as part of a closed-loop process, significantly reducing runoff and overall water consumption compared to traditional pressure washing.</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Fast turnaround</div>
              <div className="text-gray-700 mt-1">Most golf courses are completed in just 1–2 days depending on site conditions.</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Golf-cart-sized equipment</div>
              <div className="text-gray-700 mt-1">Our machine is the width of a golf cart—not a full-sized truck. No hoses, and we go where carts go.</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Post-treatment included</div>
              <div className="text-gray-700 mt-1">After cleaning, we apply a surface treatment to help prevent mold and algae regrowth.</div>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-gray-100 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Protecting a major golf-course asset</h2>
          <p className="mt-4 text-gray-700 max-w-4xl">
            Cart paths are expensive infrastructure, and industry sources note they have a lifespan. Preventive maintenance is typically
            most cost-effective when done early—before small issues become expensive repairs or replacement projects.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div>
              <div className="font-semibold text-gray-900">How long are cart paths on 18 holes?</div>
              <div className="mt-1 text-gray-700">
                Many 18-hole facilities end up with long path networks. Some industry estimates cite more than 10 miles of cart paths.
              </div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">What does replacement cost?</div>
              <div className="mt-1 text-gray-700">
                Ballpark installation costs are often cited around $20–$30 per linear foot for concrete/asphalt cart paths. For example,
                a 7-mile path system is about 36,960 linear feet, which puts the rough install cost around $739k–$1.1M at that range.
                Depending on demolition, base work, drainage, phasing, and market conditions, today’s real-world totals can be higher.
              </div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Why clean regularly?</div>
              <div className="mt-1 text-gray-700">
                Regular cleaning helps remove grime and biological buildup, improves traction, and can support protective sealing by
                helping sealers adhere properly.
              </div>
            </div>
          </div>
          <p className="mt-6 text-gray-600 text-sm max-w-4xl">
            Actual cart path length, condition, and cost vary widely by course design, layout, and materials. We avoid “one-size-fits-all”
            claims and provide recommendations based on your specific facility.
          </p>
        </section>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="inline-flex justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
          >
            Request a Free Quote
          </Link>
          <Link
            to="/markets"
            className="inline-flex justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg border border-emerald-200 hover:bg-emerald-50 transition-colors"
          >
            See Who We Serve
          </Link>
          <Link
            to="/maintenance"
            className="inline-flex justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg border border-emerald-200 hover:bg-emerald-50 transition-colors"
          >
            Maintenance Programs
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
