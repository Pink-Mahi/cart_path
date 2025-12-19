export default function Process() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple Process, Spectacular Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From quote to completion, we make cart path cleaning effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
              1
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h3>
            <p className="text-gray-600">
              Reach out for a free consultation and site assessment
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
              2
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Schedule</h3>
            <p className="text-gray-600">
              Choose a convenient time that works with your operations
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
              3
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">We Clean</h3>
            <p className="text-gray-600">
              Our team arrives and completes the job quickly and professionally
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
              4
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Enjoy</h3>
            <p className="text-gray-600">
              Pristine, sparkling clean paths with zero disruption
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Cart Paths and Walkways?
          </h3>
          <p className="text-xl mb-8 text-emerald-50">
            Join forward-thinking golf facilities, country clubs, resorts, and HOA communities who've discovered a better way to clean.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Request a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
