export default function Testimonials5() {
  const testimonials = [
    {
      name: "Nina Kowalski",
      role: "Freelance Developer",
      initials: "NK",
      quote: "Incredibly intuitive. Set up my first workspace in minutes.",
      stars: 5,
    },
    {
      name: "Tom Bergmann",
      role: "CTO, Brightline Tech",
      initials: "TB",
      quote: "The API is well-documented and the uptime has been rock solid for 8 months.",
      stars: 5,
    },
    {
      name: "Aisha Kamara",
      role: "Operations, Greenfield Supply",
      initials: "AK",
      quote: "My team pushed back at first but now no one wants to go back to spreadsheets.",
      stars: 5,
    },
    {
      name: "Luis Fontana",
      role: "Product Lead, Sycamore Digital",
      initials: "LF",
      quote: "Crestline replaced four tools in our stack. Our monthly SaaS bill dropped by 60%.",
      stars: 5,
    },
    {
      name: "Hana Osei",
      role: "Marketing Director, Volta Agency",
      initials: "HO",
      quote: "The reporting is stunning. I export beautifully formatted reports to clients every week.",
      stars: 5,
    },
    {
      name: "Ryan Xu",
      role: "Startup Founder",
      initials: "RX",
      quote: "Best project tool for early-stage teams. The free plan is genuinely useful.",
      stars: 5,
    },
  ];

  const Stars = ({ count }: { count: number }) => (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="w-full bg-amber-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-amber-900 mb-3">5 stars across the board</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-amber-700 text-sm font-semibold">4.9 / 5 — from 1,240 reviews</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm">
              <Stars count={t.stars} />
              <p className="text-gray-700 text-sm leading-relaxed mb-5">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-300 flex items-center justify-center text-amber-900 text-xs font-bold">
                  {t.initials}
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
