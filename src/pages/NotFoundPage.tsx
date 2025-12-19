import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SiteHeader from '../components/SiteHeader';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Page Not Found | Cart Path Cleaning"
        description="The page you are looking for could not be found."
        path="/404"
      />
      <SiteHeader />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900">Page not found</h1>
        <p className="mt-4 text-gray-700">The page you requested doesn’t exist. Use the links below to get back on track.</p>
        <div className="mt-8 flex gap-4">
          <Link
            to="/"
            className="inline-flex justify-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            to="/contact"
            className="inline-flex justify-center bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold border border-emerald-200 hover:bg-emerald-50 transition-colors"
          >
            Contact
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
