const ceo = { name: "Alex Morgan", role: "CEO & Co-Founder", bio: "Visionary leader with 15+ years building developer tools. Previously VP of Product at Stripe.", color: "bg-indigo-500" };
const members = [
  { name: "Sara Chen", role: "CTO", color: "bg-purple-500" },
  { name: "James Park", role: "Head of Design", color: "bg-pink-500" },
  { name: "Layla Hassan", role: "Lead Engineer", color: "bg-emerald-500" },
  { name: "Tom Reeves", role: "Product Manager", color: "bg-orange-500" },
];

export default function Team5() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Meet the Team</h2>
        <p className="text-gray-500 text-center mb-12">We are a small, focused team on a big mission.</p>
        <div className={`flex gap-6 items-center bg-indigo-50 border border-indigo-100 rounded-2xl p-8 mb-8`}>
          <div className={`w-24 h-24 rounded-2xl ${ceo.color} flex-shrink-0 flex items-center justify-center text-white text-2xl font-bold`}>
            {ceo.name.split(" ").map(n => n[0]).join("")}
          </div>
          <div>
            <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">Founder</span>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">{ceo.name}</h3>
            <p className="text-indigo-600 font-medium text-sm mb-2">{ceo.role}</p>
            <p className="text-gray-600 text-sm">{ceo.bio}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {members.map((m) => (
            <div key={m.name} className="flex flex-col items-center text-center border border-gray-200 rounded-xl p-5">
              <div className={`w-14 h-14 rounded-full ${m.color} flex items-center justify-center text-white font-bold mb-3`}>
                {m.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">{m.name}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
