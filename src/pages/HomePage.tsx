import Benefits from '../components/Benefits';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Process from '../components/Process';
import Seo from '../components/Seo';
import SiteHeader from '../components/SiteHeader';
import Solution from '../components/Solution';
import TargetMarkets from '../components/TargetMarkets';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Cart Path Pressure Washing & Power Washing - Closed-Loop Cleaning for Golf Courses"
        description="Professional cart path pressure washing and power washing for golf courses. Our closed-loop system cleans cart paths, sidewalks, and walkways faster using 90% less water than traditional pressure washing methods."
        path="/"
        includeWebSiteJsonLd
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Cart Path Cleaning',
          url: 'https://cartpathcleaning.com/',
          logo: 'https://cartpathcleaning.com/hero.jpg',
          email: 'info@cartpathcleaning.com',
          telephone: '+1-941-207-0280',
          areaServed: 'US',
          sameAs: [],
          description:
            'Closed-loop cart path and sidewalk cleaning for golf facilities, clubs, resorts, and HOA communities. Faster cleaning using significantly less water with minimal disruption to operations.',
        }}
      />
      <SiteHeader />
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <Process />
      <TargetMarkets />
      <Contact />
      <Footer />
    </div>
  );
}
