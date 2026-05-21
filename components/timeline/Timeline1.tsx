const events = [
  { year: "2019", title: "Company Founded", desc: "Started in a garage with 3 people and a big idea." },
  { year: "2020", title: "First 1,000 Users", desc: "Hit our first major milestone and closed our seed round." },
  { year: "2021", title: "Series A — $8M", desc: "Raised $8M to grow the team and expand the product." },
  { year: "2022", title: "Launched Enterprise", desc: "Shipped our enterprise tier, landing 50+ Fortune 500 clients." },
  { year: "2024", title: "10M Users", desc: "Crossed 10 million users across 140 countries." },
];

export default function Timeline1() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Journey</h2>
        <p className="text-gray-500 mb-12">From a small team to a global platform.</p>
        <div className="relative">
          <div className="absolute left-[72px] top-0 bottom-0 w-px bg-gray-200" />
          <div className="flex flex-col gap-8">
            {events.map((e) => (
              <div key={e.year} className="flex gap-6 items-start">
                <span className="text-sm font-bold text-indigo-600 w-16 flex-shrink-0 pt-1 text-right">{e.year}</span>
                <div className="w-3 h-3 rounded-full bg-indigo-600 flex-shrink-0 mt-1.5 relative z-10" />
                <div>
                  <h3 className="font-semibold text-gray-900">{e.title}</h3>
                  <p className="text-gray-500 text-sm mt-0.5">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
