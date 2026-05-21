export default function Testimonials4() {
  const testimonials = [
    {
      name: "Rachel Kim",
      role: "VP of Engineering, Lattice Systems",
      initials: "RK",
      color: "from-blue-400 to-indigo-500",
      quote: "I was skeptical about switching tools mid-quarter, but the Crestline team handled our migration end-to-end. Three weeks later, our sprint velocity is up 25% and engineers are spending less time in stand-ups.",
    },
    {
      name: "Omar Hassan",
      role: "CEO, Northbound Commerce",
      initials: "OH",
      color: "from-emerald-400 to-teal-500",
      quote: "Running a 50-person remote team is hard. Crestline makes it feel like everyone is in the same room. The async check-in feature is a game changer for global teams.",
    },
    {
      name: "Stephanie Park",
      role: "Product Manager, Dawnfield Health",
      initials: "SP",
      color: "from-rose-400 to-pink-500",
      quote: "Compliance and audit trails were a blocker for us adopting any new software. Crestline's enterprise tier gave us everything we needed out of the box — HIPAA-ready configs included.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Trusted by industry leaders</h2>
          <p className="text-gray-500">Hear directly from the people driving results.</p>
        </div>
        <div className="flex flex-col gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col sm:flex-row gap-6 items-start p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xl font-bold flex-shrink-0`}>
                {t.initials}
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">"{t.quote}"</p>
                <div className="text-sm font-bold text-gray-900">{t.name}</div>
                <div className="text-xs text-gray-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
