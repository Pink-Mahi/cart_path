import { XCircle } from 'lucide-react';

export default function Problem() {
  const problems = [
    "Many facilities lack accessible water sources on cart paths and walkways",
    "Traditional pressure washing requires extended course closures",
    "Long hoses and manual cleaning create operational nightmares",
    "Excessive water usage and environmental concerns",
    "Algae and moss growth creates slip-and-fall hazards and liability risks",
    "Slow, labor-intensive cleaning disrupts course operations"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Traditional Pressure Washing
              <span className="block text-red-600 mt-2">Creates Impossible Challenges</span>
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              Golf facilities, country clubs, resorts, and HOA communities have struggled for years with dirty cart paths and sidewalks.
              Traditional pressure washing methods simply don't work for large-scale path cleaning operations.
            </p>

            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{problem}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <picture>
              <source srcSet="/dirty-cart-path.webp" type="image/webp" />
              <img
                src="/dirty-cart-path.jpg"
                alt="Dirty cart path"
                className="rounded-lg shadow-2xl"
                loading="lazy"
              />
            </picture>
            <div className="absolute inset-0 bg-gray-900/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
