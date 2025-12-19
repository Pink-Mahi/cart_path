import { Link, NavLink } from 'react-router-dom';

export default function SiteHeader() {
  const linkClassName = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-colors ${isActive ? 'text-emerald-700' : 'text-gray-700 hover:text-emerald-700'}`;

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="font-bold text-lg text-gray-900">
            Cart Path Cleaning
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/services" className={linkClassName}>
              Services
            </NavLink>
            <NavLink to="/technology" className={linkClassName}>
              Technology
            </NavLink>
            <NavLink to="/maintenance" className={linkClassName}>
              Maintenance
            </NavLink>
            <NavLink to="/markets" className={linkClassName}>
              Who We Serve
            </NavLink>
            <NavLink to="/gallery" className={linkClassName}>
              Gallery
            </NavLink>
            <NavLink to="/case-studies" className={linkClassName}>
              Case Studies
            </NavLink>
            <NavLink to="/locations" className={linkClassName}>
              Locations
            </NavLink>
            <NavLink to="/faq" className={linkClassName}>
              FAQ
            </NavLink>
            <NavLink to="/contact" className={linkClassName}>
              Contact
            </NavLink>
          </nav>

          <Link
            to="/contact"
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
