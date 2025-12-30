import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSet, setCurrentSet] = useState(0);

  const messageSets = [
    [
      { title: 'Faster', subtitle: 'Patent-pending technology' },
      { title: 'Smarter', subtitle: 'Closed-loop water recovery' },
      { title: 'Compliant', subtitle: 'Designed for regulations' }
    ],
    [
      { title: 'More Efficient', subtitle: 'Advanced cleaning system' },
      { title: 'Cost Effective', subtitle: 'Minimal water waste' },
      { title: 'Eco-Safe', subtitle: 'Zero-runoff design' }
    ],
    [
      { title: 'Faster Cleaning', subtitle: 'Innovative technology' },
      { title: 'Lower Costs', subtitle: 'Water-recovery system' },
      { title: 'Eco-Friendly', subtitle: 'Prevents runoff' }
    ],
    [
      { title: 'Faster Service', subtitle: 'Patent-pending technology' },
      { title: 'Better Value', subtitle: 'Efficient water recovery' },
      { title: 'Eco-Responsible', subtitle: 'Closed-loop system' }
    ]
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % 4);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

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

      <style>{`
        @keyframes flipIn {
          0% {
            transform: rotateY(90deg);
            opacity: 0;
          }
          100% {
            transform: rotateY(0deg);
            opacity: 1;
          }
        }

        .tile-enter {
          animation: flipIn 0.6s ease-out forwards;
        }

        .tile-container {
          perspective: 1000px;
        }

        .tile-wrapper {
          min-height: 160px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .tile-0 {
          animation-delay: 0s;
        }

        .tile-1 {
          animation-delay: 0.35s;
        }

        .tile-2 {
          animation-delay: 0.7s;
        }
      `}</style>

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

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto tile-container">
          {messageSets[currentSet].map((message, index) => (
            <div 
              key={`${currentSet}-${index}`}
              className={`tile-wrapper bg-white/10 backdrop-blur-sm md:backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/20 w-60 md:w-full mx-auto tile-enter tile-${index}`}
            >
              <div className="text-4xl font-bold text-white mb-2">{message.title}</div>
              <div className="text-white/90">{message.subtitle}</div>
            </div>
          ))}
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
