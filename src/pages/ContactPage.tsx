import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SiteHeader from '../components/SiteHeader';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Contact Cart Path Cleaning | Get a Free Quote"
        description="Contact Cart Path Cleaning for a free quote and consultation. Serving golf facilities, country clubs, resorts, and HOA communities nationwide."
        path="/contact"
      />
      <SiteHeader />
      <Contact />
      <Footer />
    </div>
  );
}
