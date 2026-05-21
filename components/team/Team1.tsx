const members = [
  { name: "Alex Morgan", role: "CEO & Co-Founder", color: "bg-indigo-500" },
  { name: "Sara Chen", role: "CTO", color: "bg-purple-500" },
  { name: "James Park", role: "Head of Design", color: "bg-pink-500" },
  { name: "Layla Hassan", role: "Lead Engineer", color: "bg-emerald-500" },
  { name: "Tom Reeves", role: "Product Manager", color: "bg-orange-500" },
  { name: "Nina Patel", role: "Growth Lead", color: "bg-cyan-500" },
];

export default function Team1() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Meet the Team</h2>
        <p className="text-gray-500 text-center mb-12">The people behind the product.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {members.map((m) => (
            <div key={m.name} className="flex flex-col items-center text-center">
              <div className={`w-20 h-20 rounded-full ${m.color} flex items-center justify-center text-white text-xl font-bold mb-4`}>
                {m.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="font-semibold text-gray-900">{m.name}</h3>
              <p className="text-sm text-gray-500 mt-0.5 mb-3">{m.role}</p>
              <div className="flex gap-3">
                {["in","tw","gh"].map(s => (
                  <a key={s} href="#" className="text-gray-400 hover:text-gray-700 text-xs font-mono border border-gray-200 px-2 py-0.5 rounded">{s}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
