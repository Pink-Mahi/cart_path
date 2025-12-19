import { Building2, TreePine } from 'lucide-react';

export default function TargetMarkets() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized cleaning solutions for golf facilities, country clubs, resorts, and homeowner associations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <TreePine className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Golf Facilities</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Keep cart paths and high-traffic areas pristine without closing holes or disrupting play.
              Our efficient system works alongside your regular maintenance operations.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="bg-emerald-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">No course closure required</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-emerald-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Works with limited water access</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-emerald-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Professional appearance maintained</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-emerald-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Seasonal or recurring service options</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <TreePine className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Country Clubs &amp; Resorts</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Elevate member and guest experience with spotless paths, walkways, and entry areas.
              Discreet service options help you maintain premium standards without disrupting operations.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="bg-indigo-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Member-ready presentation year-round</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-indigo-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Low-disruption cleaning</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-indigo-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Flexible scheduling for events and peak hours</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-indigo-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Safe, clean walkways for guests and staff</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-teal-100 text-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">HOA Communities</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Maintain beautiful, clean sidewalks and common area pathways that enhance property
              values. Fast, efficient cleaning means minimal disruption to residents and their daily routines.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="bg-teal-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Enhanced curb appeal and property values</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-teal-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Minimal resident disruption</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-teal-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Environmentally responsible cleaning</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-teal-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Cost-effective maintenance solution</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
