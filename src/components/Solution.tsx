import { Sparkles } from 'lucide-react';

export default function Solution() {
  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Patent Pending Innovation
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Cart Path Cleaning Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our revolutionary closed-loop system changes everything about how cart paths are cleaned.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <picture>
              <source srcSet="/clean-cart-path.webp" type="image/webp" />
              <img
                src="/clean-cart-path.jpg"
                alt="Clean golf cart path"
                className="rounded-lg shadow-2xl"
                loading="lazy"
              />
            </picture>
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Self-Contained Mobile System
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Our custom-manufactured system features a compact cleaning machine that captures wash water at the point
              of cleaning, minimizing runoff and water loss. A support water cart travels alongside and refills from an
              onsite water source—no hoses stretched across the course.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our equipment is sized like a golf cart or turf mower—not a full-sized truck. We go where golf carts go,
              navigating the same paths without damaging turf or requiring special access.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Simply drive along the path and watch as our system cleans in a single pass—minimizing runoff and
              keeping your course clean.
            </p>
            <div className="flex items-center gap-2 text-emerald-600 font-semibold">
              <Sparkles className="w-5 h-5" />
              <span>Clean, sparkling paths in one pass</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How Our Closed-Loop System Works
          </h3>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Apply</h4>
              <p className="text-gray-600 text-sm">Pressurized water cleans the surface</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Recover</h4>
              <p className="text-gray-600 text-sm">Wash water captured at point of cleaning</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-emerald-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Condition</h4>
              <p className="text-gray-600 text-sm">Prepared for reuse</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-emerald-600">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Reuse</h4>
              <p className="text-gray-600 text-sm">Recovered water supports efficient operations</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-emerald-600">5</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Post-Treat</h4>
              <p className="text-gray-600 text-sm">Surface treatment helps prevent regrowth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
