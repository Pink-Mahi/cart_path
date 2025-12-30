import { Link, NavLink } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

export default function SiteHeader() {
  const { t } = useLanguage();
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
              {t('nav.services')}
            </NavLink>
            <NavLink to="/technology" className={linkClassName}>
              {t('nav.technology')}
            </NavLink>
            <NavLink to="/maintenance" className={linkClassName}>
              {t('nav.maintenance')}
            </NavLink>
            <NavLink to="/markets" className={linkClassName}>
              {t('nav.whoWeServe')}
            </NavLink>
            <NavLink to="/gallery" className={linkClassName}>
              {t('nav.gallery')}
            </NavLink>
            <NavLink to="/case-studies" className={linkClassName}>
              {t('nav.caseStudies')}
            </NavLink>
            <NavLink to="/locations" className={linkClassName}>
              {t('nav.locations')}
            </NavLink>
            <NavLink to="/faq" className={linkClassName}>
              {t('nav.faq')}
            </NavLink>
            <NavLink to="/contact" className={linkClassName}>
              {t('nav.contact')}
            </NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Link
              to="/contact"
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors"
            >
              {t('nav.getQuote')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
