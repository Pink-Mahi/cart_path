import { Droplets } from 'lucide-react';

export default function Footer() {
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
              Revolutionary closed-loop cleaning technology for golf facilities, clubs, resorts, and HOAs.
              Clean cart paths, sidewalks, and walkways efficiently and keep operations running smoothly.
            </p>
            <div className="inline-block bg-emerald-900/50 text-emerald-300 px-3 py-1 rounded-full text-sm">
              Patent Pending Technology
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#solution" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Our Solution
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/technology" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="/maintenance" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Maintenance
                </a>
              </li>
              <li>
                <a href="/markets" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Who We Serve
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Domains</h3>
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
                &copy; {new Date().getFullYear()} Cart Path Cleaning. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                A division of Pink Mahi INC
              </p>
              <p className="text-gray-500 text-xs mt-2 max-w-md">
                *Performance and water savings vary by surface conditions, equipment setup, and job specifications.
              </p>
              <p className="text-gray-500 text-xs mt-2 max-w-md">
                Certain system features, configurations, control methods, and operating parameters are proprietary and protected by pending patents.
              </p>
            </div>
            <p className="text-gray-400 text-sm">
              Serving golf facilities, country clubs, resorts, and HOA communities nationwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
