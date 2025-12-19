import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SiteHeader from '../components/SiteHeader';

export default function FaqPage() {
  const faqs = [
    {
      q: 'Do you have to close the course or block access to paths?',
      a: 'In many cases, no. Our self-contained system moves along the path without hoses stretched across the course. Scheduling depends on your facility operations and safety requirements.',
    },
    {
      q: 'How does the closed-loop system reduce water usage?',
      a: 'Wash water is recovered and reused as part of a closed-loop process, significantly reducing runoff and overall water consumption compared to traditional pressure washing.',
    },
    {
      q: 'How long does it take to clean a golf course?',
      a: 'Most golf courses are completed in just 1–2 days depending on site conditions.',
    },
    {
      q: 'Do you need water access on the property?',
      a: 'Yes, limited access to a water source on the property is typically required, though our system uses dramatically less water than traditional pressure washing and does not require long hoses across the site.',
    },
    {
      q: 'Will your equipment fit on our cart paths?',
      a: 'Yes. Our machine is the width of a typical golf cart or turf mower—not a full-sized truck. We go where golf carts go, navigating the same paths without requiring special access or damaging turf.',
    },
    {
      q: 'What about mold and algae coming back?',
      a: 'After cleaning, we apply a post-treatment to the surface that helps prevent mold and algae regrowth, keeping your paths cleaner longer.',
    },
    {
      q: 'What surfaces can you clean?',
      a: 'We commonly clean golf cart paths, sidewalks, walkways, and other hard surfaces. Surface condition, staining type, and site layout affect the recommended approach.',
    },
    {
      q: 'How do you price jobs?',
      a: 'Pricing depends on total linear footage/square footage, surface condition, access, scheduling constraints, and any special requirements. Contact us for a free quote.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Cart Path Cleaning FAQ | Closed-Loop Cleaning Questions Answered"
        description="Answers to common questions about closed-loop cart path and sidewalk cleaning: scheduling, water usage, surfaces, and pricing."
        path="/faq"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'FAQ', path: '/faq' },
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

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Frequently Asked Questions</h1>
        <p className="mt-6 text-lg text-gray-700">
          Here are quick answers to common questions. If you have a specific site or schedule requirement, reach out and we’ll help.
        </p>

        <div className="mt-10 space-y-6">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">{item.q}</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/contact"
            className="inline-flex justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
          >
            Request a Free Quote
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
