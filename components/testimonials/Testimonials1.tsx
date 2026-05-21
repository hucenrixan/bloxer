export default function Testimonials1() {
  const testimonials = [
    {
      quote: "Crestline transformed the way our team manages projects. We went from chaos to clarity in under a week.",
      name: "Sarah Chen",
      company: "Novalux Design",
      initials: "SC",
      color: "bg-indigo-500",
    },
    {
      quote: "The automation features alone save us 10+ hours per week. I can't imagine going back to how we worked before.",
      name: "Marcus Albright",
      company: "Bridgepoint Analytics",
      initials: "MA",
      color: "bg-emerald-500",
    },
    {
      quote: "Best onboarding experience I've had with a SaaS tool. The team was up and running in a single afternoon.",
      name: "Priya Nair",
      company: "Stackform Inc.",
      initials: "PN",
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Loved by teams worldwide</h2>
          <p className="text-gray-500 text-lg">Don't take our word for it — hear from our customers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white border border-gray-200 rounded-2xl p-7 flex flex-col gap-5 hover:shadow-md transition-shadow">
              <svg className="w-8 h-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.172C7.582 11.84 9.6 10 12 10V8zm18 0c-3.314 0-6 2.686-6 6v10h10V14h-6.828C25.582 11.84 27.6 10 30 10V8z" />
              </svg>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
