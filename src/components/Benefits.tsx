import { Zap, Droplets, Clock, Leaf, DollarSign, CheckCircle2 } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: "Faster Cleaning",
      description: "Complete projects in less time. Our efficient workflow reduces manual labor and helps shorten project timelines.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Droplets,
      title: "Less Water",
      description: "Wash water is recovered and reused as part of a closed-loop process, significantly reducing runoff and overall water consumption compared to traditional pressure washing.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Clock,
      title: "Zero Downtime",
      description: "Keep your golf course open during cleaning. We work around active play just like maintenance crews mowing fairways.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Minimal water usage, no runoff pollution, and efficient operation make us the sustainable choice for path cleaning.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Faster completion times and reduced water costs mean significant savings compared to traditional methods.",
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      icon: CheckCircle2,
      title: "Professional Results",
      description: "Clean, sparkling paths in a single pass with consistent, professional-grade results every time.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unmatched Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our innovative technology delivers advantages that traditional pressure washing simply cannot match.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`${benefit.bgColor} ${benefit.color} w-14 h-14 rounded-lg flex items-center justify-center mb-6`}>
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
