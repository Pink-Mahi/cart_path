import { Droplets } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="w-8 h-8 text-emerald-400" />
              <span className="text-2xl font-bold">Cart Path Cleaning</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {t('footer.tagline') as string}
            </p>
            <div className="inline-block bg-emerald-900/50 text-emerald-300 px-3 py-1 rounded-full text-sm">
              {t('solution.badge') as string}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.quickLinks') as string}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#solution" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.links.ourSolution') as string}
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.links.services') as string}
                </a>
              </li>
              <li>
                <a href="/technology" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.links.technology') as string}
                </a>
              </li>
              <li>
                <a href="/maintenance" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.links.maintenance') as string}
                </a>
              </li>
              <li>
                <a href="/markets" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.links.whoWeServe') as string}
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.links.gallery') as string}
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.links.caseStudies') as string}
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.links.faq') as string}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.links.contactUs') as string}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.domainsTitle') as string}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>cartpathcleaning.com</li>
              <li>cartpathpressurewashing.com</li>
              <li>cartpathpowerwashing.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>
                &copy; {new Date().getFullYear()} Cart Path Cleaning. {t('footer.copyright') as string}
              </p>
              <p className="text-gray-500 text-xs mt-1">
                {t('footer.division') as string}
              </p>
              <p className="text-gray-500 text-xs mt-2 max-w-md">
                {t('footer.disclaimer1') as string}
              </p>
              <p className="text-gray-500 text-xs mt-2 max-w-md">
                {t('footer.disclaimer2') as string}
              </p>
            </div>
            <p className="text-gray-400 text-sm">
              {t('footer.servingLine') as string}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
