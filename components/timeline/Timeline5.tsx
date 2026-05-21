const events = [
  { year: "2019", title: "Founded", desc: "3 people, 1 idea, a rented office.", color: "bg-indigo-500" },
  { year: "2020", title: "Seed Round", desc: "$1.2M raised, first 1,000 users.", color: "bg-purple-500" },
  { year: "2021", title: "Series A", desc: "$8M raised, team of 25.", color: "bg-pink-500" },
  { year: "2023", title: "10M Users", desc: "Global reach, 140 countries.", color: "bg-emerald-500" },
];

export default function Timeline5() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Milestones</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {events.map((e, i) => (
            <div key={e.year} className="relative">
              <div className={`${e.color} rounded-2xl p-6 text-white`}>
                <p className="text-2xl font-black mb-1">{e.year}</p>
                <h3 className="font-bold mb-1">{e.title}</h3>
                <p className="text-sm opacity-80">{e.desc}</p>
              </div>
              {i < events.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 text-gray-300 text-lg z-10">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
