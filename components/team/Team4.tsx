const members = [
  { name: "Alex Morgan", role: "CEO", color: "bg-indigo-600" },
  { name: "Sara Chen", role: "CTO", color: "bg-purple-600" },
  { name: "James Park", role: "Design", color: "bg-pink-600" },
  { name: "Layla Hassan", role: "Engineering", color: "bg-emerald-600" },
  { name: "Tom Reeves", role: "Product", color: "bg-orange-600" },
  { name: "Nina Patel", role: "Growth", color: "bg-cyan-600" },
];

export default function Team4() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-2">The Crew</h2>
        <p className="text-gray-400 text-center mb-12">Talented humans building something great.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {members.map((m) => (
            <div key={m.name} className="group relative rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 p-6 text-center hover:border-indigo-500 transition-colors">
              <div className={`w-16 h-16 rounded-xl ${m.color} mx-auto flex items-center justify-center text-white text-lg font-bold mb-4`}>
                {m.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="font-semibold text-white">{m.name}</h3>
              <p className="text-sm text-gray-400 mt-0.5 mb-4">{m.role}</p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2 justify-center">
                <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300 border border-indigo-800 px-3 py-1 rounded-full">LinkedIn</a>
                <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300 border border-indigo-800 px-3 py-1 rounded-full">Twitter</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
