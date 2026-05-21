const members = [
  { name: "Alex Morgan", role: "CEO", color: "bg-indigo-400", followers: "1.2k" },
  { name: "Sara Chen", role: "CTO", color: "bg-purple-400", followers: "980" },
  { name: "James Park", role: "Design Lead", color: "bg-pink-400", followers: "760" },
  { name: "Layla Hassan", role: "Eng Lead", color: "bg-emerald-400", followers: "640" },
];

export default function Profile2() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Team Profiles</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {members.map(m => (
            <div key={m.name} className="border border-gray-200 rounded-2xl p-5 text-center hover:shadow-md transition-shadow">
              <div className={`w-16 h-16 ${m.color} rounded-2xl mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg`}>
                {m.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">{m.name}</h3>
              <p className="text-gray-400 text-xs mt-0.5 mb-3">{m.role}</p>
              <p className="text-xs text-gray-500 mb-3">{m.followers} followers</p>
              <button className="w-full border border-indigo-200 text-indigo-600 hover:bg-indigo-50 text-xs font-semibold py-1.5 rounded-lg transition-colors">Follow</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
