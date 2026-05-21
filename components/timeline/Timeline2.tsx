const events = [
  { year: "2019", title: "Founded", desc: "Started with 3 people and a big idea." },
  { year: "2020", title: "1,000 Users", desc: "Hit our first milestone and closed seed round." },
  { year: "2021", title: "Series A", desc: "Raised $8M and grew the team to 25 people." },
  { year: "2023", title: "10M Users", desc: "Crossed 10M users across 140 countries." },
];

export default function Timeline2() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Our Story</h2>
        <p className="text-gray-500 text-center mb-14">Built with purpose, grown with care.</p>
        <div className="relative">
          <div className="absolute top-4 left-0 right-0 h-px bg-gray-300 hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {events.map((e, i) => (
              <div key={e.year} className="relative text-center">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center mx-auto mb-3 relative z-10">{i + 1}</div>
                <p className="text-xs font-bold text-indigo-600 mb-1">{e.year}</p>
                <h3 className="font-semibold text-gray-900 mb-1">{e.title}</h3>
                <p className="text-gray-500 text-xs">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
