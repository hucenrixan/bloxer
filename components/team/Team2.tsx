const members = [
  { name: "Alex Morgan", role: "CEO & Co-Founder", bio: "10+ years leading product teams. Previously at Stripe and Figma. Passionate about developer tools.", color: "bg-indigo-400" },
  { name: "Sara Chen", role: "Chief Technology Officer", bio: "Ex-Google engineer. Built distributed systems at scale. Loves Rust and teaching engineering fundamentals.", color: "bg-purple-400" },
  { name: "James Park", role: "Head of Design", bio: "Designed products used by millions. Formerly at Apple. Believes great design is invisible.", color: "bg-pink-400" },
];

export default function Team2() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Leadership</h2>
        <p className="text-gray-500 mb-12">The founders and leaders driving our mission forward.</p>
        <div className="flex flex-col gap-8">
          {members.map((m) => (
            <div key={m.name} className="flex gap-6 items-start bg-white border border-gray-200 rounded-2xl p-6">
              <div className={`w-24 h-24 rounded-xl ${m.color} flex-shrink-0 flex items-center justify-center text-white text-2xl font-bold`}>
                {m.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{m.name}</h3>
                <p className="text-indigo-600 font-medium text-sm mb-3">{m.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{m.bio}</p>
                <div className="flex gap-3 mt-4">
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900 underline">LinkedIn</a>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900 underline">Twitter</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
