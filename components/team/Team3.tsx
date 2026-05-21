const members = [
  { name: "Alex Morgan", role: "CEO & Co-Founder", color: "bg-indigo-500" },
  { name: "Sara Chen", role: "CTO", color: "bg-purple-500" },
  { name: "James Park", role: "Head of Design", color: "bg-pink-500" },
  { name: "Layla Hassan", role: "Lead Engineer", color: "bg-emerald-500" },
  { name: "Tom Reeves", role: "Product Manager", color: "bg-orange-500" },
];

export default function Team3() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Our Team</h2>
        <div className="flex flex-col divide-y divide-gray-100">
          {members.map((m) => (
            <div key={m.name} className="flex items-center justify-between py-4">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full ${m.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {m.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{m.name}</p>
                  <p className="text-sm text-gray-500">{m.role}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-gray-400 hover:text-gray-700 text-sm">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-gray-700 text-sm">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
