const events = [
  { year: "2019", title: "Founded", desc: "Started with 3 people and a big idea." },
  { year: "2020", title: "1K Users", desc: "Closed seed round and hit first milestone." },
  { year: "2021", title: "Series A", desc: "Raised $8M to scale the product." },
  { year: "2022", title: "Enterprise", desc: "Launched enterprise tier with 50+ Fortune 500 clients." },
  { year: "2024", title: "10M Users", desc: "Global scale, 140 countries." },
];

export default function Timeline4() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-[72px] top-0 bottom-0 w-px bg-gray-700" />
          <div className="flex flex-col gap-8">
            {events.map((e) => (
              <div key={e.year} className="flex gap-6 items-start">
                <span className="text-sm font-bold text-indigo-400 w-16 flex-shrink-0 pt-1 text-right">{e.year}</span>
                <div className="w-3 h-3 rounded-full bg-indigo-500 flex-shrink-0 mt-1.5 relative z-10 ring-4 ring-gray-900" />
                <div>
                  <h3 className="font-semibold text-white">{e.title}</h3>
                  <p className="text-gray-400 text-sm mt-0.5">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
