export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <picture className="absolute inset-0 z-0">
        <source srcSet="/hero.webp" type="image/webp" />
        <img
          src="/hero.jpg"
          alt="Golf cart path cleaning"
          className="w-full h-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-900/55 to-emerald-800/45"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <span className="text-white text-sm font-medium">Patent Pending Technology</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Cart Path Cleaning<br />
          <span className="text-emerald-300">Revolutionized</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Clean your golf cart paths and sidewalks faster while using significantly less water.<br />
          Minimal disruption to play.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="bg-white text-emerald-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get a Quote
          </a>
          <a
            href="#solution"
            className="bg-emerald-700/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700/70 transition-all border-2 border-white/30"
          >
            Learn More
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm md:backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/20 w-60 md:w-full mx-auto">
            <div className="text-4xl font-bold text-white mb-2">Faster</div>
            <div className="text-white/90">Efficient workflow</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm md:backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/20 w-60 md:w-full mx-auto">
            <div className="text-4xl font-bold text-white mb-2">Less</div>
            <div className="text-white/90">Water consumption</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm md:backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/20 w-60 md:w-full mx-auto">
            <div className="text-4xl font-bold text-white mb-2">Low</div>
            <div className="text-white/90">Disruption</div>
          </div>
        </div>

        <p className="mt-4 text-xs text-white/70 max-w-4xl mx-auto">
          *Performance and water savings vary by surface conditions, equipment setup, and job specifications.
        </p>
      </div>

      <a
        href="#solution"
        aria-label="Scroll to the next section"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce rounded-full focus:outline-none focus:ring-2 focus:ring-white/60"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 hover:border-white/80 transition-colors">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </a>
    </div>
  );
}
