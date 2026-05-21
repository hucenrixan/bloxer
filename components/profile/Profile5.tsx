const members = [
  { name: "Alex Morgan", role: "CEO", color: "bg-indigo-500", bio: "Building the future of work." },
  { name: "Sara Chen", role: "CTO", color: "bg-purple-500", bio: "Ex-Google, loves distributed systems." },
  { name: "James Park", role: "Design", color: "bg-pink-500", bio: "Prev Apple. Design is invisible." },
  { name: "Layla Hassan", role: "Engineering", color: "bg-emerald-500", bio: "Full-stack. Open source contributor." },
  { name: "Tom Reeves", role: "Product", color: "bg-orange-500", bio: "Turning ideas into shipped features." },
  { name: "Nina Patel", role: "Growth", color: "bg-cyan-500", bio: "Data-driven growth experiments." },
];

export default function Profile5() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">The Team</h2>
        <div className="flex flex-col gap-3">
          {members.map(m => (
            <div key={m.name} className="bg-white border border-gray-200 rounded-2xl px-5 py-4 flex items-center gap-4 hover:shadow-sm transition-shadow">
              <div className={`w-12 h-12 ${m.color} rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0`}>
                {m.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{m.name}</h3>
                <p className="text-xs text-gray-400">{m.role}</p>
              </div>
              <p className="text-sm text-gray-500 hidden md:block flex-1">{m.bio}</p>
              <button className="border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors flex-shrink-0">Follow</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
