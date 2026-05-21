const events = [
  { year: "2019", title: "Company Founded", desc: "Started in a garage with 3 people and a vision.", side: "left" },
  { year: "2020", title: "First 1,000 Users", desc: "Hit our first major milestone and closed seed round.", side: "right" },
  { year: "2021", title: "Series A — $8M", desc: "Raised $8M to grow the team and expand the product.", side: "left" },
  { year: "2023", title: "10M Users", desc: "Crossed 10M users and expanded to 140 countries.", side: "right" },
];

export default function Timeline3() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our History</h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />
          <div className="flex flex-col gap-10">
            {events.map((e) => (
              <div key={e.year} className={`flex gap-8 items-start ${e.side === "right" ? "flex-row-reverse" : ""}`}>
                <div className={`flex-1 ${e.side === "right" ? "text-left" : "text-right"}`}>
                  <p className="text-xs font-bold text-indigo-600 mb-1">{e.year}</p>
                  <h3 className="font-semibold text-gray-900 mb-1">{e.title}</h3>
                  <p className="text-gray-500 text-sm">{e.desc}</p>
                </div>
                <div className="w-3 h-3 rounded-full bg-indigo-600 flex-shrink-0 mt-1 relative z-10" />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
